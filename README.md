# AI & Robotics Summer Workshop Portal

This project was developed as part of the Kidrove Web Development Internship Assessment to demonstrate full-stack web development skills, responsive UI design, backend API implementation, form handling, deployment workflows, and code organization.

---

## 👨‍💻 Author Information

* **Name:** Mahammad Aslam
* **Role:** Full-Stack Developer
* **GitHub:** https://github.com/mahammadaslam/ai-robotics-summer-workshop.git

---

## 📝 Project Overview

The **AI & Robotics Summer Workshop Portal** is a full-stack web application designed to act as an offline-first and online-synced landing page for a 4-week workshop. It enables custom-designed student registrations while presenting essential curriculum details, learning outcomes, and answered parent FAQs. The portal features automated database synchronization with a solid Express API backend, standard secure validations, and modern client interface design.

---

## 🚀 Features

* **Responsive React UI:** Multi-device compatible layout adjusting gracefully to mobile viewports, tablets, and full desktops.
* **Component-Based Architecture:** High modularity featuring independent visual parts ensuring standard component isolation and easier maintainability.
* **Workshop Highlights:** Direct information panel summarizing pricing, class timing, recommended age, and start dates.
* **Learning Outcomes:** Graphical list presenting technical and developmental competencies students gain during the course.
* **FAQ Section:** Accordion-type question-and-answer container addressing prerequisites, environment configuration, and materials.
* **Registration Form:** Advanced state-driven interactive registration section with direct submission loading screens.
* **Form Validation:** Client-side email, name, and telephone verification using standard compliant regex and validation state notifications.
* **Express.js API:** Server backend processing, parsing, filtering, and committing client-submitted information securely.
* **Automatic Offline/Local Fallback Storage:** Registrations intelligently compile and fall back to local disk storage if database connections are temporarily offline, auto-recovering without operational interruptions.
* **Loading States:** Comprehensive UX feedback with animated loading wheels, disabled buttons, and validation prompt triggers for smooth network requests.

---

## 🛠️ Tech Stack

### Frontend
* **React.js** (v18+) - Component-driven view layer
* **TypeScript** - Strict data model definition and safe typing
* **Tailwind CSS** - Efficient, responsive utility-based design
* **React Hook Form** - Optimized form state and validation engine
* **Framer Motion** - Controlled page transitions and component animations
* **Axios** - Standard client-server HTTP API interactions
* **Lucide React** - Clean vector iconography

### Backend
* **Node.js** - JavaScript backend runtime
* **Express.js** - Robust routing framework

### Database & Storage
* **MongoDB Atlas** - Cloud database integration for persistent records
* **Local Storage Fallback** - Disk-based fallback storage for resilient server processes

---

## 📂 Project Structure

```bash
├── .env.example                # Template for environment variables
├── .gitignore                  # Standard git tracking exclusions
├── README.md                   # Project documentation index (this file)
├── index.html                  # Core single-page application document
├── metadata.json               # Application configurations and permissions
├── package.json                # Project script engines and dependency declarations
├── server.ts                   # Express server entry point and API route controller
├── tsconfig.json               # TypeScript path and compile settings
├── vite.config.ts              # Vite asset bundle and proxy configurations
└── src/
    ├── App.tsx                 # Core parent component coordinating layout and render flow
    ├── index.css               # Global styling entry matching Tailwind directives
    ├── main.tsx                # Client-side Virtual DOM mounting element
    ├── types.ts                # TypeScript type definitions
    └── components/
        ├── FAQ.tsx             # Interactive, accordion-based FAQ component
        ├── Footer.tsx          # Copyright footnote panel
        ├── Hero.tsx            # Header section with simulated code visualizer
        ├── LearningOutcomes.tsx # Grid mapping technical competencies
        ├── RegistrationForm.tsx # Clean structured registration form with real-time validation
        └── WorkshopDetails.tsx # Panel outlining pricing and schedule cards
```

---

## 🛠️ Installation Guide

