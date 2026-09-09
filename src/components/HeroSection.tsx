import React from 'react';
import { PanelLeftOpen } from 'lucide-react';

interface HeroSectionProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isSidebarOpen,
  onToggleSidebar,
}) => {
  return (
    <div className="relative pt-6 pb-4">
      {/* Top Bar with Sidebar toggle when collapsed */}
      {!isSidebarOpen && (
        <div className="mb-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors shadow-2xs"
          >
            <PanelLeftOpen className="w-4 h-4 text-blue-600" />
            <span>Open Sidebar</span>
          </button>
        </div>
      )}

      {/* Main Hero Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 min-h-[160px]">
        {/* Left Side: Typography */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-none">
            RS4S Hub
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2563EB] mt-3 tracking-tight">
            Research by Students, for Students.
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-700 mt-2 tracking-normal">
            Learn. Practice. Connect. Do Research. Share. Give Back.
          </p>
        </div>

        {/* Right Side: Hero Graphic */}
        <div className="w-full sm:w-auto shrink-0 flex justify-center md:justify-end">
          <div className="relative max-w-[340px] sm:max-w-[380px]">
            <img
              src="/hero.png"
              alt="RS4S Hub Research illustration"
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
