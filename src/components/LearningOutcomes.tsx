import { motion } from "motion/react";
import { BrainCircuit, Cpu, Hammer, Lightbulb, GraduationCap } from "lucide-react";
import { ILearningOutcome } from "../types";

export default function LearningOutcomes() {
  const outcomes: ILearningOutcome[] = [
    {
      id: "ai-fundamentals",
      title: "Understand AI Fundamentals",
      desc: "Demystify artificial intelligence! Kids learn neural networks, computer vision, and machine learning models through interactive, block-visual trainers.",
      iconName: "BrainCircuit",
      colorTheme: {
        bg: "from-blue-500/5 to-cyan-500/5",
        border: "border-blue-100",
        text: "text-blue-600",
        iconBg: "bg-blue-100"
      }
    },
    {
      id: "robotics-basics",
      title: "Learn Robotics Basics",
      desc: "Understand sensors, actuators, and logical instruction units. Write commands to let autonomous virtual crawlers sense and escape intricate mazes.",
      iconName: "Cpu",
      colorTheme: {
        bg: "from-violet-500/5 to-fuchsia-500/5",
        border: "border-violet-100",
        text: "text-violet-600",
        iconBg: "bg-violet-100"
      }
    },
    {
      id: "mini-projects",
      title: "Build Mini Projects",
      desc: "Put logic to work by building a speech-detecting companion, custom game controllers, or automated traffic systems inside simulation software.",
      iconName: "Hammer",
      colorTheme: {
        bg: "from-amber-500/5 to-orange-500/5",
        border: "border-amber-100",
        text: "text-amber-600",
        iconBg: "bg-amber-100"
      }
    },
    {
      id: "logical-thinking",
      title: "Develop Logical Thinking",
      desc: "Deconstruct complex challenges into simple, procedural, executable steps. Cultivate structural thinking and debugging confidence.",
      iconName: "Lightbulb",
      colorTheme: {
        bg: "from-emerald-500/5 to-teal-500/5",
        border: "border-emerald-100",
        text: "text-emerald-600",
        iconBg: "bg-emerald-100"
      }
    },
    {
      id: "future-skills",
      title: "Master Future-Ready Tech",
      desc: "Equip your child with high-demand digital literacy. Learn cyber safety, AI prompting etiquettes, and general hardware configuration logic.",
      iconName: "GraduationCap",
      colorTheme: {
        bg: "from-pink-500/5 to-rose-500/5",
        border: "border-pink-100",
        text: "text-pink-600",
        iconBg: "bg-pink-100"
      }
    }
  ];

  const getOutcomeIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="h-6 w-6 text-blue-600" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-violet-600" />;
      case "Hammer":
        return <Hammer className="h-6 w-6 text-amber-600" />;
      case "Lightbulb":
        return <Lightbulb className="h-6 w-6 text-emerald-600" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-pink-600" />;
      default:
        return <BrainCircuit className="h-6 w-6" />;
    }
  };

  return (
    <section className="bg-slate-50/50 py-16 sm:py-24 border-y border-slate-100" id="learning-outcomes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            What They Will Unlock
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4.5xl">
            Key Learning Outcomes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Ditch the boring lectures! Our interactive modules empower children to think critically, program logically, and create tangible digital software solutions.
          </p>
        </div>

        {/* Core Outcome Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="outcomes-grid">
          
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl border ${outcome.colorTheme.border} bg-white bg-gradient-to-br ${outcome.colorTheme.bg} p-8 shadow-md transition-all duration-300 flex flex-col justify-between`}
              id={`outcome-card-${outcome.id}`}
            >
              {/* Giant Step Number Badge and Icon header */}
              <div className="flex items-start justify-between">
                <div className={`p-3.5 rounded-xl ${outcome.colorTheme.iconBg} shadow-sm border border-white/55`}>
                  {getOutcomeIcon(outcome.iconName)}
                </div>
                <span className="text-5xl font-extrabold text-slate-100 select-none">
                  0{idx + 1}
                </span>
              </div>

              {/* Textual Description */}
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {outcome.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {outcome.desc}
                </p>
              </div>

              {/* Micro Checkpoints */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  Active Learning
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  No Prior Coding Required
                </span>
              </div>

            </motion.div>
          ))}

          {/* Special Custom CTA / Final Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: outcomes.length * 0.1 }}
            className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/20 p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group"
            id="outcome-card-special-showcase"
          >
            <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-sky-100/40 blur-xl group-hover:scale-125 transition-transform duration-500" />
            
            <div className="space-y-4 my-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-md">
                <GraduationCap className="h-7 w-7 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Earn Global Certification
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Complete all course projects and challenge assignments to receive a unique digital verification credential to add to academic profiles.
              </p>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("register-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-slate-800"
              id="outcome-card-cert-btn"
            >
              Learn More & Claim Seats
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
