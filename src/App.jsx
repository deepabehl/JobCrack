import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { JobPortalView } from './views/JobPortal/JobPortalView';
import { PrepHubView } from './views/PrepHub/PrepHubView';
import { CompanyPrepView } from './views/CompanyPrep/CompanyPrepView';
import { DSAPrepView } from './views/DSAPrep/DSAPrepView';
import { DashboardView } from './views/Dashboard/DashboardView';

const MainLayout = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'jobs' && <JobPortalView />}
        {activeTab === 'prephub' && <PrepHubView />}
        {activeTab === 'companies' && <CompanyPrepView />}
        {activeTab === 'dsasheet' && <DSAPrepView />}
        {activeTab === 'dashboard' && <DashboardView />}
      </main>

      {/* Global Interactive Modals & Toast */}
      <SearchModal />
      <AuthModal />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
