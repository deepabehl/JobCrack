import React, { useState } from 'react';
import { 
  Calculator, 
  Cpu, 
  Users, 
  Code2, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { AptitudeView } from './AptitudeView';
import { TechnicalView } from './TechnicalView';
import { HRView } from './HRView';
import { useApp } from '../../context/AppContext';

export const PrepHubView = () => {
  const { setActiveTab } = useApp();
  const [subSection, setSubSection] = useState('aptitude'); // 'aptitude' | 'technical' | 'hr'

  const prepTabs = [
    {
      id: 'aptitude',
      label: 'Aptitude & Reasoning',
      badge: 'Quant, Logic, Verbal',
      icon: Calculator
    },
    {
      id: 'technical',
      label: 'Technical Core (CS)',
      badge: 'OS, DBMS, CN, OOPs',
      icon: Cpu
    },
    {
      id: 'hr',
      label: 'HR & Behavioral',
      badge: 'STAR Method & Answers',
      icon: Users
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-indigo-900/50">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold mb-3">
            <Brain className="w-3.5 h-3.5 text-indigo-400" />
            Comprehensive Placement Preparation Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Master Every Stage of Your Campus & Off-Campus Hiring
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
            From round-1 quantitative screening to deep technical architecture rounds and final behavioral executive HR syncs — everything you need in one place.
          </p>

          {/* Quick jump to DSA sheet */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('dsasheet')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md"
            >
              <Code2 className="w-4 h-4" />
              Go To Dedicated DSA Sheet
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs text-slate-400">
              Or prepare Aptitude, Tech Core & HR below ↓
            </span>
          </div>
        </div>
      </div>

      {/* Sub-section Switcher Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-6 overflow-x-auto pb-1">
        {prepTabs.map(tab => {
          const Icon = tab.icon;
          const isActive = subSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubSection(tab.id)}
              className={`flex items-center gap-2.5 pb-3 px-2 text-sm font-bold border-b-2 transition-all shrink-0 ${
                isActive
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                isActive
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Render Active Sub-View */}
      {subSection === 'aptitude' && <AptitudeView />}
      {subSection === 'technical' && <TechnicalView />}
      {subSection === 'hr' && <HRView />}

    </div>
  );
};
