import React from 'react';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  CheckCircle2, 
  Users,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const JobCard = ({ job, onViewDetails, onEasyApply }) => {
  const { savedJobs, toggleSaveJob, appliedJobs } = useApp();

  const isSaved = savedJobs.includes(job.id);
  const isApplied = appliedJobs.some(a => a.id === job.id);

  return (
    <div className="group relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 flex flex-col justify-between">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {job.logo ? (
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
                {job.company.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                {job.company}
                {job.urgent && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                    Urgent Hiring
                  </span>
                )}
              </h4>
              <h3 
                onClick={() => onViewDetails(job)}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer line-clamp-1 mt-0.5"
              >
                {job.title}
              </h3>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleSaveJob(job.id)}
            className={`p-2 rounded-xl border transition-all ${
              isSaved
                ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700 text-amber-500'
                : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
            title={isSaved ? 'Saved to bookmarks' : 'Save job'}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Badges / Meta row */}
        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            {job.workplace} • {job.type}
          </span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-1 rounded-lg">
            {job.salary}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 4 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md text-slate-400">
              +{job.tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Posted date & Apply CTAs */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-2">
          <span>{job.postedDate}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {job.applicantsCount} applicants
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewDetails(job)}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Details
          </button>
          
          {isApplied ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Applied
            </span>
          ) : (
            <button
              onClick={() => onEasyApply(job)}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-600/30 transition-all flex items-center gap-1"
            >
              Easy Apply
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
