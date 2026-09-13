import React from 'react';
import {
  Megaphone,
  Calendar,
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
        <div className="bg-[#F8FAFD] rounded-xl border border-[#DFE7F2] p-2.5 sm:p-3 flex flex-col justify-between transition-colors group">
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

        {/* Card 2: Upcoming Events (Swapped from above) */}
        <div className="bg-[#EEF7FD] rounded-xl border border-[#C8EBFD] p-2.5 sm:p-3 flex flex-col justify-between transition-colors group">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-[#CFFAFE] flex items-center justify-center shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7] stroke-[2]" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                Upcoming Events
              </h4>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">
              See what's coming up and register for RS4S sessions and activities.
            </p>
          </div>

          <div className="mt-2.5 pt-0.5">
            <button
              type="button"
              onClick={() =>
                onActionClick('Upcoming Events', 'RS4S calendar and session schedules will be displayed here.')
              }
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#BAE6FD] bg-white/80 hover:bg-white text-[#0284C7] text-[10px] sm:text-[11px] font-semibold transition-colors cursor-pointer"
            >
              <span>View Calendar</span>
              <ArrowRight className="w-3 h-3 text-[#0284C7]" />
            </button>
          </div>
        </div>

        {/* Card 3: Our Mission */}
        <div className="bg-[#F8FAFD] rounded-xl border border-[#DFE7F2] p-2.5 sm:p-3 flex flex-col justify-between transition-colors group">
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
