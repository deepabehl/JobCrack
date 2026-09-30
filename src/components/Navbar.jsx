import React, { useState } from 'react';
import { 
  Briefcase, 
  Code2, 
  BookOpen, 
  Building2, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  User,
  LogOut
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { 
    activeTab, 
    setActiveTab, 
    darkMode, 
    setDarkMode,
    openAuthModal,
    currentUser,
    logoutUser
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly 4 items requested by user
  const navItems = [
    { 
      id: 'jobs', 
      label: 'Job Portal', 
      icon: Briefcase 
    },
    { 
      id: 'dsasheet', 
      label: 'DSA Sheet', 
      icon: Code2 
    },
    { 
      id: 'prephub', 
      label: 'Preparation', 
      icon: BookOpen 
    },
    { 
      id: 'companies', 
      label: 'Company', 
      icon: Building2 
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/90 dark:border-slate-800/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleTabClick('jobs')} 
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">
                Crack<span className="text-indigo-600 dark:text-indigo-400">Job</span>
              </span>
            </div>
          </div>

          {/* Center: The 4 Primary Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Upper Corner: Theme Toggle, Login & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors"
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {currentUser ? (
              /* User logged in state */
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{currentUser.name}</span>
                </div>
                <button
                  onClick={logoutUser}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Login & Signup in upper right corner */
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => openAuthModal('login')}
                  className="px-3.5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="px-4 sm:px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign up
                </button>
              </div>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer (Only the 4 items + Login / Signup) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {!currentUser && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('signup');
                }}
                className="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-center text-xs font-bold shadow-md shadow-indigo-600/30"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
