import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { IFAQ } from "../types";

export default function FAQ() {
  const faqs: IFAQ[] = [
    {
      id: "faq-experience",
      question: "Is any prior coding or robotics experience required?",
      answer: "Absolutely not! This workshop is designed specifically for beginners. We start with fundamental drag-and-drop drag logic before progressing to simple text-based blocks. Our instructors guide every student individually, ensuring no one gets left behind.",
    },
    {
      id: "faq-materials",
      question: "How will my child learn robotics if the workshop is online?",
      answer: "We utilize award-winning virtual robotics simulator platforms (such as VEXcode VR and custom visual physics simulations). Students write control scripts that compile and run live on their screens, controlling virtual physical robot mechanisms. This bypasses fragile hardware parts and yields immediate feedback, allowing maximum coding iteration!",
    },
    {
      id: "faq-hardware",
      question: "What items, devices, or hardware do we need at home?",
      answer: "All you need is a laptop or computer (Windows, Mac, or Chromebook) with a stable internet connection and a webcam. All coding sandboxes and simulators operate directly inside the Google Chrome browser—no heavy custom software installations required!",
    },
    {
      id: "faq-missed-class",
      question: "What happens if my child misses a live Zoom session?",
      answer: "Don't fret! Every live mentoring session is recorded and uploaded to our student portal within 2 hours. Along with the video, students receive step-by-step written guides and home labs. They can also request a quick 1-on-1 text or video check-in with our support mentors to get back on track.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 sm:py-24" id="faq-section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-indigo-600 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Everything you need to know about the AI & Robotics interactive summer camp.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4" id="faq-accordions">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-100 bg-blue-50/10 shadow-md shadow-blue-50/40"
                    : "border-slate-100 hover:border-slate-200 bg-white"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold transition-colors duration-200 ${isOpen ? "text-blue-700" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`p-1.5 rounded-lg border ${isOpen ? "border-blue-200 bg-blue-50 text-blue-600" : "border-slate-100 bg-slate-50 text-slate-500"}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </span>
                </button>

                {/* Animated Expandable Text Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm border-t border-dashed border-slate-100/80 leading-relaxed text-slate-650">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Helpful Contact Banner */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>Still got questions? Drop us an email at </span>
          <a href="mailto:support@kidrove-workshop.example.com" className="font-semibold text-blue-600 hover:underline">
            enquiry@ai-robotics-workshop.com
          </a>
          <span> or query our team in the registration form below.</span>
        </div>

      </div>
    </section>
  );
}
