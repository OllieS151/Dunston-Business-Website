// Site Map SVG — the interactive estate plan.
// Layout matches the official DBV site plan.

function SiteMapSvg({ highlighted, active, isFiltered, showOnlyOccupied, onBuildingClick }) {
  const buildings = window.SITE_MAP_BUILDINGS || [];
  const counts = window.BUSINESS_COUNTS_BY_BUILDING || {};
  const ground = window.SITE_MAP_GROUND || {};
  const [tooltip, setTooltip] = React.useState(null);

  // Colour by type
  const colour = (type) => {
    if (type === 'barn')       return { fill: '#8E6A3F', stroke: '#3B2D20' };
    if (type === 'cabin')      return { fill: '#A89B82', stroke: '#3B2D20' };
    if (type === 'restaurant') return { fill: '#8E6A3F', stroke: '#3B2D20' };
    if (type === 'meeting')    return { fill: '#5B7A57', stroke: '#1C3829' };
    if (type === 'reception')  return { fill: '#5B7A57', stroke: '#1C3829' };
    return { fill: '#A89B82', stroke: '#3B2D20' };
  };

  const onEnter = (key, evt) => {
    const svg = evt.currentTarget.ownerSVGElement;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const local = pt.matrixTransform(ctm.inverse());
    setTooltip({ key, x: local.x, y: local.y });
  };
  const onLeave = () => setTooltip(null);

  const resolveKey = (b) => b.sharedKey || b.key;

  return (
    <div style={{
      position: 'sticky', top: 120,
      background: 'var(--dbv-paper)',
      border: '1px solid var(--color-border)', borderRadius: 6,
      padding: 18,
      boxShadow: '0 14px 36px rgba(28,56,41,.10)',
    }}>
      {/* Map header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px 14px', borderBottom: '1px solid var(--color-rule)', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Estate plan</div>
          <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500 }}>Dunston Business Village</h3>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--dbv-mist)' }}>
          {isFiltered ? `${highlighted.size} buildings match` : `25 acres · ${buildings.length} structures`}
        </div>
      </div>

      <div style={{ position: 'relative' }}>
      <svg viewBox="0 0 1200 1000" style={{ width: '100%', height: 'auto', display: 'block', background: '#D4E6C3' }}>
        <defs>
          <pattern id="grassPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#D4E6C3"/>
            <circle cx="10" cy="14" r="0.8" fill="#7A9B76" opacity="0.6"/>
            <circle cx="30" cy="22" r="0.8" fill="#5B7A57" opacity="0.6"/>
            <circle cx="20" cy="32" r="0.8" fill="#7A9B76" opacity="0.6"/>
          </pattern>
          <pattern id="asphaltPattern" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#A09A8E"/>
            <circle cx="3" cy="5" r="0.4" fill="#7E7666" opacity="0.6"/>
            <circle cx="10" cy="9" r="0.4" fill="#7E7666" opacity="0.6"/>
          </pattern>
          <marker id="roadArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFFFFF" stroke="#1C3829" strokeWidth="0.5"/>
          </marker>
        </defs>

        {/* GRASS BACKGROUND */}
        <rect width="1200" height="1000" fill="url(#grassPattern)"/>

        {/* OUTER FENCE / SITE BOUNDARY */}
        <rect x="20" y="50" width="1075" height="940" fill="none" stroke="#1C3829" strokeWidth="2" opacity="0.55"/>

        {/* A449 vertical road on right */}
        <g>
          <rect x="1100" y="50" width="55" height="940" fill="#3B6E3A" opacity="0.85"/>
          <rect x="1102" y="50" width="51" height="940" fill="#5B7A57" opacity="0.6"/>
          {/* road markings */}
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(y => (
            <rect key={y} x="1126" y={y} width="3" height="30" fill="#FFFFFF" opacity="0.85"/>
          ))}
          <text x="1170" y="100" fontFamily="var(--font-sans)" fontSize="22" fontWeight="700" letterSpacing="0.18em" fill="#1C3829" transform="rotate(90 1170 100)">A449</text>
        </g>

        {/* ASPHALT YARD AREAS */}
        {(ground.asphalt || []).map((a, i) => (
          <rect key={i} x={a.x} y={a.y} width={a.w} height={a.h}
            fill="url(#asphaltPattern)" stroke="#7E7666" strokeWidth="0.5"/>
        ))}

        {/* CENTRAL GREEN PLOT (between cabin columns) */}
        {ground.greenPlot && (
          <rect x={ground.greenPlot.x} y={ground.greenPlot.y} width={ground.greenPlot.w} height={ground.greenPlot.h}
            fill="#7A9B76" opacity="0.50" stroke="#5B7A57" strokeWidth="1"/>
        )}

        {/* PARKING LINE MARKINGS */}
        {(ground.parkingLines || []).map((pl, i) => {
          const lines = [];
          if (pl.dir === 'h') {
            // horizontal row — vertical bay markings
            const n = Math.floor(pl.w / 18);
            for (let j = 1; j < n; j++) {
              lines.push(<line key={j} x1={pl.x + j * 18} y1={pl.y + 2} x2={pl.x + j * 18} y2={pl.y + pl.h - 2} stroke="#F5F0E8" strokeWidth="0.8" opacity="0.65"/>);
            }
          } else {
            // vertical row — horizontal bay markings
            const n = Math.floor(pl.h / 18);
            for (let j = 1; j < n; j++) {
              lines.push(<line key={j} x1={pl.x + 2} y1={pl.y + j * 18} x2={pl.x + pl.w - 2} y2={pl.y + j * 18} stroke="#F5F0E8" strokeWidth="0.8" opacity="0.65"/>);
            }
          }
          return <g key={i}>{lines}</g>;
        })}

        {/* ROAD ARROWS */}
        {(ground.arrows || []).map((arr, i) => {
          const L = 26;
          let x1, y1, x2, y2;
          if (arr.dx) {
            x1 = arr.x - (arr.dx * L) / 2;
            x2 = arr.x + (arr.dx * L) / 2;
            y1 = y2 = arr.y;
          } else {
            x1 = x2 = arr.x;
            y1 = arr.y - (arr.dy * L) / 2;
            y2 = arr.y + (arr.dy * L) / 2;
          }
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#FFFFFF" strokeWidth="2.5"
              opacity="0.95"
              markerEnd="url(#roadArrow)"
            />
          );
        })}

        {/* NO-ENTRY SIGNS */}
        {(ground.noEntry || []).map((n, i) => (
          <g key={i} transform={`translate(${n.x},${n.y})`}>
            <circle r="11" fill="#A24B3A" stroke="#1C3829" strokeWidth="1"/>
            <rect x="-7" y="-2" width="14" height="4" fill="#FFFFFF"/>
          </g>
        ))}

        {/* TREES */}
        {(ground.trees || []).map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <circle cx="0" cy="0" r="8" fill="#3B6E3A" opacity="0.75"/>
            <circle cx="-2" cy="-2" r="4" fill="#5B7A57"/>
          </g>
        ))}

        {/* FIRE ASSEMBLY POINTS */}
        {(ground.fireAssembly || []).map((f, i) => (
          <g key={i} transform={`translate(${f.x},${f.y})`}>
            <rect x="-7" y="-7" width="14" height="14" fill="#3B6E3A" stroke="#1C3829" strokeWidth="0.5"/>
            {/* simplified fire-assembly figure */}
            <circle cx="-2.5" cy="-3" r="1.2" fill="#FFFFFF"/>
            <path d="M -2.5 -1.5 L -2.5 2 M -4 -0.5 L -1 -0.5 M -4 3 L -2.5 1.5 L -1 3 M 2 -3 L 5 -3" stroke="#FFFFFF" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          </g>
        ))}

        {/* RECEPTION MARKER */}
        {ground.reception && (
          <g transform={`translate(${ground.reception.x},${ground.reception.y})`}>
            <circle r="12" fill="#A24B3A" stroke="#1C3829" strokeWidth="1.2"/>
            <text textAnchor="middle" y="4" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#FFFFFF">R</text>
          </g>
        )}

        {/* BUILDINGS */}
        {buildings.map(b => {
          const resolvedKey = resolveKey(b);
          const count = counts[resolvedKey] || 0;
          const isActive = active === resolvedKey;
          const isMatch = highlighted.has(resolvedKey);
          const shouldDim = (isFiltered && !isMatch) || (active && !isActive);
          const isOccupiedDim = showOnlyOccupied && count === 0;
          const col = colour(b.type);

          const classes = ['building'];
          if (isActive) classes.push('active');
          if (shouldDim) classes.push('dimmed');
          if (isFiltered && isMatch && !isActive) classes.push('search-match');

          return (
            <g key={b.key}
              className={classes.join(' ')}
              style={{ opacity: isOccupiedDim ? 0.22 : undefined }}
              onClick={() => onBuildingClick(resolvedKey)}
              onMouseEnter={(e) => onEnter(b.key, e)}
              onMouseLeave={onLeave}
            >
              <title>{b.fullLabel || b.label}{count ? ` · ${count} business${count > 1 ? 'es' : ''}` : ''}</title>
              {/* shadow */}
              <rect x={b.x + 2} y={b.y + 2} width={b.w} height={b.h} rx={1}
                fill="rgba(28,56,41,0.25)"/>
              {/* body */}
              <rect
                x={b.x} y={b.y} width={b.w} height={b.h} rx={1}
                fill={isActive ? '#1C3829' : col.fill}
                stroke={isActive ? '#0E1F14' : col.stroke}
                strokeWidth={b.type === 'barn' ? 1.4 : 1}
              />
              {/* barn roof line */}
              {b.type === 'barn' && (
                <line x1={b.x + 4} y1={b.y + 4} x2={b.x + b.w - 4} y2={b.y + 4}
                  stroke="#5B4530" strokeWidth="0.6" opacity="0.6"/>
              )}
              {/* label */}
              <text
                x={b.x + b.w / 2}
                y={b.y + b.h / 2 + (b.type === 'barn' ? 6 : 5)}
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize={b.type === 'barn' ? 16 : 14}
                fontWeight="700"
                fill={isActive ? '#F5F0E8' : '#F5F0E8'}
                style={{ pointerEvents: 'none' }}
              >{b.label}</text>
              {/* barn subtitle "Barn N" prefix */}
              {b.type === 'barn' && (
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 - 8}
                  textAnchor="middle"
                  fontFamily="var(--font-sans)"
                  fontSize="10"
                  fontWeight="500"
                  fill="#F5F0E8"
                  opacity="0.85"
                  style={{ pointerEvents: 'none' }}
                >Barn</text>
              )}
              {/* cabin "Log Cabin" prefix (small) */}
              {b.type === 'cabin' && b.h > 50 && (
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 - 8}
                  textAnchor="middle"
                  fontFamily="var(--font-sans)"
                  fontSize="8"
                  fontWeight="500"
                  fill="#F5F0E8"
                  opacity="0.85"
                  style={{ pointerEvents: 'none' }}
                >Log</text>
              )}
              {b.type === 'cabin' && b.h > 50 && (
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 + 0}
                  textAnchor="middle"
                  fontFamily="var(--font-sans)"
                  fontSize="8"
                  fontWeight="500"
                  fill="#F5F0E8"
                  opacity="0.85"
                  style={{ pointerEvents: 'none' }}
                >Cabin</text>
              )}
              {/* reception meeting room icon */}
              {(b.type === 'meeting' || b.type === 'reception') && (
                <g transform={`translate(${b.x + b.w - 18}, ${b.y + 10})`} style={{ pointerEvents: 'none' }}>
                  <rect x="-6" y="-6" width="12" height="12" fill="#3B6E3A" stroke="#1C3829" strokeWidth="0.4"/>
                </g>
              )}
              {/* count badge */}
              {count > 0 && (
                <g transform={`translate(${b.x + b.w - 4},${b.y + 4})`} style={{ pointerEvents: 'none' }}>
                  <circle r="9" fill="#F5F0E8" stroke={isActive ? '#C8B89A' : '#1C3829'} strokeWidth="1.2"/>
                  <text textAnchor="middle" y="3.5" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#1C3829">{count}</text>
                </g>
              )}
            </g>
          );
        })}

        {/* Repositioned cabin label override for short cabins (no Log Cabin prefix room) */}
        {/* (handled inline above with the h > 50 check) */}

        {/* TOOLTIP */}
        {tooltip && (() => {
          const b = buildings.find(x => x.key === tooltip.key);
          if (!b) return null;
          const resolvedKey = resolveKey(b);
          const count = counts[resolvedKey] || 0;
          const tw = 240, th = 56;
          let tx = b.x + b.w / 2 - tw / 2;
          let ty = b.y - th - 8;
          if (ty < 8) ty = b.y + b.h + 8;
          if (tx < 8) tx = 8;
          if (tx + tw > 1192) tx = 1192 - tw;
          return (
            <g style={{ pointerEvents: 'none' }}>
              <rect x={tx} y={ty} width={tw} height={th} rx={4} fill="var(--dbv-forest)" stroke="var(--dbv-stone)" strokeWidth="1"/>
              <text x={tx + 14} y={ty + 22} fontFamily="var(--font-sans)" fontSize="14" fill="var(--dbv-cream)" fontWeight="600">{b.fullLabel || b.label}</text>
              <text x={tx + 14} y={ty + 42} fontFamily="var(--font-serif)" fontStyle="italic" fontSize="12" fill="var(--dbv-stone)">
                {count ? `${count} business${count > 1 ? 'es' : ''}` : 'No tenants listed'}
              </text>
            </g>
          );
        })()}

        {/* COMPASS ROSE — bottom-left */}
        <g transform="translate(80,925)">
          <circle r="36" fill="#F5F0E8" stroke="#1C3829" strokeWidth="1.4"/>
          {/* main 4 directions */}
          <g fill="#1C3829">
            <polygon points="0,-30 5,0 0,0 -5,0"/>
            <polygon points="30,0 0,-5 0,0 0,5"/>
            <polygon points="0,30 -5,0 0,0 5,0"/>
            <polygon points="-30,0 0,5 0,0 0,-5"/>
          </g>
          <g fill="#A89878">
            <polygon points="0,-30 -5,0 0,0"/>
            <polygon points="30,0 0,5 0,0"/>
            <polygon points="0,30 5,0 0,0"/>
            <polygon points="-30,0 0,-5 0,0"/>
          </g>
          <circle r="3" fill="#1C3829"/>
          <text x="0" y="-42" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#1C3829">N</text>
          <text x="44" y="5" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#1C3829">E</text>
          <text x="0" y="56" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#1C3829">S</text>
          <text x="-52" y="5" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#1C3829">W</text>
        </g>

        {/* SCALE STRIP — bottom right */}
        <g transform="translate(900,970)">
          <line x1="0" y1="0" x2="120" y2="0" stroke="#1C3829" strokeWidth="2"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#1C3829" strokeWidth="2"/>
          <line x1="60" y1="-4" x2="60" y2="4" stroke="#1C3829" strokeWidth="1.5"/>
          <line x1="120" y1="-5" x2="120" y2="5" stroke="#1C3829" strokeWidth="2"/>
          <text x="0" y="20" fontFamily="var(--font-sans)" fontSize="11" fill="#1C3829" fontWeight="600">0</text>
          <text x="120" y="20" textAnchor="end" fontFamily="var(--font-sans)" fontSize="11" fill="#1C3829" fontWeight="600">50 m</text>
        </g>
      </svg>
      </div>

      {/* Legend */}
      <div style={{
        marginTop: 14, padding: '14px 16px', background: 'var(--dbv-cream)',
        borderRadius: 4, border: '1px solid var(--color-border)',
        display: 'flex', flexWrap: 'wrap', gap: '10px 22px', alignItems: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Legend</div>
        {[
          { color: '#8E6A3F', stroke: '#3B2D20', label: 'Barns' },
          { color: '#A89B82', stroke: '#3B2D20', label: 'Log Cabins' },
          { color: '#5B7A57', stroke: '#1C3829', label: 'Reception / meeting' },
          { color: '#A09A8E', stroke: '#7E7666', label: 'Parking' },
          { color: '#7A9B76', stroke: '#5B7A57', label: 'Greenery' },
        ].map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)' }}>
            <span style={{
              display: 'inline-block', width: 18, height: 12,
              background: it.color, border: `1.4px solid ${it.stroke}`,
              borderRadius: 2,
            }}/>{it.label}
          </span>
        ))}
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)' }}>
          <span style={{
            display: 'inline-flex', width: 18, height: 18, borderRadius: '50%',
            background: 'var(--dbv-cream)', border: '1.2px solid var(--dbv-forest)',
            alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'var(--dbv-forest)',
          }}>3</span>
          = business count
        </span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)', marginLeft: 'auto' }}>
          <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: '#A24B3A' }}/>
          R = Reception
        </span>
      </div>
    </div>
  );
}

window.SiteMapSvg = SiteMapSvg;
