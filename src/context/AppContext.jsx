import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('prepx_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  // Active navigation tab: 'jobs' | 'prephub' | 'companies' | 'dsasheet' | 'dashboard'
  const [activeTab, setActiveTab] = useState('jobs');
  const [activeSubTab, setActiveSubTab] = useState(''); // for deep linking within prephub

  // Search modal state
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // User saved/bookmarked jobs
  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem('prepx_saved_jobs');
    return saved ? JSON.parse(saved) : [1, 3];
  });

  // User applied jobs
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const saved = localStorage.getItem('prepx_applied_jobs');
    return saved ? JSON.parse(saved) : [
      {
        id: 2,
        jobTitle: 'Software Development Engineer - Frontend',
        company: 'Razorpay',
        appliedDate: '2026-03-24',
        status: 'Under Review',
        resumeName: 'Resume_SoftwareEngineer.pdf'
      }
    ];
  });

  // User custom posted jobs
  const [customJobs, setCustomJobs] = useState(() => {
    const saved = localStorage.getItem('prepx_custom_jobs');
    return saved ? JSON.parse(saved) : [];
  });

  // Solved DSA problems list of IDs
  const [solvedProblems, setSolvedProblems] = useState(() => {
    const saved = localStorage.getItem('prepx_solved_dsa');
    return saved ? JSON.parse(saved) : ['dsa-1', 'dsa-2', 'dsa-10'];
  });

  // Starred / Revised DSA problems list of IDs
  const [starredProblems, setStarredProblems] = useState(() => {
    const saved = localStorage.getItem('prepx_starred_dsa');
    return saved ? JSON.parse(saved) : ['dsa-3', 'dsa-15'];
  });

  // User personal notes for DSA problems: { [problemId]: string }
  const [problemNotes, setProblemNotes] = useState(() => {
    const saved = localStorage.getItem('prepx_dsa_notes');
    return saved ? JSON.parse(saved) : {
      'dsa-1': 'Remember to use Hash Map for O(N) single pass instead of nested loops.',
    };
  });

  // Quiz history & scores
  const [quizHistory, setQuizHistory] = useState(() => {
    const saved = localStorage.getItem('prepx_quiz_history');
    return saved ? JSON.parse(saved) : [];
  });

  // Toast notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('prepx_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Persist other states
  useEffect(() => {
    localStorage.setItem('prepx_saved_jobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem('prepx_applied_jobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  useEffect(() => {
    localStorage.setItem('prepx_custom_jobs', JSON.stringify(customJobs));
  }, [customJobs]);

  useEffect(() => {
    localStorage.setItem('prepx_solved_dsa', JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  useEffect(() => {
    localStorage.setItem('prepx_starred_dsa', JSON.stringify(starredProblems));
  }, [starredProblems]);

  useEffect(() => {
    localStorage.setItem('prepx_dsa_notes', JSON.stringify(problemNotes));
  }, [problemNotes]);

  useEffect(() => {
    localStorage.setItem('prepx_quiz_history', JSON.stringify(quizHistory));
  }, [quizHistory]);

  // Actions
  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const exists = prev.includes(jobId);
      if (exists) {
        showToast('Job removed from saved list', 'info');
        return prev.filter(id => id !== jobId);
      } else {
        showToast('Job saved to your bookmarks!', 'success');
        return [...prev, jobId];
      }
    });
  };

  const applyToJob = (job, applicationDetails) => {
    const isAlreadyApplied = appliedJobs.some(a => a.id === job.id);
    if (isAlreadyApplied) {
      showToast('You have already applied for this role!', 'info');
      return false;
    }
    const newApplication = {
      id: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Applied',
      resumeName: applicationDetails.resumeName || 'Resume_Updated.pdf',
      ...applicationDetails
    };
    setAppliedJobs(prev => [newApplication, ...prev]);
    showToast(`Application submitted successfully to ${job.company}!`, 'success');
    return true;
  };

  const addCustomJob = (newJob) => {
    const jobWithId = {
      ...newJob,
      id: Date.now(),
      isCustom: true,
      postedDate: 'Just now'
    };
    setCustomJobs(prev => [jobWithId, ...prev]);
    showToast('New job opportunity posted successfully!', 'success');
  };

  const toggleSolvedProblem = (problemId) => {
    setSolvedProblems(prev => {
      const exists = prev.includes(problemId);
      if (exists) {
        return prev.filter(id => id !== problemId);
      } else {
        showToast('Problem marked as Solved! Keep up the momentum!', 'success');
        return [...prev, problemId];
      }
    });
  };

  const toggleStarredProblem = (problemId) => {
    setStarredProblems(prev => {
      const exists = prev.includes(problemId);
      if (exists) {
        showToast('Removed from revision bookmarks', 'info');
        return prev.filter(id => id !== problemId);
      } else {
        showToast('Bookmarked for interview revision!', 'success');
        return [...prev, problemId];
      }
    });
  };

  const saveProblemNote = (problemId, note) => {
    setProblemNotes(prev => ({
      ...prev,
      [problemId]: note
    }));
    showToast('Notes saved for this problem', 'success');
  };

  const recordQuizResult = (result) => {
    setQuizHistory(prev => [result, ...prev]);
  };

  // Auth Modal state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('prepx_user');
    return saved ? JSON.parse(saved) : null;
  });

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const loginUser = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('prepx_user', JSON.stringify(userData));
    setAuthModalOpen(false);
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('prepx_user');
    showToast('Signed out successfully.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        activeTab,
        setActiveTab,
        activeSubTab,
        setActiveSubTab,
        searchModalOpen,
        setSearchModalOpen,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        setAuthMode,
        openAuthModal,
        closeAuthModal,
        currentUser,
        loginUser,
        logoutUser,
        savedJobs,
        toggleSaveJob,
        appliedJobs,
        applyToJob,
        customJobs,
        addCustomJob,
        solvedProblems,
        toggleSolvedProblem,
        starredProblems,
        toggleStarredProblem,
        problemNotes,
        saveProblemNote,
        quizHistory,
        recordQuizResult,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
