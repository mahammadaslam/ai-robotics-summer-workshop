import { motion } from "motion/react";
import { Users, Calendar, Laptop, IndianRupee, Rocket } from "lucide-react";
import { IWorkshopDetail } from "../types";

export default function WorkshopDetails() {
  const details: IWorkshopDetail[] = [
    {
      id: "age-range",
      label: "Age Group",
      value: "8–14 Years",
      desc: "Perfect level of instruction tailored for young minds",
      iconName: "Users",
    },
    {
      id: "duration",
      label: "Duration",
      value: "4 Weeks",
      desc: "12 interactive sessions + 4 exciting weekend hackfests",
      iconName: "Calendar",
    },
    {
      id: "mode",
      label: "Format",
      value: "100% Online",
      desc: "Highly interactive Zoom class + dedicated LMS sandbox access",
      iconName: "Laptop",
    },
    {
      id: "fee",
      label: "Course Fee",
      value: "₹2,999",
      desc: "Affordable one-time fee with all digital kits included",
      iconName: "IndianRupee",
    },
    {
      id: "start-date",
      label: "Starts On",
      value: "15 July 2026",
      desc: "Pre-camp orientation starts on July 12",
      iconName: "Rocket",
    },
  ];

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="h-6 w-6 text-blue-600" />;
      case "Calendar":
        return <Calendar className="h-6 w-6 text-violet-600" />;
      case "Laptop":
        return <Laptop className="h-6 w-6 text-pink-600" />;
      case "IndianRupee":
        return <IndianRupee className="h-6 w-6 text-emerald-600" />;
      case "Rocket":
        return <Rocket className="h-6 w-6 text-amber-600" />;
      default:
        return <Users className="h-6 w-6" />;
    }
  };

  const getStyleClass = (name: string) => {
    switch (name) {
      case "Users":
        return "bg-blue-50 border-blue-100 hover:shadow-blue-100/70";
      case "Calendar":
        return "bg-violet-50 border-violet-100 hover:shadow-violet-100/70";
      case "Laptop":
        return "bg-pink-50 border-pink-100 hover:shadow-pink-100/70";
      case "IndianRupee":
        return "bg-emerald-50 border-emerald-100 hover:shadow-emerald-100/70";
      case "Rocket":
        return "bg-amber-50 border-amber-100 hover:shadow-amber-100/70";
      default:
        return "bg-slate-50 border-slate-100";
    }
  };

  return (
    <section className="bg-white py-16" id="details-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4.5xl">
            Workshop Highlights
          </h2>
          <p className="mt-4 text-base text-slate-600">
            A comprehensive, premium summer boot camp providing a world-class educational experience at your doorstep.
          </p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" id="details-grid">
          {details.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`flex flex-col justify-between rounded-2xl border p-6 bg-white shadow-sm transition-all duration-350 cursor-default ${getStyleClass(item.iconName)}`}
              id={`detail-card-${item.id}`}
            >
              <div className="space-y-4">
                {/* Clean Floating Icon container */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {item.value}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-xs font-medium text-slate-600 line-clamp-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
