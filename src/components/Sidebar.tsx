import React from 'react';
import {
  Home,
  Brain,
  Users,
  FlaskConical,
  Briefcase,
  Mic,
  Calendar,
  Folder,
  HelpCircle,
  MessageSquare,
  Mail,
  PanelLeftClose,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeItem: string;
  onSelectItem: (id: string, label: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  activeItem,
  onSelectItem,
}) => {
  const primaryNavItems = [
    { id: 'start-here', label: 'Start Here', icon: Home },
    { id: 'learn', label: 'Learn', icon: Brain },
    { id: 'connect', label: 'Connect', icon: Users },
    { id: 'do-research', label: 'Do Research', icon: FlaskConical },
    { id: 'opportunities', label: 'Opportunities Hub', icon: Briefcase },
    { id: 'share', label: 'Share', icon: Mic },
  ];

  const secondaryNavItems = [
    { id: 'upcoming-events', label: 'Upcoming Events', icon: Calendar },
    { id: 'resources', label: 'Resources & Templates', icon: Folder },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'community-guidelines', label: 'Community Guidelines', icon: MessageSquare },
    { id: 'contact-us', label: 'Contact Us', icon: Mail },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-30 lg:hidden transition-opacity"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-[#FAFBFD] border-r border-slate-200/80 transition-all duration-300 ease-in-out flex flex-col justify-between shrink-0 overflow-y-auto select-none ${
          isOpen ? 'w-56 sm:w-60 translate-x-0' : 'w-0 -translate-x-full lg:w-0 lg:-translate-x-full'
        }`}
      >
        <div className="p-3 flex flex-col flex-1 min-w-[14rem] justify-between h-full">
          <div>
            {/* Top Collapse Toggle (RS4S Hub workspace button removed) */}
            <div className="flex items-center justify-end mb-1">
              <button
                type="button"
                onClick={onToggle}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                title="Collapse sidebar"
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>

            {/* Centered Logo Badge */}
            <div className="flex flex-col items-center justify-center py-1 px-1 mb-2">
              <img
                src="/logo.png"
                alt="RS4S Logo"
                className="w-28 sm:w-32 max-w-full h-auto object-contain drop-shadow-xs transition-transform hover:scale-[1.02]"
              />
            </div>

            {/* Primary Navigation Group */}
            <nav className="flex flex-col gap-0.5">
              {primaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectItem(item.id, item.label)}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#EBF3FE] text-[#2563EB] font-semibold shadow-2xs'
                        : 'text-slate-700 hover:bg-slate-200/50 hover:text-slate-900'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-[#2563EB]' : 'text-slate-500'
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Subtle separator */}
            <div className="my-2 border-t border-slate-200/60" />

            {/* Secondary Navigation Group */}
            <nav className="flex flex-col gap-0.5">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectItem(item.id, item.label)}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#EBF3FE] text-[#2563EB] font-semibold'
                        : 'text-slate-700 hover:bg-slate-200/50 hover:text-slate-900'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-[#2563EB]' : 'text-slate-500'
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Helen Keller Quote Card */}
          <div className="mt-3 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
            <p className="text-[11px] text-slate-700 italic leading-snug">
              "Alone we can do so little; together we can do so much."
            </p>
            <p className="text-[10px] text-slate-500 font-medium mt-1">
              — Helen Keller
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
