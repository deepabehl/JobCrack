import React, { useState } from 'react';
import { 
  Calculator, 
  BrainCircuit, 
  MessageSquare, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Award, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { aptitudeData } from '../../data/aptitudeData';

export const AptitudeView = () => {
  const [activeCategory, setActiveCategory] = useState('quantitative'); // 'quantitative' | 'logical' | 'verbal'
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);

  // Practice Quiz State
  const [quizState, setQuizState] = useState({}); // { [questionId]: { selectedOptionIndex, isAnswered } }
  const [score, setScore] = useState(0);

  const currentCategoryData = aptitudeData[activeCategory];
  const currentTopic = currentCategoryData.topics[selectedTopicIndex] || currentCategoryData.topics[0];

  const handleSelectOption = (question, optIdx) => {
    if (quizState[question.id]?.isAnswered) return;

    const isCorrect = optIdx === question.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }

    setQuizState(prev => ({
      ...prev,
      [question.id]: {
        selectedOptionIndex: optIdx,
        isAnswered: true,
        isCorrect
      }
    }));
  };

  const handleResetQuiz = () => {
    setQuizState({});
    setScore(0);
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tabs: Quant, Logical, Verbal */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { key: 'quantitative', label: 'Quantitative Aptitude', icon: Calculator, desc: 'Math, arithmetic shortcuts & formulas' },
          { key: 'logical', label: 'Logical Reasoning', icon: BrainCircuit, desc: 'Syllogisms, puzzles & blood relations' },
          { key: 'verbal', label: 'Verbal Ability & English', icon: MessageSquare, desc: 'Grammar rules & sentence correction' }
        ].map(cat => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.key;
          return (
            <div
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedTopicIndex(0);
                setQuizState({});
              }}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-700'
              }`}
            >
              <div className="flex items-center gap-2.5 font-bold text-sm">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                <span>{cat.label}</span>
              </div>
              <p className={`text-xs mt-1 leading-relaxed ${isActive ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {cat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Left Topic Navigation, Right Content & Practice */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Topics List */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-1">
            Topics in {currentCategoryData.title}
          </div>
          {currentCategoryData.topics.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => {
                setSelectedTopicIndex(idx);
                setQuizState({});
              }}
              className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between text-left ${
                selectedTopicIndex === idx
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800/80 shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div>
                <div className="text-sm">{t.name}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.practice.length} practice problems
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {t.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Right Topic Details & Practice Problems */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Topic Summary Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {currentCategoryData.title}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {currentTopic.name}
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                {currentTopic.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentTopic.summary}
            </p>

            {/* Notes Section */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Concept Notes & Formula Shortcuts
              </div>

              {currentTopic.notes.map((note, nIdx) => (
                <div 
                  key={nIdx} 
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2"
                >
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {note.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed font-mono sm:font-sans">
                    {note.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Practice Questions */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <HelpCircle className="w-4 h-4 text-indigo-500" />
                  Interactive Practice Questions
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Test your speed and concept retention with instant explanations
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  Score: {score} / {currentTopic.practice.length}
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  title="Reset practice set"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {currentTopic.practice.map((q, qIdx) => {
                const qState = quizState[q.id];

                return (
                  <div
                    key={q.id}
                    className="p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {qIdx + 1}
                      </span>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line">
                        {q.question}
                      </div>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200';
                        
                        if (qState?.isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold';
                          } else if (optIdx === qState.selectedOptionIndex) {
                            btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
                          } else {
                            btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q, optIdx)}
                            disabled={qState?.isAnswered}
                            className={`p-3 rounded-xl border text-xs sm:text-sm text-left flex items-center justify-between transition-all ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {qState?.isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
                            )}
                            {qState?.isAnswered && optIdx === qState.selectedOptionIndex && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {qState?.isAnswered && (
                      <div className="mt-3 p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 animate-in fade-in duration-200">
                        <div className="font-bold text-indigo-700 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Step-by-Step Solution:
                        </div>
                        <div className="whitespace-pre-line leading-relaxed font-mono sm:font-sans">
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
