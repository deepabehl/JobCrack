import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Briefcase, 
  PlusCircle, 
  MapPin, 
  Sparkles, 
  Bookmark, 
  SlidersHorizontal, 
  RotateCcw,
  CheckCircle2,
  Building2,
  TrendingUp
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { initialJobs } from '../../data/jobsData';
import { JobCard } from './JobCard';
import { JobDetailModal } from './JobDetailModal';
import { EasyApplyModal } from './EasyApplyModal';
import { PostJobModal } from './PostJobModal';

export const JobPortalView = () => {
  const { customJobs, savedJobs, appliedJobs } = useApp();

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');
  const [selectedWorkplace, setSelectedWorkplace] = useState('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Modals state
  const [selectedJobForDetails, setSelectedJobForDetails] = useState(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [postJobOpen, setPostJobOpen] = useState(false);

  // Combined jobs
  const allJobs = useMemo(() => {
    return [...customJobs, ...initialJobs];
  }, [customJobs]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      // Search matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(q);
        const matchComp = job.company.toLowerCase().includes(q);
        const matchLoc = job.location.toLowerCase().includes(q);
        const matchTags = job.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchComp && !matchLoc && !matchTags) return false;
      }

      // Type matching
      if (selectedType !== 'All' && job.type !== selectedType) return false;

      // Workplace matching
      if (selectedWorkplace !== 'All' && job.workplace !== selectedWorkplace) return false;

      // Experience matching
      if (selectedExp !== 'All') {
        if (selectedExp === 'Fresher' && !job.experience.toLowerCase().includes('fresher') && !job.experience.includes('0-1') && !job.experience.includes('0-2')) {
          return false;
        }
        if (selectedExp === '1-3 years' && !job.experience.includes('1-3') && !job.experience.includes('2-4')) {
          return false;
        }
      }

      // Saved only
      if (showSavedOnly && !savedJobs.includes(job.id)) return false;

      return true;
    });
  }, [allJobs, searchQuery, selectedType, selectedExp, selectedWorkplace, showSavedOnly, savedJobs]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedExp('All');
    setSelectedWorkplace('All');
    setShowSavedOnly(false);
  };

  const hasActiveFilters = searchQuery || selectedType !== 'All' || selectedExp !== 'All' || selectedWorkplace !== 'All' || showSavedOnly;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-900 text-white p-6 sm:p-10 shadow-2xl">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -top-10 w-60 h-60 rounded-full bg-violet-400/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-4 text-indigo-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            Verified Tech Openings & Freshers 2026 Batch
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Discover Your Next High-Impact Engineering Role
          </h1>
          <p className="text-sm sm:text-base text-indigo-100/90 mt-3 max-w-2xl leading-relaxed">
            Curated software engineering, backend, frontend, cloud, and data roles from top product leaders and high-paying tech enterprises. Apply with one click.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl font-black text-white">{allJobs.length}+</div>
              <div className="text-xs text-indigo-200">Active Roles</div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400">₹18 - ₹55 LPA</div>
              <div className="text-xs text-indigo-200">CTC Range</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">{appliedJobs.length}</div>
              <div className="text-xs text-indigo-200">Submitted Applications</div>
            </div>
            <div>
              <div className="text-2xl font-black text-amber-300">{savedJobs.length}</div>
              <div className="text-xs text-indigo-200">Bookmarked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Search + Filters + Post a Job */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by job title, tech stack (React, Java, Go), or company..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Post Job Action */}
          <button
            onClick={() => setPostJobOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-bold shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
            Post an Opening
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filters:
          </span>

          {/* Job Type */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {['All', 'Full-time', 'Internship'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedType === type
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Workplace Mode */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {['All', 'Remote', 'Hybrid', 'On-site'].map(mode => (
              <button
                key={mode}
                onClick={() => setSelectedWorkplace(mode)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedWorkplace === mode
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Experience */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {['All', 'Fresher', '1-3 years'].map(exp => (
              <button
                key={exp}
                onClick={() => setSelectedExp(exp)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedExp === exp
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {exp}
              </button>
            ))}
          </div>

          {/* Saved Jobs Toggle */}
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold border transition-all ${
              showSavedOnly
                ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-amber-500 text-amber-500' : ''}`} />
            Saved ({savedJobs.length})
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-slate-500 hover:text-rose-600 text-xs font-semibold px-2 py-1 rounded-lg transition-colors ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          )}
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
          Showing <span className="text-indigo-600 dark:text-indigo-400">{filteredJobs.length}</span> Active Roles
        </h3>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Updated in real-time
        </span>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetails={setSelectedJobForDetails}
              onEasyApply={setSelectedJobForApply}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-4">
          <Briefcase className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            No matching job listings found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query, clearing filters, or switching experience levels.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Modals */}
      {selectedJobForDetails && (
        <JobDetailModal
          job={selectedJobForDetails}
          onClose={() => setSelectedJobForDetails(null)}
          onEasyApply={(job) => {
            setSelectedJobForDetails(null);
            setSelectedJobForApply(job);
          }}
        />
      )}

      {selectedJobForApply && (
        <EasyApplyModal
          job={selectedJobForApply}
          onClose={() => setSelectedJobForApply(null)}
        />
      )}

      {postJobOpen && (
        <PostJobModal
          onClose={() => setPostJobOpen(false)}
        />
      )}

    </div>
  );
};