Follow these steps to configure and run the project in your local development environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-robotics-summer-workshop.git
   cd ai-robotics-summer-workshop
   ```

2. **Install node dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the project's root folder based on `.env.example`:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```
   *Note: If no MONGODB_URI is provided, the backend falls back automatically to local storage seamlessly.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Compile production build:**
   ```bash
   npm run build
   ```

---

## 🌐 API Documentation

### Create Registration Enquiry

Validates, handles, and stores individual student workshop registration details.

* **Endpoint:** `POST /api/enquiry`
* **Content-Type:** `application/json`

#### Request Schema
```json
{
  "name": "Mahammad Aslam",
  "email": "example@gmail.com",
  "phone": "9876543210"
}
```

#### Success Response (Status Code: 200)
```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

#### Bad Request / Invalid Email Response (Status Code: 400)
```json
{
  "success": false,
  "error": "Required fields validation failed",
  "message": "Please enter a valid email address."
}
```

---

## 🚢 Deployment Guide

### GitHub Version Control Setup

Ensure your local edits are fully committed using standardized commit definitions:

```bash
git init
git add .
git commit -m "feat: complete registration flow with standard regex"
git branch -M main
git remote add origin https://github.com/yourusername/ai-robotics-summer-workshop.git
git push -u origin main
```

Standardized development commits followed during development:
* `feat: create hero section`
* `feat: add registration form`
* `feat: implement enquiry API`
* `feat: integrate MongoDB`
* `fix: resolve email validation issue`
* `docs: update README`

### Vercel Serverless Hosting

1. **Import:** Connect your GitHub account to [Vercel](https://vercel.com/) and click "Add New Project", select `ai-robotics-summer-workshop`.
2. **Environment Variables:** Define `MONGODB_URI` under Vercel Project Settings to link the cloud database in the production environment.
3. **Build Settings:** Vercel automatically detects the Vite deployment parameters. Click "Deploy" to complete deployment.

---

## 🎯 Evaluation Criteria Alignment

* **Web Development Skills:** Leveraged modern JavaScript engines, Type-safe variables, and standard styling definitions.
* **Responsive Design:** Utilized Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) ensuring pixel-perfect adaptability from smallest mobile screen widths to extreme widescreen bounds.
* **Component-Based Architecture:** Standardized structure dividing UI logic into individual react elements (`Hero`, `FAQ`, `RegistrationForm`, `WorkshopDetails`, `LearningOutcomes`, `Footer`) to guarantee separation of concerns.
* **API Development:** Implemented Express.js endpoints with clear payload sanitization, appropriate HTTP status codes, and JSON outputs.
* **Form Validation:** Employed client-side and server-side valid standard regex validations, displaying clean feedback on incorrect submissions.
* **Backend Integration:** Created clear DB checking middleware preserving persistent records in Atlas with automatic local fallback processes.
* **GitHub & Deployment Workflow:** Followed semantic commit standards and configured a lightweight distribution build suited for serverless Vercel host deployment.
* **Clean Code Practices:** Organized files, clean indentation, explicit TypeScript interface typing declarations, and descriptive visual variable names.

---

## 🔮 Future Improvements

* **Analytics Dashboard:** Build a administrative backend page displaying cumulative registration metrics, average learner age ranges, and payment status checks.
* **Payment Gateway Integration:** Incorporate standard Stripe Checkout setups facilitating online tuition payments directly at form completion.
* **Email Confirmation Dispatch:** Integrate SendGrid or Nodemailer APIs for automatic verification email delivery containing receipts and calendar workspace invitations.
* **SMS Notifications:** Implement Twilio alerts to send parents automated reminders prior to session starts.

---

## 📄 License & Disclaimer

Developed as part of the Kidrove Web Development Internship Assessment. This project is an educational proof-of-concept. All rights and trademarks belong to their respective owners.

---

## Deployment Links

### Live Application

https://ai-robotics-summer-workshop-one.vercel.app

### GitHub Repository

https://github.com/mahammadaslam/ai-robotics-summer-workshop.git
