import React, { useState, useEffect } from 'react';
import { Search, X, Briefcase, BookOpen, Building2, Code2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { initialJobs } from '../data/jobsData';
import { companyHiringData } from '../data/companyHiringData';
import { dsaSheetData } from '../data/dsaSheetData';
import { technicalData } from '../data/technicalData';

export const SearchModal = () => {
  const { searchModalOpen, setSearchModalOpen, setActiveTab, customJobs } = useApp();
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
      if (e.key === 'Escape' && searchModalOpen) {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, setSearchModalOpen]);

  if (!searchModalOpen) return null;

  const allJobs = [...customJobs, ...initialJobs];
  const trimmed = query.trim().toLowerCase();

  // Search Results
  const matchingJobs = trimmed ? allJobs.filter(j => 
    j.title.toLowerCase().includes(trimmed) || 
    j.company.toLowerCase().includes(trimmed) ||
    j.tags.some(t => t.toLowerCase().includes(trimmed))
  ).slice(0, 4) : [];

  const matchingCompanies = trimmed ? companyHiringData.filter(c =>
    c.name.toLowerCase().includes(trimmed) ||
    c.category.toLowerCase().includes(trimmed)
  ).slice(0, 3) : [];

  // Flat DSA problems
  const allDSAProblems = dsaSheetData.flatMap(t => t.problems.map(p => ({ ...p, topicName: t.topicName })));
  const matchingDSA = trimmed ? allDSAProblems.filter(p =>
    p.title.toLowerCase().includes(trimmed) ||
    p.topicName.toLowerCase().includes(trimmed) ||
    p.companies.some(c => c.toLowerCase().includes(trimmed))
  ).slice(0, 4) : [];

  const matchingTech = trimmed ? technicalData.filter(t =>
    t.name.toLowerCase().includes(trimmed) ||
    t.description.toLowerCase().includes(trimmed)
  ).slice(0, 3) : [];

  const handleSelectJob = () => {
    setActiveTab('jobs');
    setSearchModalOpen(false);
  };

  const handleSelectCompany = () => {
    setActiveTab('companies');
    setSearchModalOpen(false);
  };

  const handleSelectDSA = () => {
    setActiveTab('dsasheet');
    setSearchModalOpen(false);
  };

  const handleSelectTech = () => {
    setActiveTab('prephub');
    setSearchModalOpen(false);
  };

  const hasAnyResults = matchingJobs.length > 0 || matchingCompanies.length > 0 || matchingDSA.length > 0 || matchingTech.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-indigo-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs, DSA topics, companies, or tech interview notes..."
            className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-base focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded border border-slate-300 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!query ? (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Quick search suggestions:
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-3">
                {['Frontend Engineer', 'Google', 'Two Sum', 'Operating Systems', 'TCS Prime', 'Dynamic Programming'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasAnyResults ? (
            <div className="text-center py-10 text-slate-500 dark:text-slate-400">
              No matching results found for "<span className="text-indigo-500 font-semibold">{query}</span>".
            </div>
          ) : (
            <>
              {/* Jobs */}
              {matchingJobs.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                    Matching Jobs ({matchingJobs.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchingJobs.map(job => (
                      <div
                        key={job.id}
                        onClick={handleSelectJob}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {job.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                            <span>{job.company}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">{job.salary}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Companies */}
              {matchingCompanies.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5 text-violet-500" />
                    Company Hiring Guides ({matchingCompanies.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchingCompanies.map(comp => (
                      <div
                        key={comp.id}
                        onClick={handleSelectCompany}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                            {comp.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {comp.category} • {comp.ctcRange}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DSA Sheet */}
              {matchingDSA.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                    DSA Sheet Problems ({matchingDSA.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchingDSA.map(prob => (
                      <div
                        key={prob.id}
                        onClick={handleSelectDSA}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-2">
                            <span>{prob.title}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              prob.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400' :
                              prob.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400' :
                              'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
                            }`}>
                              {prob.difficulty}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {prob.topicName} • Asked by {prob.companies.slice(0, 3).join(', ')}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Subjects */}
              {matchingTech.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                    Technical Prep ({matchingTech.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchingTech.map(tech => (
                      <div
                        key={tech.id}
                        onClick={handleSelectTech}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                            {tech.name} Notes & Interview Questions
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {tech.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
