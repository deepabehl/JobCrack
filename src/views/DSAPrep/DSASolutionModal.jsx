import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  ExternalLink, 
  CheckCircle2, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  HardDrive, 
  Save, 
  Bookmark, 
  BookmarkCheck,
  Building2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DSASolutionModal = ({ problem, onClose }) => {
  const { 
    solvedProblems, 
    toggleSolvedProblem, 
    starredProblems, 
    toggleStarredProblem,
    problemNotes,
    saveProblemNote,
    showToast
  } = useApp();

  const [activeLang, setActiveLang] = useState('cpp'); // 'cpp' | 'java' | 'python'
  const [copiedCode, setCopiedCode] = useState(false);
  const [noteText, setNoteText] = useState(problemNotes[problem?.id] || '');

  if (!problem) return null;

  const isSolved = solvedProblems.includes(problem.id);
  const isStarred = starredProblems.includes(problem.id);

  const currentCode = problem.solutions[activeLang] || '';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    showToast(`Code copied in ${activeLang.toUpperCase()}!`, 'success');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSaveNotes = () => {
    saveProblemNote(problem.id, noteText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
              problem.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' :
              problem.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' :
              'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
            }`}>
              {problem.difficulty}
            </span>
            <span className="text-xs text-slate-400">
              Acceptance: {problem.acceptance}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white pr-10">
            {problem.title}
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[11px] text-slate-400 font-semibold uppercase">Asked by:</span>
            {problem.companies.map(c => (
              <span key={c} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Problem Description
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-medium">
              {problem.description}
            </p>
            {problem.example && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 mt-2">
                {problem.example}
              </div>
            )}
          </div>

          {/* Intuition & Approach */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1.5">
            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Intuition & Optimal Approach
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {problem.intuition}
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Time: {problem.timeComplexity}
              </span>
              <span className="flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5" /> Space: {problem.spaceComplexity}
              </span>
            </div>
          </div>

          {/* Code Solution Tabs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {[
                  { id: 'cpp', label: 'C++' },
                  { id: 'java', label: 'Java' },
                  { id: 'python', label: 'Python 3' }
                ].map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setActiveLang(lang.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeLang === lang.id
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Box */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 p-4 font-mono text-xs leading-relaxed overflow-x-auto">
              <pre>{currentCode}</pre>
            </div>
          </div>

          {/* Personal Learning Notes Editor */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Personal Revision Notes / Edge Cases (Saved Locally)
              </span>
              <button
                onClick={handleSaveNotes}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                <Save className="w-3 h-3" /> Save Note
              </button>
            </div>
            <textarea
              rows="2"
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="e.g. Always check for empty array; can solve in O(1) space with two pointers..."
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Solved toggle */}
            <button
              onClick={() => toggleSolvedProblem(problem.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                isSolved
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isSolved ? 'Completed / Solved' : 'Mark as Solved'}</span>
            </button>

            {/* Bookmark star */}
            <button
              onClick={() => toggleStarredProblem(problem.id)}
              className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                isStarred
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 text-amber-500'
                  : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
              }`}
              title="Bookmark for interview revision"
            >
              {isStarred ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={problem.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
            >
              <span>Solve on LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
