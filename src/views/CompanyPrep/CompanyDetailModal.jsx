import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Calendar, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Lightbulb, 
  Clock, 
  FileText,
  DollarSign,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';

export const CompanyDetailModal = ({ company, onClose }) => {
  const [activeTab, setActiveTab] = useState('pattern'); // 'pattern' | 'eligibility' | 'syllabus' | 'tips'

  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-md"
            />
            <div className="pr-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {company.category}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${company.difficultyColor}`}>
                  {company.difficulty}
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {company.name} Hiring Process
              </h2>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  CTC: {company.ctcRange}
                </span>
                <span>•</span>
                <span>Platform: {company.examPattern.platform}</span>
              </div>
            </div>
          </div>

          {/* Sub-Tabs */}
          <div className="flex gap-2 sm:gap-4 mt-6 border-b border-slate-200 dark:border-slate-800 pb-0 overflow-x-auto">
            {[
              { id: 'pattern', label: 'Exam Pattern & Rounds', icon: Clock },
              { id: 'eligibility', label: 'Eligibility Criteria', icon: GraduationCap },
              { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
              { id: 'tips', label: 'Preparation Tips', icon: Lightbulb }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all shrink-0 ${
                    isActive
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: Exam Pattern */}
          {activeTab === 'pattern' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Selection Stages & Assessment Structure ({company.examPattern.totalRounds})
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Platform: <span className="font-semibold text-slate-700 dark:text-slate-300">{company.examPattern.platform}</span>
                </span>
              </div>

              <div className="space-y-3">
                {company.examPattern.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                        <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span>{sec.name}</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                        {sec.duration}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300 pl-8">
                      {sec.questions}
                    </div>

                    <div className="text-[11px] text-slate-400 pl-8 flex items-center gap-2">
                      <span>Negative Marking: <strong className="text-slate-700 dark:text-slate-300">{sec.negativeMarking}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Eligibility */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Academic & Graduation Eligibility Guidelines
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Eligible Degrees & Branches
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {company.eligibility.degrees}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Minimum CGPA / Percentage Cutoff
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {company.eligibility.cutoff}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Backlog / Arrears Policy
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {company.eligibility.backlogs}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    Education Gap Criteria
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {company.eligibility.gapYears}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Syllabus */}
          {activeTab === 'syllabus' && (
            <div className="space-y-5">
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Detailed Test & Interview Syllabus Breakdown
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    Algorithmic & Coding Focus
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.syllabus.coding.map((item, idx) => (
                      <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    CS Fundamentals & Core Technical
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.syllabus.csFundamentals.map((item, idx) => (
                      <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    Behavioral & Culture Alignment
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.syllabus.behavioral.map((item, idx) => (
                      <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Tips */}
          {activeTab === 'tips' && (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Expert Tips & Proven Interview Strategies for {company.name}
              </div>

              <div className="space-y-3">
                {company.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 flex items-start gap-3"
                  >
                    <Lightbulb className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
