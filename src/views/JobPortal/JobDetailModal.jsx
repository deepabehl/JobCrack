import React from 'react';
import { 
  X, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  Award,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const JobDetailModal = ({ job, onClose, onEasyApply }) => {
  const { savedJobs, toggleSaveJob, appliedJobs, setActiveTab } = useApp();

  if (!job) return null;

  const isSaved = savedJobs.includes(job.id);
  const isApplied = appliedJobs.some(a => a.id === job.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            {job.logo ? (
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-16 h-16 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-md"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
                {job.company.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="pr-10">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {job.company}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {job.type}
                </span>
                {job.urgent && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 font-semibold">
                    Urgent
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {job.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {job.location} ({job.workplace})
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                  {job.salary}
                </span>
                <span className="text-slate-400">
                  Posted {job.postedDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Experience</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{job.experience}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Job Mode</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{job.workplace}</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Applicants</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{job.applicantsCount} candidates</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Verified Role</div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Direct HR
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Role Overview
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          {job.responsibilities && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Key Responsibilities
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements & Skills */}
          {job.requirements && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Requirements & Qualifications
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Required Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {job.benefits && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Perks & Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prep Shortcut Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Prepare for this interview
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Practice the exact coding questions, technical core topics, and HR behavioral framework for {job.company}.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                setActiveTab('companies');
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 whitespace-nowrap shadow-sm"
            >
              View Prep Guide
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-3">
          <button
            onClick={() => toggleSaveJob(job.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
              isSaved
                ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            <span>{isSaved ? 'Saved' : 'Save Job'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            {isApplied ? (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-sm font-bold">
                <CheckCircle2 className="w-4 h-4" /> Already Applied
              </span>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onEasyApply(job);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Send className="w-4 h-4" /> Easy Apply Now
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
