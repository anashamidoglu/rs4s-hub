import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { ResearchJourney } from './components/ResearchJourney';
import { ResourceGrid } from './components/ResourceGrid';
import { BottomHighlights } from './components/BottomHighlights';
import { ToastContainer, type ToastMessage } from './components/Toast';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('start-here');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleNavSelect = (id: string, label: string) => {
    setActiveNav(id);
    addToast(`${label} selected`, `Navigated to ${label}. Full content modules will link directly here.`);
  };

  const handleJourneyStepClick = (stepLabel: string, actionText: string) => {
    addToast(
      `"${actionText}" link clicked`,
      `The pathway for "${stepLabel}" is in preparation. This hyperlink will connect directly once resources go live.`
    );
  };

  const handleCardAction = (_cardId: string, title: string) => {
    addToast(
      `Exploring ${title}`,
      `The ${title} module is currently being finalized for students.`
    );
  };

  const handleBottomAction = (title: string, details?: string) => {
    addToast(title, details || 'This section will link to live community channels soon.');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-row relative text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Left Collapsible Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((prev) => !prev)}
        activeItem={activeNav}
        onSelectItem={handleNavSelect}
      />

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 min-w-0 flex flex-col justify-between ${
          isSidebarOpen ? 'lg:pl-0' : 'pl-0'
        }`}
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
          {/* Top Hero Banner */}
          <HeroSection
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={() => setIsSidebarOpen(true)}
          />

          {/* Research Journey Milestone Flow */}
          <ResearchJourney onStepClick={handleJourneyStepClick} />

          {/* Resource & Tools Cards */}
          <ResourceGrid onCardAction={handleCardAction} />

          {/* Bottom Highlights (3 Columns: Announcements, WhatsApp, Mission) */}
          <BottomHighlights onActionClick={handleBottomAction} />
        </div>

        {/* Minimal Footer */}
        <footer className="w-full border-t border-slate-200/60 py-5 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} RS4S Hub — Research by Students, for Students. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
