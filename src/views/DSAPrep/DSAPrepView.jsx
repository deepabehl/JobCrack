import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Filter, 
  Sparkles,
  Layers,
  BookOpen
} from 'lucide-react';
import { dsaSheetData } from '../../data/dsaSheetData';
import { useApp } from '../../context/AppContext';
import { DSAProgressBar } from './DSAProgressBar';
import { DSASolutionModal } from './DSASolutionModal';

export const DSAPrepView = () => {
  const { 
    solvedProblems, 
    toggleSolvedProblem, 
    starredProblems, 
    toggleStarredProblem 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'unsolved' | 'starred'
  const [selectedDifficulty, setSelectedDifficulty] = useState('All'); // 'All' | 'Easy' | 'Medium' | 'Hard'
  const [expandedTopics, setExpandedTopics] = useState(() => {
    // Open first 2 topics by default
    const init = {};
    dsaSheetData.slice(0, 2).forEach(t => { init[t.topicId] = true; });
    return init;
  });

  const [selectedProblemForModal, setSelectedProblemForModal] = useState(null);

  const toggleTopicExpand = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const expandAll = () => {
    const all = {};
    dsaSheetData.forEach(t => { all[t.topicId] = true; });
    setExpandedTopics(all);
  };

  const collapseAll = () => {
    setExpandedTopics({});
  };

  // Filtered topics and problems
  const filteredTopics = useMemo(() => {
    return dsaSheetData.map(topic => {
      const filteredProblems = topic.problems.filter(prob => {
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = prob.title.toLowerCase().includes(q);
          const matchComp = prob.companies.some(c => c.toLowerCase().includes(q));
          if (!matchTitle && !matchComp) return false;
        }

        // Mode
        if (filterMode === 'unsolved' && solvedProblems.includes(prob.id)) return false;
        if (filterMode === 'starred' && !starredProblems.includes(prob.id)) return false;

        // Difficulty
        if (selectedDifficulty !== 'All' && prob.difficulty !== selectedDifficulty) return false;

        return true;
      });

      return {
        ...topic,
        problems: filteredProblems
      };
    }).filter(t => t.problems.length > 0);
  }, [searchQuery, filterMode, selectedDifficulty, solvedProblems, starredProblems]);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-indigo-950 text-white p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold mb-3 text-emerald-300 border border-white/10">
            <Code2 className="w-3.5 h-3.5" />
            Curated SDE Coding Sheet
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Topic-Wise Data Structures & Algorithms Sheet
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-3 max-w-2xl leading-relaxed">
            Curated high-frequency interview problems organized sequentially from Arrays to Graphs & Dynamic Programming. Includes intuition breakdowns, multi-language solutions, and personal note-taking.
          </p>
        </div>
      </div>

      {/* Progress Bar Widget */}
      <DSAProgressBar />

      {/* Controls Bar: Search + Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search problem title or company (e.g. Two Sum, Google, Binary Search)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>

          {/* Mode */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {[
              { id: 'all', label: 'All Problems' },
              { id: 'unsolved', label: 'Unsolved Only' },
              { id: 'starred', label: 'Revision Starred' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setFilterMode(m.id)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  filterMode === m.id
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {['All', 'Easy', 'Medium', 'Hard'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedDifficulty === d
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Topic Accordions */}
      <div className="space-y-4">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => {
            const isExpanded = !!expandedTopics[topic.topicId];
            const topicSolved = topic.problems.filter(p => solvedProblems.includes(p.id)).length;
            const topicTotal = topic.problems.length;
            const topicPct = topicTotal > 0 ? Math.round((topicSolved / topicTotal) * 100) : 0;

            return (
              <div
                key={topic.topicId}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                {/* Topic Header Toggle */}
                <button
                  onClick={() => toggleTopicExpand(topic.topicId)}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {topic.topicName}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {topic.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {topicSolved} / {topicTotal} Solved
                      </div>
                      <div className="w-24 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mt-1">
                        <div
                          className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                          style={{ width: `${topicPct}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Problems List */}
                {isExpanded && (
                  <div className="border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/80">
                    {topic.problems.map((prob) => {
                      const isSolved = solvedProblems.includes(prob.id);
                      const isStarred = starredProblems.includes(prob.id);

                      return (
                        <div
                          key={prob.id}
                          className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {/* Checkbox */}
                            <input
                              type="checkbox"
                              checked={isSolved}
                              onChange={() => toggleSolvedProblem(prob.id)}
                              className="w-5 h-5 rounded-lg text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-700 cursor-pointer"
                            />

                            {/* Star / Bookmark */}
                            <button
                              onClick={() => toggleStarredProblem(prob.id)}
                              className="text-slate-400 hover:text-amber-500 transition-colors"
                              title={isStarred ? 'Bookmarked for revision' : 'Star for revision'}
                            >
                              <Bookmark className={`w-4 h-4 ${isStarred ? 'text-amber-500 fill-amber-500' : ''}`} />
                            </button>

                            <div>
                              <div className="flex items-center gap-2">
                                <span 
                                  onClick={() => setSelectedProblemForModal(prob)}
                                  className={`text-sm font-semibold cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                                    isSolved ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'
                                  }`}
                                >
                                  {prob.title}
                                </span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                  prob.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' :
                                  prob.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' :
                                  'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                                }`}>
                                  {prob.difficulty}
                                </span>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                                <span>Acceptance: {prob.acceptance}</span>
                                <span>•</span>
                                <span className="line-clamp-1">
                                  Asked by: {prob.companies.join(', ')}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                              onClick={() => setSelectedProblemForModal(prob)}
                              className="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-xs font-bold transition-all shadow-xs"
                            >
                              View Solution & Code
                            </button>

                            <a
                              href={prob.link}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                              title="Solve on LeetCode"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
            <Code2 className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No DSA problems matched your filters
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Try clearing your search query or switching from "{filterMode}".
            </p>
          </div>
        )}
      </div>

      {/* Solution & Code Modal */}
      {selectedProblemForModal && (
        <DSASolutionModal
          problem={selectedProblemForModal}
          onClose={() => setSelectedProblemForModal(null)}
        />
      )}

    </div>
  );
};
