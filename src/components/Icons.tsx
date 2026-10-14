type IconProps = { size?: number; className?: string };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconEngine({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M4 20V9M9 20V4M14 20v-7M19 20V7" />
    </svg>
  );
}

export function IconPayments({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M2.5 10h19M6.5 14.5h3" />
    </svg>
  );
}

export function IconProduct({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M3 9h18M9 9v11.5" />
    </svg>
  );
}

export function IconAuth({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v3" />
    </svg>
  );
}

export function IconRealtime({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M3 12h4l2.5-6 4 12L16 12h5" />
    </svg>
  );
}

export function IconDelivery({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M12 3v12M8 11l4 4 4-4M4 20h16" />
    </svg>
  );
}

export function IconGithub({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export function IconTelegram({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}

export function IconItch({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.13 1.34C2.1 2.66 2.14 4.06 2.24 5.8c.07 1.2.16 2.36.32 3.4.06.4.16.75.28 1.1.14.4.34.75.62 1.05.28.3.66.5 1.13.6.35.08.7.1 1.05.1.2 0 .4 0 .58-.02.4-.05.72-.2.98-.44.28-.26.46-.6.6-1.02.08-.22.14-.45.2-.7.03-.14.1-.2.23-.2.14 0 .22.06.25.2.06.25.12.48.2.7.14.42.32.76.6 1.02.26.24.58.4.98.44.18.02.38.02.58.02.35 0 .7-.02 1.05-.1.47-.1.85-.3 1.13-.6.28-.3.48-.65.62-1.05.12-.35.22-.7.28-1.1.16-1.04.25-2.2.32-3.4.1-1.74.14-3.14-.9-4.46C14.66.6 13.55.5 12.6.5h-1.2c-.95 0-2.06.1-3.27 1.42zM8.4 8.6a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm7.2 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zM12 14.5c-1.6 0-2.6-.9-2.6-.9.5 1.7 2.6 2 2.6 2s2.1-.3 2.6-2c0 0-1 .9-2.6.9z" />
    </svg>
  );
}

export function IconArrowUpRight({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function IconCheck({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconArrowDown({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconHandUp({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="9.6" y="1.6" width="3.8" height="12" rx="1.9" />
      <path d="M6.9 12.6h7.5c1.9 0 3.4 1.5 3.4 3.4v1.3c0 2.7-2.2 4.9-4.9 4.9h-3.6c-2.7 0-4.9-2.2-4.9-4.9v-1.1c0-2 1.1-3.6 2.5-3.6z" />
    </svg>
  );
}

export function Glyph({ size = 30 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 3 5 11.5v17L20 37l15-8.5v-17L20 3Z" stroke="var(--violet)" strokeWidth="2.4" />
      <path d="M20 12v16M11 16.5l18 7M29 16.5l-18 7" stroke="var(--emerald)" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}
