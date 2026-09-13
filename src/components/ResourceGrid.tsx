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
  cardBg: string;
  cardBorder: string;
  iconBg: string;
  iconColor: string;
  btnBorder: string;
  btnText: string;
  btnHover: string;
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
      cardBg: 'bg-[#F4F8FD]',
      cardBorder: 'border-[#D9E7F9]',
      iconBg: 'bg-[#DBEAFE]',
      iconColor: 'text-[#1D4ED8]',
      btnBorder: 'border-[#BFDBFE]',
      btnText: 'text-[#1D4ED8]',
      btnHover: 'hover:bg-white hover:border-[#93C5FD]',
    },
    {
      id: 'connect',
      title: 'Connect',
      description: 'Find mentors, upper-year guidance and connect with researchers.',
      buttonText: 'Explore Connect',
      icon: Users,
      cardBg: 'bg-[#F7F2FD]',
      cardBorder: 'border-[#EAE0FC]',
      iconBg: 'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      btnBorder: 'border-[#DDD6FE]',
      btnText: 'text-[#7C3AED]',
      btnHover: 'hover:bg-white hover:border-[#C4B5FD]',
    },
    {
      id: 'do-research',
      title: 'Do Research',
      description: 'Find projects, form teams and get support for your research journey.',
      buttonText: 'Explore Do Research',
      icon: Microscope,
      cardBg: 'bg-[#FCEDEA]',
      cardBorder: 'border-[#FBD9D3]',
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#EA580C]',
      btnBorder: 'border-[#FED7AA]',
      btnText: 'text-[#EA580C]',
      btnHover: 'hover:bg-white hover:border-[#FDBA74]',
    },
    {
      id: 'opportunities',
      title: 'Opportunities Hub',
      description: 'Discover research opportunities, conferences, grants, competitions and more.',
      buttonText: 'Explore Opportunities',
      icon: Briefcase,
      cardBg: 'bg-[#FEF6EC]',
      cardBorder: 'border-[#FDEAC9]',
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#D97706]',
      btnBorder: 'border-[#FDE68A]',
      btnText: 'text-[#D97706]',
      btnHover: 'hover:bg-white hover:border-[#FCD34D]',
    },
  ];

  const rowTwoCards: ResourceCard[] = [
    {
      id: 'share',
      title: 'Share',
      description: 'Share your research, present your work and be part of the RS4S showcase.',
      buttonText: 'Explore Share',
      icon: Mic,
      cardBg: 'bg-[#FCEDF5]',
      cardBorder: 'border-[#FAD2E8]',
      iconBg: 'bg-[#FCE7F3]',
      iconColor: 'text-[#DB2777]',
      btnBorder: 'border-[#FBCFE8]',
      btnText: 'text-[#DB2777]',
      btnHover: 'hover:bg-white hover:border-[#F9A8D4]',
    },
    {
      id: 'upcoming-events',
      title: 'Upcoming Events',
      description: "See what's coming up and register for RS4S sessions and activities.",
      buttonText: 'View Calendar',
      icon: Calendar,
      cardBg: 'bg-[#EEF7FD]',
      cardBorder: 'border-[#C8EBFD]',
      iconBg: 'bg-[#CFFAFE]',
      iconColor: 'text-[#0284C7]',
      btnBorder: 'border-[#BAE6FD]',
      btnText: 'text-[#0284C7]',
      btnHover: 'hover:bg-white hover:border-[#7DD3FC]',
    },
    {
      id: 'resources',
      title: 'Resources & Templates',
      description: 'Access templates, useful links and research tools to help you succeed.',
      buttonText: 'View Resources',
      icon: Folder,
      cardBg: 'bg-[#F1F5FB]',
      cardBorder: 'border-[#DCE4F0]',
      iconBg: 'bg-[#E2E8F0]',
      iconColor: 'text-[#475569]',
      btnBorder: 'border-[#CBD5E1]',
      btnText: 'text-[#475569]',
      btnHover: 'hover:bg-white hover:border-[#94A3B8]',
    },
  ];

  const renderCard = (card: ResourceCard) => {
    const Icon = card.icon;
    return (
      <div
        key={card.id}
        className={`${card.cardBg} ${card.cardBorder} rounded-xl border p-2.5 sm:p-3 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-150 text-left group`}
      >
        <div>
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-2.5 mb-1.5">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${card.iconBg} flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${card.iconColor} stroke-[2]`} />
            </div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight leading-tight">
              {card.title}
            </h4>
          </div>

          {/* Card Description */}
          <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug min-h-[28px] line-clamp-2">
            {card.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-2.5 pt-0.5">
          <button
            type="button"
            onClick={() => onCardAction(card.id, card.title)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border bg-white/70 backdrop-blur-2xs text-[10px] sm:text-[11px] font-semibold ${card.btnText} ${card.btnBorder} ${card.btnHover} transition-all duration-150 cursor-pointer shadow-2xs`}
          >
            <span>{card.buttonText}</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="my-1.5 sm:my-2.5">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
        {rowOneCards.map(renderCard)}
      </div>

      {/* Row 2: 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
        {rowTwoCards.map(renderCard)}
      </div>
    </section>
  );
};
