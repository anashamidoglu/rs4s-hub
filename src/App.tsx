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
    <div className="h-screen w-full bg-[#FFFFFF] flex flex-row relative text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
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
      <main className="flex-1 h-full overflow-y-auto flex flex-col justify-between">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex-1 flex flex-col justify-between">
          <div>
            {/* Top Hero Banner */}
            <HeroSection
              isSidebarOpen={isSidebarOpen}
              onToggleSidebar={() => setIsSidebarOpen(true)}
            />

            {/* Research Journey Milestone Flow */}
            <ResearchJourney onStepClick={handleJourneyStepClick} />

            {/* Resource & Tools Cards */}
            <ResourceGrid onCardAction={handleCardAction} />
          </div>

          {/* Bottom Highlights (3 Columns: Announcements, WhatsApp, Mission) */}
          <BottomHighlights onActionClick={handleBottomAction} />
        </div>

        {/* Minimal Footer */}
        <footer className="w-full border-t border-slate-100 py-2 text-center text-[11px] text-slate-500 shrink-0">
          <p>© {new Date().getFullYear()} RS4S Hub — Research by Students, for Students. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
