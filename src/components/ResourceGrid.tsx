import React from 'react';
import {
  Brain,
  Users,
  Microscope,
  Briefcase,
  Mic,
  Folder,
  ArrowRight,
} from 'lucide-react';

interface ResourceCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon?: React.ElementType;
  isWhatsApp?: boolean;
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
      id: 'whatsapp',
      title: 'Stay Connected',
      description: 'Join our WhatsApp community for updates, discussions and opportunities!',
      buttonText: 'Join RS4S WhatsApp',
      isWhatsApp: true,
      cardBg: 'bg-[#F0FAF4]',
      cardBorder: 'border-[#CFEED9]',
      iconBg: 'bg-[#D6F5E1]',
      iconColor: 'text-[#16A34A]',
      btnBorder: 'border-[#86EFAC]',
      btnText: 'text-[#15803D]',
      btnHover: 'hover:bg-white hover:border-[#4ADE80]',
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
        className={`${card.cardBg} ${card.cardBorder} rounded-xl border p-2.5 sm:p-3 flex flex-col justify-between transition-colors text-left group`}
      >
        <div>
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-2.5 mb-1.5">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${card.iconBg} flex items-center justify-center shrink-0`}
            >
              {card.isWhatsApp ? (
                <svg
                  className="w-4 h-4 fill-[#16A34A] shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              ) : (
                Icon && <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${card.iconColor} stroke-[2]`} />
              )}
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
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border bg-white/70 text-[10px] sm:text-[11px] font-semibold ${card.btnText} ${card.btnBorder} ${card.btnHover} transition-colors cursor-pointer`}
          >
            <span>{card.buttonText}</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="my-1.5 sm:my-2">
      {/* Row 1: 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
        {rowOneCards.map(renderCard)}
      </div>

      {/* Row 2: 3 Cards (Share, WhatsApp [pastel green], Resources) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
        {rowTwoCards.map(renderCard)}
      </div>
    </section>
  );
};
