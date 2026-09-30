import { Sparkles, Heart, ExternalLink, Code2, Briefcase, BookOpen, Building2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Crack<span className="text-indigo-600 dark:text-indigo-400">Job</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Your unified career acceleration platform. Discover verified job opportunities, prepare for high-frequency aptitude & technical rounds, master company-specific exam patterns, and track topic-wise DSA sheets.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              2026 Batch Placement Ready
            </div>
          </div>

          {/* Quick Links: Preparation Hub */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Preparation Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => setActiveTab('prephub')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Quantitative Aptitude & Tricks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('prephub')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Logical Reasoning & Syllogisms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('prephub')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Technical Core (OS, DBMS, CN, OOPs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('prephub')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  HR Rounds & STAR Method Answers
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Company Hiring Process */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Company Hiring Guides
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => setActiveTab('companies')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Google SDE Hiring & Googleyness
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('companies')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Amazon 16 Leadership Principles & OA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('companies')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  TCS NQT Ninja, Digital & Prime Cadres
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('companies')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Infosys Specialist Programmer (SP)
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated DSA Sheet */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Curated DSA Sheet
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
              Step-by-step roadmap covering 12 foundational topics with multi-language code solutions (C++, Java, Python) and live progress tracking.
            </p>
            <button
              onClick={() => setActiveTab('dsasheet')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all"
            >
              <Code2 className="w-3.5 h-3.5" />
              Open DSA Tracker
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} CrackJob Career Platform. Built for engineers & job seekers.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for placement success
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
