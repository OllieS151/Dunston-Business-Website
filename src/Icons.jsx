// Icon set — Lucide style, 1.6 stroke
// Exports a generic <Icon name="..."/> + named exports.
const ICON_PATHS = {
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
  chevronDown: <path d="m6 9 6 6 6-6"/>,
  chevronRight: <path d="m9 18 6-6-6-6"/>,
  arrowRight: <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
  mapPin: <><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></>,
  building: <><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/></>,
  tree: <><path d="M12 22V12"/><path d="M12 12c-3.3 0-6-2-6-5a6 6 0 0 1 12 0c0 3-2.7 5-6 5Z"/><path d="M8 22h8"/></>,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 13-9-1 6-4 16-6 16Z"/><path d="M4 13c5-1 8-4 11-9"/></>,
  shield: <path d="M12 22s8-3 8-10V6l-8-3-8 3v6c0 7 8 10 8 10Z"/>,
  wifi: <><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M8.5 16.4a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="1"/></>,
  phone: <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6A19 19 0 0 1 3.1 4.1 1 1 0 0 1 4 3h4.1a1 1 0 0 1 1 .8c.1.9.3 1.8.6 2.6a1 1 0 0 1-.2 1L8.1 8.9a16 16 0 0 0 7 7l1.5-1.4a1 1 0 0 1 1-.2c.8.3 1.7.5 2.6.6a1 1 0 0 1 .8 1Z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></>,
  car: <><path d="M5 17h14l-1.5-7.5a2 2 0 0 0-2-1.5h-9a2 2 0 0 0-2 1.5L3 17h2Z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></>,
  train: <><rect x="5" y="3" width="14" height="14" rx="2"/><path d="M5 11h14"/><path d="M9 21l-2-3M15 21l2-3"/><circle cx="9" cy="14" r=".5"/><circle cx="15" cy="14" r=".5"/></>,
  calendar: <><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M8 4v6M16 4v6"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>,
  award: <><circle cx="12" cy="9" r="6"/><path d="m9 14-2 8 5-3 5 3-2-8"/></>,
  check: <path d="m5 12 5 5 9-11"/>,
  star: <path d="m12 3 2.6 6.2 6.7.5-5.1 4.4 1.6 6.5L12 17l-5.8 3.6 1.6-6.5-5.1-4.4 6.7-.5Z"/>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  x: <><path d="M6 6l12 12M18 6 6 18"/></>,
  printer: <><path d="M6 8V3h12v5"/><rect x="3" y="8" width="18" height="9" rx="1"/><path d="M6 17v4h12v-4"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></>,
  trees: <><path d="M10 22V12"/><path d="M10 12c-2.5 0-5-2-5-5a5 5 0 0 1 10 0c0 3-2.5 5-5 5Z"/><path d="M17 22V13"/><path d="M17 13c-2 0-4-1.6-4-4a4 4 0 0 1 8 0c0 2.4-2 4-4 4Z"/></>,
};

function Icon({name, size = 18, stroke = 1.6, className = "", ...rest}) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round"
         className={className} aria-hidden="true" {...rest}>
      {path}
    </svg>
  );
}

window.Icon = Icon;
