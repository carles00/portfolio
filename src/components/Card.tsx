import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  timeRange?: ReactNode;
}

export default function Card({ children, title, subtitle, timeRange }: Props) {
  return (
    <div className="flex flex-col divide-y-6 divide-amber-900 rounded-2xl bg-stone-900 border border-stone-800 p-5">
      <div className="flex flex-col pb-3">
        <span className="text-3xl font-bold text-amber-600">{title}</span>
        {subtitle && (
          <span className="text-2xl font-semibold text-amber-700">
            {subtitle}
          </span>
        )}
        {timeRange && (
          <span className="flex items-center gap-2 text-xl text-amber-700">
            {timeRange}
          </span>
        )}
      </div>
      <div className="pt-3 text-neutral-50">{children}</div>
    </div>
  );
}
