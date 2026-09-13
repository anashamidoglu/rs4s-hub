import React from 'react';
import {
  Megaphone,
  MessageCircle,
  Target,
  ArrowRight,
} from 'lucide-react';

interface BottomHighlightsProps {
  onActionClick: (title: string, details?: string) => void;
}

export const BottomHighlights: React.FC<BottomHighlightsProps> = ({ onActionClick }) => {
  return (
    <section className="my-1.5 sm:my-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 text-left">
        {/* Card 1: Announcements */}
        <div className="bg-[#F8FAFD] rounded-xl border border-[#DFE7F2] p-2.5 sm:p-3 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-150 group">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Megaphone className="w-4 h-4 text-blue-600 stroke-[2]" />
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                Announcements
              </h4>
            </div>

            <ul className="space-y-1 mt-1 text-[10px] sm:text-[11px] text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-800 mt-1.5 shrink-0" />
                <span>Cardiology Journal Club – Sep 10</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-800 mt-1.5 shrink-0" />
                <span>Mentorship Applications Open!</span>
              </li>
            </ul>
          </div>

          <div className="mt-2.5 pt-0.5">
            <button
              type="button"
              onClick={() => onActionClick('Announcements', 'Opening announcements archive...')}
              className="text-[10px] sm:text-[11px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>See all announcements</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Card 2: Stay Connected */}
        <div className="bg-[#F8FAFD] rounded-xl border border-[#DFE7F2] p-2.5 sm:p-3 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-150 group">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <MessageCircle className="w-4 h-4 text-blue-600 stroke-[2]" />
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                Stay Connected
              </h4>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
              Join our WhatsApp community for updates, discussions and opportunities!
            </p>
          </div>

          <div className="mt-2.5 pt-0.5">
            <button
              type="button"
              onClick={() =>
                onActionClick('WhatsApp Community', 'WhatsApp community invitation will be activated soon!')
              }
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-emerald-300/80 bg-white/80 hover:bg-emerald-50/60 text-emerald-800 text-[10px] sm:text-[11px] font-semibold transition-all duration-150 cursor-pointer shadow-2xs hover:border-emerald-400"
            >
              {/* WhatsApp SVG Icon */}
              <svg
                className="w-3.5 h-3.5 fill-emerald-600 shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Join RS4S WhatsApp</span>
              <ArrowRight className="w-3 h-3 text-emerald-700" />
            </button>
          </div>
        </div>

        {/* Card 3: Our Mission */}
        <div className="bg-[#F8FAFD] rounded-xl border border-[#DFE7F2] p-2.5 sm:p-3 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-150 group">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Target className="w-4 h-4 text-blue-600 stroke-[2]" />
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                Our Mission
              </h4>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
              RS4S empowers medical students with the tools, guidance and network to participate meaningfully in research and create impact.
            </p>
          </div>

          <div className="mt-2.5 pt-0.5">
            <button
              type="button"
              onClick={() => onActionClick('Our Mission', 'Learn more about RS4S and our vision...')}
              className="text-[10px] sm:text-[11px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Learn more about RS4S</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
