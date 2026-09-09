import React from 'react';
import {
  Brain,
  Users,
  Microscope,
  Briefcase,
  Mic,
  Calendar,
  Folder,
  ArrowRight,
} from 'lucide-react';

interface ResourceCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  btnHoverBorder: string;
}

interface ResourceGridProps {
  onCardAction: (cardId: string, title: string) => void;
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ onCardAction }) => {
  const rowOneCards: ResourceCard[] = [
    {
      id: 'learn',
      title: 'Learn',
      description: 'Build your research knowledge with videos, guides and learning pathways.',
      buttonText: 'Explore Learn',
      icon: Brain,
      iconBg: 'bg-[#DBEAFE]',
      iconColor: 'text-[#2563EB]',
      btnHoverBorder: 'hover:border-blue-300 hover:bg-blue-50/50',
    },
    {
      id: 'connect',
      title: 'Connect',
      description: 'Find mentors, upper-year guidance and connect with researchers.',
      buttonText: 'Explore Connect',
      icon: Users,
      iconBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      btnHoverBorder: 'hover:border-purple-300 hover:bg-purple-50/50',
    },
    {
      id: 'do-research',
      title: 'Do Research',
      description: 'Find projects, form teams and get support for your research journey.',
      buttonText: 'Explore Do Research',
      icon: Microscope,
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      btnHoverBorder: 'hover:border-orange-300 hover:bg-orange-50/50',
    },
    {
      id: 'opportunities',
      title: 'Opportunities Hub',
      description: 'Discover research opportunities, conferences, grants, competitions and more.',
      buttonText: 'Explore Opportunities',
      icon: Briefcase,
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
      btnHoverBorder: 'hover:border-amber-300 hover:bg-amber-50/50',
    },
  ];

  const rowTwoCards: ResourceCard[] = [
    {
      id: 'share',
      title: 'Share',
      description: 'Share your research, present your work and be part of the RS4S showcase.',
      buttonText: 'Explore Share',
      icon: Mic,
      iconBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
      btnHoverBorder: 'hover:border-pink-300 hover:bg-pink-50/50',
    },
    {
      id: 'upcoming-events',
      title: 'Upcoming Events',
      description: "See what's coming up and register for RS4S sessions and activities.",
      buttonText: 'View Calendar',
      icon: Calendar,
      iconBg: 'bg-[#CFFAFE]',
      iconColor: 'text-[#0284C7]',
      btnHoverBorder: 'hover:border-cyan-300 hover:bg-cyan-50/50',
    },
    {
      id: 'resources',
      title: 'Resources & Templates',
      description: 'Access templates, useful links and research tools to help you succeed.',
      buttonText: 'View Resources',
      icon: Folder,
      iconBg: 'bg-[#E2E8F0]',
      iconColor: 'text-[#475569]',
      btnHoverBorder: 'hover:border-slate-300 hover:bg-slate-100/50',
    },
  ];

  const renderCard = (card: ResourceCard) => {
    const Icon = card.icon;
    return (
      <div
        key={card.id}
        className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-left group"
      >
        <div>
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-3.5 mb-3">
            <div
              className={`w-11 h-11 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105`}
            >
              <Icon className={`w-6 h-6 ${card.iconColor} stroke-[1.9]`} />
            </div>
            <h4 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight">
              {card.title}
            </h4>
          </div>

          {/* Card Description */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed min-h-[38px]">
            {card.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-1">
          <button
            type="button"
            onClick={() => onCardAction(card.id, card.title)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-slate-950 transition-all duration-150 cursor-pointer ${card.btnHoverBorder}`}
          >
            <span>{card.buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-4 mb-10">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {rowOneCards.map(renderCard)}
      </div>

      {/* Row 2: 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rowTwoCards.map(renderCard)}
      </div>
    </section>
  );
};
