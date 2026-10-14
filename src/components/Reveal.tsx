import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, as, className = "", delay = 0 }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
