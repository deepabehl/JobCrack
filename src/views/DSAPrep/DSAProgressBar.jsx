import React from 'react';
import { Award, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { dsaSheetData } from '../../data/dsaSheetData';

export const DSAProgressBar = () => {
  const { solvedProblems } = useApp();

  const allProblems = dsaSheetData.flatMap(t => t.problems);
  const totalCount = allProblems.length;
  const solvedCount = allProblems.filter(p => solvedProblems.includes(p.id)).length;
  const percentage = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Breakdown by difficulty
  const easyTotal = allProblems.filter(p => p.difficulty === 'Easy').length;
  const easySolved = allProblems.filter(p => p.difficulty === 'Easy' && solvedProblems.includes(p.id)).length;

  const medTotal = allProblems.filter(p => p.difficulty === 'Medium').length;
  const medSolved = allProblems.filter(p => p.difficulty === 'Medium' && solvedProblems.includes(p.id)).length;

  const hardTotal = allProblems.filter(p => p.difficulty === 'Hard').length;
  const hardSolved = allProblems.filter(p => p.difficulty === 'Hard' && solvedProblems.includes(p.id)).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            Live Preparation Momentum
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
            DSA Sheet Completion Tracker
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
              {percentage}%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {solvedCount} of {totalCount} Solved
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Breakdown Pills */}
      <div className="grid grid-cols-3 gap-3 pt-2 text-center">
        <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
          <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            Easy
          </div>
          <div className="text-sm font-black text-emerald-900 dark:text-emerald-100 mt-0.5">
            {easySolved} / {easyTotal}
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-emerald-400">
            {easyTotal > 0 ? Math.round((easySolved / easyTotal) * 100) : 0}% Done
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50">
          <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
            Medium
          </div>
          <div className="text-sm font-black text-amber-900 dark:text-amber-100 mt-0.5">
            {medSolved} / {medTotal}
          </div>
          <div className="text-[10px] text-amber-700 dark:text-amber-400">
            {medTotal > 0 ? Math.round((medSolved / medTotal) * 100) : 0}% Done
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50">
          <div className="text-xs font-bold text-rose-800 dark:text-rose-300">
            Hard
          </div>
          <div className="text-sm font-black text-rose-900 dark:text-rose-100 mt-0.5">
            {hardSolved} / {hardTotal}
          </div>
          <div className="text-[10px] text-rose-700 dark:text-rose-400">
            {hardTotal > 0 ? Math.round((hardSolved / hardTotal) * 100) : 0}% Done
          </div>
        </div>
      </div>

    </div>
  );
};
