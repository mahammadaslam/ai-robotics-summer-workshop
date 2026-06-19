import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import axios, { AxiosError } from "axios";
import { CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, CalendarRange } from "lucide-react";
import { IEnquiryInput, IEnquiryResponse } from "../types";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<IEnquiryResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEnquiryInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: IEnquiryInput) => {
    setLoading(true);
    setSubmitError(null);
    try {
      // Direct post to backend API endpoint
      const response = await axios.post<IEnquiryResponse>("/api/enquiry", data);
      
      if (response.data.success) {
        setSuccessData(response.data);
        reset(); // Clear form inputs on success
      } else {
        setSubmitError(response.data.error || "An error occurred during submission.");
      }
    } catch (err) {
      const error = err as AxiosError<{ message?: string; error?: string }>;
      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "The server is having trouble processing registrations. Please verify connection and retry.";
      setSubmitError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-sky-50/20 via-white to-blue-50/30 py-16 sm:py-24" id="register-section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Dual Frame Card Layout */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Visual Hype Block */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[200px] w-[200px] rounded-full bg-blue-400/25 blur-2xl" />

            {/* Quick Summary Block */}
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-semibold text-sky-200">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Limited Summer Seats</span>
              </span>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold tracking-tight">AI & Robotics <br />Summer Workshop</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Join hundreds of budding programmers inventing the smart solutions of tomorrow. Give your kid the summer of a lifetime.
                </p>
              </div>
            </div>

            {/* Price Check Block */}
            <div className="relative z-10 mt-12 space-y-6 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between text-sm text-blue-150">
                <span>Registration Pass</span>
                <span>Includes access to Zoom classes + Virtual simulator labs</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-indigo-200 font-bold">Total Tuition Fee</span>
                  <span className="text-4xl font-extrabold block mt-1 tracking-tight">₹2,999</span>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-rose-300 font-bold uppercase tracking-wider">Discount Code Applied</span>
                  <span className="text-xs text-slate-100 italic">50% off summer discount</span>
                </div>
              </div>
            </div>

            {/* Date marker block */}
            <div className="relative z-10 mt-8 flex items-center gap-2.5 text-xs text-blue-150">
              <CalendarRange className="h-5 w-5 text-sky-300" />
              <span>Orientation: **12 July 2026** • Live classes start: **15 July 2026**</span>
            </div>

          </div>

          {/* Right Column: Dynamic submission panel */}
          <div className="lg:col-span-7 col-span-1 p-8 sm:p-12 relative">
            
            <AnimatePresence mode="wait">
              {!successData ? (
                
                // Form layout panel
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900" id="form-title">
                      Start Your Enquiry & Registration
                    </h3>
                    <p className="text-sm text-slate-500 mt-1.5">
                      Submit the form. Our summer camp course coordinator will call/email you in 2 hours to confirm your Zoom batch.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 flex gap-3 text-sm text-rose-700"
                      id="form-error-banner"
                    >
                      <AlertCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold">Submission Failed</h4>
                        <p className="mt-0.5 text-xs text-rose-650">{submitError}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* HTML Interactive form element */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="enquiry-html-form">
                    
                    {/* Name input */}
                    <div className="space-y-1.5" id="form-group-name">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Student / Guardian Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <User className="h-4.5 w-4.5" />
                        </span>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          {...register("name", {
                            required: "Name is strictly required",
                            minLength: {
                              value: 3,
                              message: "Name must be at least 3 characters",
                            },
                          })}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                            errors.name
                              ? "border-rose-300 bg-rose-50/10 focus:border-rose-400 focus:ring-rose-50"
                              : "border-slate-200 bg-slate-50/50 focus:border-indigo-500 focus:ring-indigo-100/60"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs font-semibold text-rose-600 flex items-center gap-1" id="name-error">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5" id="form-group-email">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <Mail className="h-4.5 w-4.5" />
                        </span>
                        <input
                          id="email"
                          type="email"
                          placeholder="youraddress@gmail.com"
                          {...register("email", {
                            required: "Email address is strictly required",
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                              message: "Please enter a valid email address.",
                            },
                          })}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                            errors.email
                              ? "border-rose-300 bg-rose-50/10 focus:border-rose-400 focus:ring-rose-50"
                              : "border-slate-200 bg-slate-50/50 focus:border-indigo-500 focus:ring-indigo-100/60"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs font-semibold text-rose-600 flex items-center gap-1" id="email-error">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5" id="form-group-phone">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Contact Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 font-bold text-xs text-slate-400 bg-slate-100/80 px-3 border-r border-slate-200 rounded-l-xl select-none">
                          +91
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="9876543210"
                          {...register("phone", {
                            required: "Phone number is strictly required",
                            pattern: {
                              value: /^[6-9]\d{9}$/,
                              message: "Please enter a valid 10-digit Indian cellphone number (starting with 6-9)",
                            },
                          })}
                          className={`w-full pl-16 pr-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:ring-4 ${
                            errors.phone
                              ? "border-rose-300 bg-rose-50/10 focus:border-rose-400 focus:ring-rose-50"
                              : "border-slate-200 bg-slate-50/50 focus:border-indigo-500 focus:ring-indigo-100/60"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs font-semibold text-rose-600 flex items-center gap-1" id="phone-error">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full relative flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-sm font-bold text-white py-3.5 shadow-lg shadow-indigo-500/10 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:scale-[1.01]"
                      id="form-submit-btn"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Filing Enquiry Securely...</span>
                        </>
                      ) : (
                        <span>Proceed to Complete Registration</span>
                      )}
                    </button>

                  </form>

                  {/* Secure micro label */}
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Your data is protected. SSL secured sandbox.</span>
                  </div>

                </motion.div>
              ) : (
                
                // Form SUCCESS panel
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  id="form-success-card"
                >
                  {/* Success Anim Container */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-xl shadow-emerald-500/10 text-emerald-600"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-amber-400 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      Enquiry Submitted!
                    </h3>
                    <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full inline-block">
                      {successData.message}
                    </p>
                  </div>

                  <div className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed space-y-4">
                    <p>
                      Hooray! We loaded your application successfully on the workshop roster. Your registration summary lies below:
                    </p>

                    {/* Summary visual container */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left font-mono text-xs space-y-2 text-slate-700">
                      <div><span className="text-slate-400">ID:</span> <span className="font-bold">{successData.data?.id || "N/A"}</span></div>
                      <div><span className="text-slate-400">Student:</span> <span className="text-slate-900 font-bold">{successData.data?.name}</span></div>
                      <div><span className="text-slate-400">Email:</span> <span className="text-slate-900 font-bold">{successData.data?.email}</span></div>
                      <div><span className="text-slate-400">Contact:</span> <span className="text-slate-900 font-bold">+91 {successData.data?.phone}</span></div>
                      <div><span className="text-slate-400">Registered At:</span> <span>{successData.data?.createdAt ? new Date(successData.data.createdAt).toLocaleDateString() : "Today"}</span></div>
                    </div>

                    <p className="text-xs text-slate-500">
                      Our admission director will call you on the registered mobile in less than <b>2 hours</b> to confirm your batch timings (Morning/Evening) and send the Zoom keys.
                    </p>
                  </div>

                  <button
                    onClick={() => setSuccessData(null)}
                    className="rounded-xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 text-xs font-bold text-indigo-700 px-6 py-2.5 transition-all cursor-pointer"
                    id="success-reset-btn"
                  >
                    File Another Query
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
