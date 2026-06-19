import { motion } from "motion/react";
import { Sparkles, Bot, Shield, Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("register-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-sky-50/20 py-16 sm:py-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] h-[300px] w-[300px] rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Title and CTA */}
          <div className="space-y-8 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 backdrop-blur-sm"
              id="hero-badge"
            >
              <Sparkles className="h-4 w-4 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span>India's Most Loved AI & Robotics Camp for Kids</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
                id="hero-heading"
              >
                Where Young Minds <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Build the Future
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-base text-slate-600 sm:text-lg md:text-xl"
                id="hero-description"
              >
                Spark your child’s genius this summer! Dive into a 4-week online interactive journey designed for ages <b>8–14</b>. Build cool virtual robots, program simple AI agents, and master logical thinking!
              </motion.p>
            </div>

            {/* Micro Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pb-2 sm:grid-cols-3"
              id="hero-highlights"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">100% Kid Safe</h4>
                  <p className="text-[10px] text-slate-500">Curated & Guided</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Live Mentoring</h4>
                  <p className="text-[10px] text-slate-500">Expert Instructors</p>
                </div>
              </div>

              <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Hands-on Lab</h4>
                  <p className="text-[10px] text-slate-500">Real Project Building</p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Row */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              id="hero-cta-group"
            >
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/35 active:scale-95"
                id="hero-cta-btn"
              >
                <span>Enroll Now — Only ₹2,999</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm font-bold text-red-500 animate-pulse">⚡ Only 7 Seats Left for July 15!</span>
                <span className="text-xs text-slate-500">Includes Digital Certificate of Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic interactive CSS/SVG robo-sandbox mockup */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
              id="hero-robobox-holder"
            >
              {/* Visual Frame */}
              <div className="relative rounded-3xl border border-sky-100 bg-white/70 p-6 shadow-2xl backdrop-blur-md">
                
                {/* Simulated IDE / Robot Workshop Screen */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
                  
                  {/* Code Bar Header */}
                  <div className="flex items-center justify-between bg-slate-950 px-4 py-2 text-[10px] font-mono text-slate-400 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-semibold">my_first_robot.py</span>
                    </div>
                    <span className="text-emerald-400">● Live Preview</span>
                  </div>

                  {/* Sandbox Canvas */}
                  <div className="relative flex h-64 items-center justify-center bg-slate-900 border-b border-slate-800">
                    
                    {/* Glowing Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

                    {/* Highly polished CSS Robot Avatar */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      {/* Ears/Antenna */}
                      <div className="relative flex gap-8 items-end">
                        <div className="h-3 w-1 bg-sky-400 rounded-full" />
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1] }} 
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="h-2 w-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400"
                        />
                        <div className="h-3 w-1 bg-sky-400 rounded-full" />
                      </div>

                      {/* Head */}
                      <div className="relative h-20 w-24 rounded-2xl border-2 border-sky-400 bg-slate-850 p-2 shadow-2xl shadow-sky-500/20 flex flex-col items-center justify-center">
                        {/* Robot eyes (high-tech blue display) */}
                        <div className="flex justify-around w-full px-2 mt-1">
                          <motion.div 
                            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="h-4 w-6 rounded-md bg-cyan-400 flex items-center justify-center"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-ping" />
                          </motion.div>
                          <motion.div 
                            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 0.1 }}
                            className="h-4 w-6 rounded-md bg-cyan-400 flex items-center justify-center"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-ping" />
                          </motion.div>
                        </div>
                        {/* Audio Wave Mouth */}
                        <div className="flex gap-1 items-center justify-center mt-3">
                          <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-cyan-400" />
                          <motion.span animate={{ height: [6, 16, 6] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-0.5 bg-cyan-400" />
                          <motion.span animate={{ height: [8, 10, 8] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-0.5 bg-cyan-400" />
                          <motion.span animate={{ height: [6, 16, 6] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.45 }} className="w-0.5 bg-cyan-400" />
                          <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.6 }} className="w-0.5 bg-cyan-400" />
                        </div>
                      </div>

                      {/* Neck link */}
                      <div className="h-3 w-4 bg-sky-500" />

                      {/* Body */}
                      <div className="relative h-24 w-28 rounded-3xl border-2 border-indigo-400 bg-slate-850 p-3 shadow-lg flex items-center justify-between">
                        {/* Center core light */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative h-10 w-10">
                            <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/40" />
                            <span className="absolute inset-1 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-extrabold text-blue-100">
                              AI
                            </span>
                          </div>
                        </div>
                        {/* Mini control elements */}
                        <div className="flex flex-col gap-1.5">
                          <span className="h-2 w-4 rounded bg-rose-500/80 animate-pulse" />
                          <span className="h-2 w-6 rounded bg-emerald-500/80" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="h-2 w-5 rounded bg-blue-500/80" />
                          <span className="h-2 w-4 rounded bg-amber-500/80 animate-bounce" />
                        </div>
                      </div>

                      {/* Track base */}
                      <div className="mt-1 h-3 w-32 rounded-full bg-slate-800 border-t border-slate-700 flex justify-center gap-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600 animate-spin" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600 animate-spin" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600 animate-spin" />
                      </div>
                    </motion.div>

                    {/* Floating Tech Widgets */}
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="absolute top-4 left-4 rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[10px] font-mono text-emerald-400 backdrop-blur-md"
                    >
                      <span>sensor.read() = 12cm</span>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                      className="absolute bottom-4 right-4 rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[10px] font-mono text-blue-400 backdrop-blur-md"
                    >
                      <span>servo.rotate(45deg)</span>
                    </motion.div>
                  </div>

                  {/* Terminal Logs Footer inside custom Frame */}
                  <div className="bg-slate-950 p-3 h-20 font-mono text-[10px] leading-relaxed text-slate-300">
                    <p className="text-emerald-500 animate-pulse">&gt;&gt;&gt; import robot_ai_brain as ai</p>
                    <p>&gt;&gt;&gt; ai.learn(skills=['vision', 'navigation'])</p>
                    <p className="text-amber-400 animate-pulse">[INFO] Summer Workshop Ready. Start coding!</p>
                  </div>
                </div>

                {/* Kidrove accent badge floating */}
                <div className="absolute top-[-10px] right-[-10px] rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-1 text-[10px] font-extrabold text-white shadow-md uppercase tracking-wider rotate-6">
                  Online Zoom Camp
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
