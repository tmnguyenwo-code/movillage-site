import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "warm" | "sand";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "default",
  id,
}: SectionProps) {
  const bgStyles = {
    default: "bg-white",
    warm: "bg-warm-paper",
    sand: "bg-soft-sand",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
}
