// Simple SVG icons for categories

export function ChairIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v8m14-8v8M8 20h8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TableIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="8" width="18" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12v8M18 12v8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SofaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10v5a2 2 0 002 2h12a2 2 0 002-2v-5M4 10a2 2 0 012-2h12a2 2 0 012 2M4 10H3a1 1 0 00-1 1v2a1 1 0 001 1h1m16 0h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1M6 17v3m12-3v3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function OfficeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3v18M3 9h6M3 15h6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
