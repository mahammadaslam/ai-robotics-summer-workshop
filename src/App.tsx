import { motion } from "motion/react";
import { Bot, Sparkles, PhoneCall } from "lucide-react";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

export default function App() {
  const scrollToForm = () => {
    const el = document.getElementById("register-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white" id="main-landing-view">
      
      {/* Top Special Promotional Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 relative z-50">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
        <span>🤖 AI & Robotics Summer Workshop</span>
      </div>

      {/* Styled Sticky Navigation Header mimicking Kidrove */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            
            {/* Logo Brand Brand Section */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                <Bot className="h-5.5 w-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 leading-none">
                  KIDROVE
                </span>
                <span className="text-[9px] font-bold tracking-widest text-indigo-600 uppercase mt-0.5">
                  AI & Robotics Lab
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <button onClick={() => scrollToSection("details-section")} className="hover:text-indigo-600 transition-colors cursor-pointer">
                Highlights
              </button>
              <button onClick={() => scrollToSection("learning-outcomes")} className="hover:text-indigo-600 transition-colors cursor-pointer">
                What you learn
              </button>
              <button onClick={() => scrollToSection("faq-section")} className="hover:text-indigo-600 transition-colors cursor-pointer">
                FAQs
              </button>
            </nav>

            {/* Action Bar Indicators */}
            <div className="flex items-center gap-4">
              <a href="tel:+919876543210" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors">
                <PhoneCall className="h-3 w-3 text-indigo-600 animate-bounce" />
                <span>Call Admission Unit</span>
              </a>
              <button
                onClick={scrollToForm}
                className="rounded-full bg-slate-900 hover:bg-slate-800 px-5 py-2 text-xs font-bold text-white shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Enroll Now
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main landing container contents */}
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>

      {/* Structured elegant Footer */}
      <Footer />

    </div>
  );
}
