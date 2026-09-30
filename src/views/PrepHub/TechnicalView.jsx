import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Wifi, 
  Layers, 
  Cpu, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  BookOpen, 
  HelpCircle,
  Code2,
  Sparkles
} from 'lucide-react';
import { technicalData } from '../../data/technicalData';

export const TechnicalView = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState('os');
  const [expandedQuestions, setExpandedQuestions] = useState({ 0: true });
  const [searchFilter, setSearchFilter] = useState('');

  const currentSubject = technicalData.find(s => s.id === selectedSubjectId) || technicalData[0];

  const toggleQuestion = (idx) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const filteredQuestions = currentSubject.interviewQuestions.filter(q =>
    q.q.toLowerCase().includes(searchFilter.toLowerCase()) ||
    q.a.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const subjectIcons = {
    os: Cpu,
    dbms: Database,
    cn: Wifi,
    oops: Layers,
    'system-design': Server
  };

  return (
    <div className="space-y-6">
      
      {/* Subject Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {technicalData.map(subj => {
          const Icon = subjectIcons[subj.id] || Cpu;
          const isActive = selectedSubjectId === subj.id;
          return (
            <button
              key={subj.id}
              onClick={() => {
                setSelectedSubjectId(subj.id);
                setExpandedQuestions({ 0: true });
                setSearchFilter('');
              }}
              className={`p-3 sm:p-4 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-700'
              }`}
            >
              <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
              <div className="font-bold text-xs sm:text-sm line-clamp-1">{subj.shortName}</div>
              <div className={`text-[11px] line-clamp-1 ${isActive ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {subj.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
        
        {/* Subject Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Computer Science Core
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              {currentSubject.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {currentSubject.description}
            </p>
          </div>

          {/* Question Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={`Search ${currentSubject.shortName} interview Q&A...`}
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Cheat Sheet Concept Cards */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            Essential Concept Cheat Sheet
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentSubject.cheatsheet.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Q&A Section */}
        <div className="pt-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            Frequently Asked Interview Questions & Verified Answers
          </div>

          <div className="space-y-3">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((qa, idx) => {
                const isExpanded = !!expandedQuestions[idx];
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleQuestion(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/70 dark:hover:bg-slate-800/80 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                          Q
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                          {qa.q}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        <div className="font-bold text-indigo-600 dark:text-indigo-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Interviewer Expected Answer
                        </div>
                        {qa.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-xs text-slate-500 dark:text-slate-400">
                No interview questions matched "{searchFilter}".
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
