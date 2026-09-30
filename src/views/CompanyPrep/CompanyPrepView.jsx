import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { companyHiringData } from '../../data/companyHiringData';
import { CompanyDetailModal } from './CompanyDetailModal';

export const CompanyPrepView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('All'); // 'All' | 'Product' | 'Services' | 'Fintech'
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filteredCompanies = useMemo(() => {
    return companyHiringData.filter(comp => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = comp.name.toLowerCase().includes(q);
        const matchCat = comp.category.toLowerCase().includes(q);
        if (!matchName && !matchCat) return false;
      }

      if (selectedTier !== 'All' && comp.tier !== selectedTier) return false;

      return true;
    });
  }, [searchQuery, selectedTier]);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-900 to-violet-950 text-white p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold mb-3 text-indigo-200 border border-white/10">
            <Building2 className="w-3.5 h-3.5" />
            Company-Specific Hiring Intel
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Crack the Hiring Process of Top Tech Giants & MNCs
          </h1>
          <p className="text-sm sm:text-base text-indigo-100/90 mt-3 max-w-2xl leading-relaxed">
            Detailed breakdown of exact Online Assessment platforms, test section timers, question counts, CGPA cutoffs, backlogs policy, full syllabus, and previous interview patterns.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search company (e.g. Google, Amazon, TCS, Infosys, Goldman Sachs)..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Tier Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'All', label: 'All Companies' },
            { id: 'Product', label: 'Product & FAANG' },
            { id: 'Fintech', label: 'Enterprise / Fintech' },
            { id: 'Services', label: 'IT Services & Mass' }
          ].map(tier => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTier === tier.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tier.label}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map(comp => (
          <div
            key={comp.id}
            className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={comp.logo}
                    alt={comp.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {comp.name}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {comp.category}
                    </div>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${comp.difficultyColor}`}>
                  {comp.difficulty}
                </span>
              </div>

              {/* CTC Badge */}
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  {comp.ctcRange}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {comp.examPattern.totalRounds}
                </span>
              </div>

              {/* Overview */}
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                {comp.overview}
              </p>

              {/* Key Specs Pill Highlights */}
              <div className="mt-4 space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-3">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span className="line-clamp-1">{comp.eligibility.cutoff}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>Platform: {comp.examPattern.platform}</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedCompany(comp)}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>View Full Exam Pattern & Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCompany && (
        <CompanyDetailModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}

    </div>
  );
};
