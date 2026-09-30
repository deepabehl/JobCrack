import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Copy, 
  Check, 
  Award, 
  MessageSquareQuote,
  Lightbulb
} from 'lucide-react';
import { hrData } from '../../data/hrData';
import { useApp } from '../../context/AppContext';

export const HRView = () => {
  const { showToast } = useApp();
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeQuestionId, setActiveQuestionId] = useState('hr-1');

  // Interactive STAR Builder State
  const [starBuilder, setStarBuilder] = useState({
    situation: '',
    task: '',
    action: '',
    result: ''
  });
  const [builderCopied, setBuilderCopied] = useState(false);

  const selectedQuestion = hrData.questions.find(q => q.id === activeQuestionId) || hrData.questions[0];

  const handleCopySampleAnswer = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    showToast('Sample answer copied to clipboard!', 'success');
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleCopyStarBuilder = () => {
    const formatted = `Situation: ${starBuilder.situation}\n\nTask: ${starBuilder.task}\n\nAction: ${starBuilder.action}\n\nResult: ${starBuilder.result}`;
    navigator.clipboard.writeText(formatted);
    setBuilderCopied(true);
    showToast('Your structured STAR response copied!', 'success');
    setTimeout(() => setBuilderCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Banner: The STAR Method Masterclass */}
      <div className="bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-violet-300 uppercase tracking-wider mb-2">
          <Award className="w-4 h-4" /> Behavioral Framework
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          {hrData.starFramework.title}
        </h2>
        <p className="text-xs sm:text-sm text-indigo-100/90 mt-2 max-w-2xl leading-relaxed">
          {hrData.starFramework.description}
        </p>

        {/* 4 Cards for S, T, A, R */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {hrData.starFramework.steps.map((st) => (
            <div
              key={st.letter}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-violet-500 font-black text-lg flex items-center justify-center text-white shadow-md">
                  {st.letter}
                </span>
                <span className="text-xs font-bold text-violet-200">
                  {st.title}
                </span>
              </div>
              <p className="text-xs text-indigo-100/80 leading-relaxed">
                {st.detail}
              </p>
              <div className="text-[11px] text-violet-200 italic pt-1 border-t border-white/10">
                {st.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive STAR Builder Tool */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Interactive Tool
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              Draft Your Own STAR Story
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Structure your project or college conflict experience into concise behavioral bullet points.
            </p>
          </div>

          <button
            onClick={handleCopyStarBuilder}
            disabled={!starBuilder.situation && !starBuilder.action}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 transition-all shadow-sm"
          >
            {builderCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Copy My STAR Script</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Situation (Set the scene)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. During our final year IoT project, our MQTT server dropped 20% of sensor packets..."
              value={starBuilder.situation}
              onChange={e => setStarBuilder({ ...starBuilder, situation: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Task (Your responsibility)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. As lead firmware engineer, I was responsible for guaranteeing zero packet loss without adding memory footprint..."
              value={starBuilder.task}
              onChange={e => setStarBuilder({ ...starBuilder, task: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Action (What YOU specifically did)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Implemented circular ring buffers, packet retry exponential backoff, and optimized payload compression..."
              value={starBuilder.action}
              onChange={e => setStarBuilder({ ...starBuilder, action: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Result (Measurable impact)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Packet delivery reached 99.98%, device battery life improved by 14%, and we won 1st prize..."
              value={starBuilder.result}
              onChange={e => setStarBuilder({ ...starBuilder, result: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Core HR Questions & Sample Answers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Questions Nav */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2">
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-1">
            Top HR Interview Questions
          </div>
          {hrData.questions.map((q) => (
            <div
              key={q.id}
              onClick={() => setActiveQuestionId(q.id)}
              className={`p-3 rounded-xl cursor-pointer transition-all text-left ${
                activeQuestionId === q.id
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800/80 shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-0.5">
                {q.category}
              </div>
              <div className="text-xs sm:text-sm line-clamp-2">
                {q.question}
              </div>
            </div>
          ))}
        </div>

        {/* Right Active Question Deep-Dive */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
              {selectedQuestion.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
              "{selectedQuestion.question}"
            </h3>
          </div>

          {/* What Interviewer is evaluating */}
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-1">
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" /> What the interviewer is evaluating
            </div>
            <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              {selectedQuestion.intent}
            </p>
          </div>

          {/* Ideal Structure */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Recommended Answering Flow
            </h4>
            <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
              {selectedQuestion.structure}
            </div>
          </div>

          {/* Sample Model Answer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquareQuote className="w-4 h-4 text-indigo-500" />
                Sample High-Scoring Response
              </h4>
              <button
                onClick={() => handleCopySampleAnswer(selectedQuestion.sampleAnswer, selectedQuestion.id)}
                className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {copiedIndex === selectedQuestion.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === selectedQuestion.id ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line italic">
              "{selectedQuestion.sampleAnswer}"
            </div>
          </div>

          {/* Dos and Don'ts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
              <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> What to DO
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {selectedQuestion.dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-2">
              <div className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" /> What NOT to do
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {selectedQuestion.donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Questions to ask the interviewer */}
      <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
          Smart Questions To Ask The Interviewer At The End
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {hrData.questionsToAsk.map((q, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
