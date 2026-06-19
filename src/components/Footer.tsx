import { Bot, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800" id="footer-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: App Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="rounded-xl bg-indigo-500 p-2 text-white shadow-md shadow-indigo-500/20">
                <Bot className="h-6 w-6" />
              </div>
              <span className="font-extrabold text-lg tracking-tight select-none">
                AI & Robotics Summer Workshop
              </span>
            </div>
            <p className="text-sm max-w-md text-slate-400 leading-relaxed">
              Empowering children aged 8–14 to move from passive consumers of media to active, confident creators of future technology. An initiative inspired by premium educational benchmarks.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Course Modules</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-default">01. Neural Networks & Vision</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-default">02. Autonomous Robot Physics</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-default">03. Smart Game Controllers</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-default">04. Graduation Showcase</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Enquiries & Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href="mailto:enquiry@ai-robotics-workshop.com" className="hover:text-white transition-colors">
                  enquiry@ai-robotics-workshop.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-500" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-normal">
                  Delhi NCR Academic Hub, Sector-62, Noida, India
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Footnote Copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} AI & Robotics Summer Workshop. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
