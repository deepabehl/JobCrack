import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Link as LinkIcon 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';

export const EasyApplyModal = ({ job, onClose }) => {
  const { applyToJob } = useApp();

  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    college: 'National Institute of Technology',
    batch: '2026',
    cgpa: '8.7',
    portfolio: 'https://github.com/rahul-dev',
    coverNote: 'I have extensive hands-on experience building scalable web applications and strong algorithmic problem-solving skills.',
    resumeName: 'Rahul_Sharma_Software_Resume.pdf'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(true);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const success = applyToJob(job, formData);
      setIsSubmitting(false);

      if (success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        onClose();
      }
    }, 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resumeName: file.name }));
      setResumeUploaded(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              Easy Application
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Applying for {job.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              at {job.company} • {job.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Portfolio / GitHub / LinkedIn
              </label>
              <div className="relative">
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                />
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                College / University
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={e => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                CGPA / %
              </label>
              <input
                type="text"
                value={formData.cgpa}
                onChange={e => setFormData({ ...formData, cgpa: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 text-center"
              />
            </div>
          </div>

          {/* Resume Upload Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Upload Resume (PDF, DOCX) *
            </label>
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors bg-slate-50/50 dark:bg-slate-800/30">
              <input
                type="file"
                id="resume-file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label htmlFor="resume-file" className="cursor-pointer block">
                <UploadCloud className="w-8 h-8 text-indigo-500 mx-auto mb-1" />
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold underline">
                    Click to browse
                  </span>{' '}
                  or drag and drop resume
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  PDF up to 5MB
                </div>
              </label>

              {formData.resumeName && (
                <div className="mt-3 flex items-center justify-center gap-2 p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-medium">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>{formData.resumeName}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-1" />
                </div>
              )}
            </div>
          </div>

          {/* Cover Pitch */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Why are you a good fit for this role?
            </label>
            <textarea
              rows="3"
              value={formData.coverNote}
              onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              placeholder="Highlight relevant projects, technologies, and achievements..."
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
