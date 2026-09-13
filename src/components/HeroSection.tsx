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
    <div className="relative pt-1 pb-1">
      {/* Top Bar with Sidebar toggle when collapsed */}
      {!isSidebarOpen && (
        <div className="mb-2">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors shadow-2xs cursor-pointer"
          >
            <PanelLeftOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Open Sidebar</span>
          </button>
        </div>
      )}

      {/* Main Hero Container */}
      <div className="flex flex-row items-center justify-between gap-4">
        {/* Left Side: Typography */}
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-black tracking-tight text-[#0B358E] leading-tight">
            RS4S Hub
          </h1>
          <h2 className="text-sm sm:text-base lg:text-[1.05rem] font-bold text-[#2563EB] mt-1 tracking-tight">
            Research by Students, for Students.
          </h2>
          <p className="text-xs sm:text-[13px] font-medium text-slate-600 mt-1 tracking-normal">
            Learn. Practice. Connect. Do Research. Share. Give Back.
          </p>
        </div>

        {/* Right Side: Hero Graphic */}
        <div className="shrink-0 flex justify-end">
          <div className="relative max-w-[190px] sm:max-w-[230px] lg:max-w-[260px]">
            <img
              src="/hero.png"
              alt="RS4S Hub Research illustration"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
