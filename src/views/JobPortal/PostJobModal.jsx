import React, { useState } from 'react';
import { X, Plus, Building2, Briefcase, DollarSign, MapPin, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PostJobModal = ({ onClose }) => {
  const { addCustomJob } = useApp();

  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: 'Bengaluru, India',
    workplace: 'Hybrid',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '₹14 - ₹20 LPA',
    tagsString: 'React, Node.js, TypeScript, SQL',
    description: '',
    urgent: false,
    applicantsCount: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobData.title || !jobData.company || !jobData.description) return;

    const tags = jobData.tagsString
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    addCustomJob({
      ...jobData,
      tags,
      companyColor: 'bg-emerald-600',
      postedDate: 'Just now',
      applicantsCount: 1,
      responsibilities: [
        'Design and deploy production-grade software modules with high reliability.',
        'Collaborate with product and cross-functional engineering teams.',
        'Optimize code for low latency and high availability.'
      ],
      requirements: [
        'Solid computer science fundamentals and algorithmic problem-solving.',
        'Hands-on experience with listed technology stack.',
        'Strong verbal and written collaboration skills.'
      ],
      benefits: [
        'Competitive base compensation and equity',
        'Health insurance and wellness stipend',
        'Flexible working hours'
      ]
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              Recruiter / Employer
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Post a New Opportunity
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Software Engineer - Backend"
                value={jobData.title}
                onChange={e => setJobData({ ...jobData, title: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Uber / Stripe / Startup"
                value={jobData.company}
                onChange={e => setJobData({ ...jobData, company: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Workplace Mode
              </label>
              <select
                value={jobData.workplace}
                onChange={e => setJobData({ ...jobData, workplace: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Job Type
              </label>
              <select
                value={jobData.type}
                onChange={e => setJobData({ ...jobData, type: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              >
                <option value="Full-time">Full-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Experience
              </label>
              <select
                value={jobData.experience}
                onChange={e => setJobData({ ...jobData, experience: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              >
                <option value="Fresher">Fresher / 0 yrs</option>
                <option value="0-2 years">0-2 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Bengaluru / Remote India"
                value={jobData.location}
                onChange={e => setJobData({ ...jobData, location: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Salary / Compensation
              </label>
              <input
                type="text"
                placeholder="e.g. ₹18 - ₹24 LPA or ₹60,000/mo"
                value={jobData.salary}
                onChange={e => setJobData({ ...jobData, salary: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Required Skills (comma separated)
            </label>
            <input
              type="text"
              placeholder="e.g. React, TypeScript, Python, Docker"
              value={jobData.tagsString}
              onChange={e => setJobData({ ...jobData, tagsString: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Job Description *
            </label>
            <textarea
              required
              rows="3"
              placeholder="Describe the role, day-to-day challenges, and expected impact..."
              value={jobData.description}
              onChange={e => setJobData({ ...jobData, description: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="urgent-check"
              checked={jobData.urgent}
              onChange={e => setJobData({ ...jobData, urgent: e.target.checked })}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="urgent-check" className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Mark as "Urgent Hiring" badge
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Job Opportunity</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
