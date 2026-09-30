import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-500 shrink-0" />
  };

  const bgStyles = {
    success: 'border-emerald-500/20 bg-emerald-50/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200',
    error: 'border-rose-500/20 bg-rose-50/90 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200',
    info: 'border-indigo-500/20 bg-indigo-50/90 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-200'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-md shadow-2xl rounded-xl border backdrop-blur-md px-4 py-3 flex items-center gap-3">
      {icons[toast.type] || icons.info}
      <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-slate-100">
        {toast.message}
      </span>
    </div>
  );
};
