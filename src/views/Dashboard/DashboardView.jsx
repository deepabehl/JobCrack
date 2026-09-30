import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Code2, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  Award, 
  TrendingUp, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Target
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { initialJobs } from '../../data/jobsData';
import { dsaSheetData } from '../../data/dsaSheetData';

export const DashboardView = () => {
  const { 
    appliedJobs, 
    savedJobs, 
    customJobs,
    solvedProblems, 
    starredProblems,
    setActiveTab 
  } = useApp();

  const allJobs = [...customJobs, ...initialJobs];
  const savedJobsList = allJobs.filter(j => savedJobs.includes(j.id));

  const allDSAProblems = dsaSheetData.flatMap(t => t.problems);
  const totalDSA = allDSAProblems.length;
  const solvedCount = solvedProblems.length;
  const dsaProgressPct = totalDSA > 0 ? Math.min(100, Math.round((solvedCount / totalDSA) * 100)) : 0;

  // Compute Overall Placement Readiness Index (0-100)
  // 50% DSA solved + 30% Applied jobs (max 5) + 20% Base prep
  const readinessScore = Math.min(100, Math.round(
    (dsaProgressPct * 0.5) + (Math.min(5, appliedJobs.length) * 6) + 25
  ));

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-900/40">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Candidate Career Cockpit
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Your Placement Journey & Performance Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Track submitted job applications, review saved opportunities, monitor DSA milestone achievements, and gauge overall interview readiness.
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Readiness Index */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Readiness Score</div>
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
              {readinessScore} <span className="text-xs font-medium text-slate-400">/ 100</span>
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Interview Competitive
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600">
            <Target className="w-6 h-6" />
          </div>
        </div>

        {/* DSA Solved */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">DSA Solved</div>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {solvedCount} <span className="text-xs font-medium text-slate-400">/ {totalDSA}</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {starredProblems.length} starred for revision
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600">
            <Code2 className="w-6 h-6" />
          </div>
        </div>

        {/* Applied Jobs */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Applications</div>
            <div className="text-3xl font-black text-violet-600 dark:text-violet-400 mt-1">
              {appliedJobs.length}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Actively tracked
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 flex items-center justify-center text-violet-600">
            <Briefcase className="w-6 h-6" />
          </div>
        </div>

        {/* Saved Jobs */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bookmarked Roles</div>
            <div className="text-3xl font-black text-amber-500 mt-1">
              {savedJobs.length}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Ready to apply
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-500">
            <Bookmark className="w-6 h-6 fill-amber-500" />
          </div>
        </div>

      </div>

      {/* Main Grid: Left Applied Jobs Status, Right Saved Jobs & Quick Prep */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Applied Jobs Tracker */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-500" />
                Submitted Applications & Stage Tracker
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Real-time status of your active candidacies across companies
              </p>
            </div>
            <button
              onClick={() => setActiveTab('jobs')}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Browse More Jobs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {appliedJobs.length > 0 ? (
            <div className="space-y-4">
              {appliedJobs.map((app) => (
                <div
                  key={app.id}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {app.jobTitle}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{app.company}</span>
                      <span>•</span>
                      <span>Applied on {app.appliedDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                        <FileText className="w-3.5 h-3.5" />
                        {app.resumeName || 'Resume.pdf'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {app.status || 'Applied'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You haven't submitted any job applications yet.
              </p>
              <button
                onClick={() => setActiveTab('jobs')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                Explore Active Openings
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Bookmarked Jobs & Prep Recommendations */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Saved Jobs Box */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                Bookmarked Jobs ({savedJobsList.length})
              </h4>
              <button
                onClick={() => setActiveTab('jobs')}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View All
              </button>
            </div>

            {savedJobsList.length > 0 ? (
              <div className="space-y-3">
                {savedJobsList.slice(0, 3).map(j => (
                  <div
                    key={j.id}
                    onClick={() => setActiveTab('jobs')}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-indigo-300 cursor-pointer transition-all"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {j.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center justify-between">
                      <span>{j.company}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{j.salary}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400 text-center py-4">
                No saved jobs yet. Click bookmark on any job card.
              </div>
            )}
          </div>

          {/* Quick Action Shortcuts */}
          <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 dark:border-indigo-800/60 rounded-3xl p-6 space-y-3">
            <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Next Recommended Steps
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => setActiveTab('dsasheet')}
                className="w-full p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 hover:text-indigo-600 font-semibold flex items-center justify-between transition-colors"
              >
                <span>Solve Today's DSA Problem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab('prephub')}
                className="w-full p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 hover:text-indigo-600 font-semibold flex items-center justify-between transition-colors"
              >
                <span>Revise OS & DBMS Cheat Sheets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className="w-full p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 hover:text-indigo-600 font-semibold flex items-center justify-between transition-colors"
              >
                <span>Check TCS & Amazon Hiring Patterns</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
