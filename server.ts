import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment configuration
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- DATABASE INTEGRATION (MongoDB Schema + Resilient Fallback) ---
let isMongoConnected = false;
let databaseMode = "Unconfigured";

// Define the MongoDB / Mongoose Schema for the Enquiry
const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, "Please fill a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit cellphone number"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Mongoose model or initialize fallback driver
let EnquiryModel: mongoose.Model<any>;
try {
  EnquiryModel = mongoose.model("Enquiry", EnquirySchema);
} catch (error) {
  EnquiryModel = mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
}

// Memory-based local fallback database array if mongo URI is not set/working
interface IFallbackEnquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}
const fallbackEnquiries: IFallbackEnquiry[] = [];

// Try to establish connection with MongoDB URI
const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI;

if (mongoURI) {
  console.log("[DATABASE] MongoDB URI detected. Attempting connection...");
  mongoose
    .connect(mongoURI, {
      serverSelectionTimeoutMS: 2500, // Speed up failure if wrong config, avoiding timeout crashes!
    })
    .then(() => {
      isMongoConnected = true;
      databaseMode = "MongoDB Cloud Database";
      console.log("[DATABASE] Successfully connected of MongoDB database!");
    })
    .catch((err) => {
      databaseMode = "Local Disk / Memory Fallback";
      console.warn(
        `[DATABASE WARNING] Could not connect to MongoDB URI. Falling back to in-memory: `,
        err.message
      );
    });
} else {
  databaseMode = "Local Disk / Memory Fallback (Unconfigured URI)";
  console.info(
    "[DATABASE INFO] MONGODB_URI is absent in environment. Operating in resilient Local Fallback mode."
  );
}

// --- API IMPLEMENTATION ---

// 1. Health & Configuration status report (Excellent for diagnostics/recruiters)
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database: {
      connected: isMongoConnected,
      mode: databaseMode,
      schema: "Enquiry (name: String, email: String, phone: String, createdAt: Date)"
    },
    appUrl: process.env.APP_URL || "http://localhost:3000",
    developmentTime: "2026-06-18T21:36:55-07:00"
  });
});

// 2. Submit workshop Enquiry (POST /api/enquiry)
app.post("/api/enquiry", async (req, res): Promise<any> => {
  try {
    const { name, email, phone } = req.body;

    // --- Dynamic Backend Form Validation ---
    if (!name || typeof name !== "string" || name.trim().length < 3) {
      return res.status(400).json({
        success: false,
        error: "Required fields validation failed",
        message: "Student name is required and should be at least 3 characters.",
      });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Required fields validation failed",
        message: "Please enter a valid email address.",
      });
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone || typeof phone !== "string" || !phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: "Required fields validation failed",
        message: "Please enter a valid 10-digit cellphone number starting with 6-9.",
      });
    }

    // --- Persist the details depending on Connection Mode ---
    let savedRecord;

    if (isMongoConnected) {
      // Real database storage
      const newEnquiry = new EnquiryModel({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim()
      });
      const persisted = await newEnquiry.save();
      savedRecord = {
        id: persisted._id.toString(),
        name: persisted.name,
        email: persisted.email,
        phone: persisted.phone,
        createdAt: persisted.createdAt.toISOString()
      };
    } else {
      // Local fallback storing to simulate direct integration and stay 100% interactive!
      const mockId = "enq_" + Math.random().toString(36).substr(2, 9);
      const newEnquiry: IFallbackEnquiry = {
        _id: mockId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        createdAt: new Date()
      };
      fallbackEnquiries.push(newEnquiry);
      savedRecord = {
        id: newEnquiry._id,
        name: newEnquiry.name,
        email: newEnquiry.email,
        phone: newEnquiry.phone,
        createdAt: newEnquiry.createdAt.toISOString()
      };
      console.log(`[LOCAL DEV DATABASE] Record added successfully:`, savedRecord);
    }

    // Success response structure
    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      databaseMode: databaseMode,
      data: savedRecord
    });

  } catch (error: any) {
    console.error("[POST /api/enquiry] Error submitting details:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while caching registration.",
      error: error.message || error
    });
  }
});


// --- VITE INTERPRETATION & STATIC PIPELINE ---

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[SERVER] Vite development middleware mounted successfully.");
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("[SERVER] Production build static folder assets mounted.");
  }

  // Bind to port 3000 as strictly requested and enforced by reverse proxy
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`[HOST] Database mode current = "${databaseMode}"`);
  });
}

startServer();
