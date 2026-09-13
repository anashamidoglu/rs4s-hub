import React from 'react';
import {
  Star,
  Sprout,
  BookOpen,
  Users2,
  Search,
  FlaskConical,
  Mic,
  ArrowRight,
} from 'lucide-react';

interface ResearchJourneyProps {
  onStepClick: (stepTitle: string, linkText: string) => void;
}

export const ResearchJourney: React.FC<ResearchJourneyProps> = ({ onStepClick }) => {
  const steps = [
    {
      id: 'step-1',
      icon: Sprout,
      label: 'I know nothing about research',
      action: 'Start here',
    },
    {
      id: 'step-2',
      icon: BookOpen,
      label: 'I want to learn a skill',
      action: 'Research Essentials',
    },
    {
      id: 'step-3',
      icon: Users2,
      label: 'I need guidance',
      action: 'Mentorship',
    },
    {
      id: 'step-4',
      icon: Search,
      label: 'I want a project',
      action: 'Research Opportunities',
    },
    {
      id: 'step-5',
      icon: FlaskConical,
      label: 'I already have a project',
      action: 'Project Support',
    },
    {
      id: 'step-6',
      icon: Mic,
      label: 'I want to share my experience',
      action: 'Present with RS4S',
    },
  ];

  return (
    <section className="my-2 sm:my-2.5">
      {/* Subtle blue card container */}
      <div className="bg-[#F2F6FC] border border-[#DFE9F5] rounded-2xl p-2.5 sm:p-3 text-left">
        {/* Section Title with Star icon */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <Star className="w-3.5 h-3.5 text-[#2563EB] stroke-[2.2] fill-transparent" />
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
            Where are you in your research journey?
          </h3>
        </div>

        {/* Horizontal Connected Steps */}
        <div className="overflow-x-auto pb-0.5 pt-0.5 -mx-1 px-1 scrollbar-none">
          <div className="flex items-center min-w-[660px] justify-between gap-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <React.Fragment key={step.id}>
                  {/* Step Item */}
                  <div className="flex-1 flex flex-col items-center text-center px-0.5 group">
                    {/* Icon */}
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-700 group-hover:text-[#2563EB] transition-colors mb-1">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>

                    {/* Description label */}
                    <p className="text-[10px] sm:text-[11px] text-slate-600 font-normal leading-tight min-h-[24px] max-w-[95px] flex items-center justify-center mb-1">
                      {step.label}
                    </p>

                    {/* Hyperlink Button */}
                    <button
                      type="button"
                      onClick={() => onStepClick(step.label, step.action)}
                      className="text-[11px] sm:text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline underline-offset-2 decoration-1 cursor-pointer transition-colors py-0.5 px-0.5 rounded-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                    >
                      {step.action}
                    </button>
                  </div>

                  {/* Arrow connector between steps */}
                  {!isLast && (
                    <div className="shrink-0 text-slate-300 px-0.5 mb-3.5 select-none pointer-events-none">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
