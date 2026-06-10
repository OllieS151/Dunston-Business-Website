// Interactive Site Map page — search panel + SVG map.

function SiteMapPage() {
  const all = window.BUSINESSES || [];
  const initialQuery = window.HEADER_SEARCH_QUERY || '';
  React.useEffect(() => { window.HEADER_SEARCH_QUERY = ''; }, []);

  const [query, setQuery] = React.useState(initialQuery);
  const [letter, setLetter] = React.useState('All');
  const [activeBuilding, setActiveBuilding] = React.useState(null);
  const [selectedBiz, setSelectedBiz] = React.useState(null);
  const [showOnlyOccupied, setShowOnlyOccupied] = React.useState(false);

  // Filter businesses
  const filtered = React.useMemo(() => {
    let list = [...all];
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(b =>
        (b.name || '').toLowerCase().includes(q) ||
        (b.contact || '').toLowerCase().includes(q) ||
        (b.sector || '').toLowerCase().includes(q) ||
        (b.keywords || '').toLowerCase().includes(q) ||
        (b.location || '').toLowerCase().includes(q)
      );
    }
    if (letter !== 'All') list = list.filter(b => (b.name || '').toUpperCase().startsWith(letter));
    if (activeBuilding) list = list.filter(b => b.buildingKey === activeBuilding);
    list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [all, query, letter, activeBuilding]);

  // Building keys that have any business in current results
  const highlightedBuildings = React.useMemo(() => {
    const set = new Set();
    filtered.forEach(b => set.add(b.buildingKey));
    return set;
  }, [filtered]);

  const onBusinessClick = (biz) => {
    setSelectedBiz(biz);
    setActiveBuilding(biz.buildingKey);
  };

  const onBuildingClick = (key) => {
    setSelectedBiz(null);
    setActiveBuilding(prev => prev === key ? null : key);
  };

  const clearAll = () => {
    setQuery(''); setLetter('All'); setActiveBuilding(null); setSelectedBiz(null);
  };

  return (
    <div data-screen-label="Site map">
      <style dangerouslySetInnerHTML={{ __html: `
        .building { transition: fill .25s ease, opacity .25s ease, filter .25s ease; cursor: pointer; }
        .building:hover { filter: brightness(1.08); }
        .building.active {
          animation: pulseGlow 2.4s ease-in-out infinite;
        }
        .building.dimmed { opacity: 0.32; }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(28,56,41,0.5)); }
          50% { filter: drop-shadow(0 0 18px rgba(28,56,41,0.95)); }
        }
        .building.search-match:not(.active) {
          filter: drop-shadow(0 0 8px rgba(122,155,118,0.7));
        }
        .alphabet-btn { font-family: var(--font-sans); font-size: 11px; font-weight: 600; width: 28px; height: 28px;
          border-radius: 999px; cursor: pointer; background: transparent; color: var(--dbv-forest);
          border: 1px solid var(--color-border); transition: all .15s; padding: 0;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .alphabet-btn:hover:not(:disabled) { border-color: var(--dbv-forest); background: var(--dbv-cream-warm); }
        .alphabet-btn.active { background: var(--dbv-forest); color: var(--dbv-cream); border-color: var(--dbv-forest); }
        .alphabet-btn:disabled { opacity: 0.3; cursor: default; }
        .biz-row {
          width: 100%; text-align: left; padding: 14px 16px;
          background: var(--dbv-paper);
          border: 1px solid var(--color-border); border-radius: 4px;
          cursor: pointer; transition: all .15s;
          display: flex; flex-direction: column; gap: 6px;
          font-family: var(--font-sans);
        }
        .biz-row:hover { border-color: var(--dbv-sage); background: var(--dbv-cream-warm); transform: translateX(2px); }
        .biz-row.active {
          background: var(--dbv-forest); color: var(--dbv-cream); border-color: var(--dbv-forest);
        }
        .biz-row.active .biz-row-loc, .biz-row.active .biz-row-contact { color: var(--dbv-stone) !important; }
      ` }} />

      {/* HEADER */}
      <section style={{ padding: '64px 0 32px', background: 'var(--dbv-cream)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <Crumbs items={[{ to: 'home', label: 'Home' }, { to: 'community', label: 'Community' }, { label: 'Interactive site map' }]} />
          <span className="eyebrow">Interactive site map</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginTop: 14 }}>
            <div style={{ flex: '1 1 600px', maxWidth: 920 }}>
              <h1 style={{
                fontFamily: 'var(--font-serif)', fontWeight: 500,
                fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.018em',
                color: 'var(--dbv-forest)', margin: '0 0 18px',
                textWrap: 'pretty',
              }}>
                Walk the village, <span style={{ fontStyle: 'italic' }}>find a business.</span>
              </h1>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--dbv-sage)', margin: 0 }}>
                Twenty-five acres · {window.SITE_MAP_BUILDINGS.length} structures · {all.length} businesses
              </p>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-graphite)', cursor: 'pointer', flexShrink: 0 }}>
              <input type="checkbox" checked={showOnlyOccupied} onChange={e => setShowOnlyOccupied(e.target.checked)} style={{ width: 18, height: 18, accentColor: 'var(--dbv-forest)' }} />
              Show only occupied buildings
            </label>
          </div>
        </div>
      </section>

      {/* MAIN: two-col */}
      <section style={{ padding: '40px 0 80px', background: 'var(--dbv-cream-warm)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 28, alignItems: 'start' }}>

          {/* LEFT panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

            {/* Search input */}
            <div style={{ background: 'var(--dbv-paper)', border: '1px solid var(--color-border)', borderRadius: 6, padding: 18 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'var(--dbv-cream)', border: '1px solid var(--color-border)',
                borderRadius: 4, padding: '6px 10px',
              }}>
                <span style={{ color: 'var(--dbv-sage)', display: 'inline-flex' }}>
                  <Icon name="search" size={16} />
                </span>
                <input
                  value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Search business, sector, keyword…"
                  style={{ flex: 1, border: 0, outline: 0, background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 14, padding: '10px 4px', color: 'var(--dbv-charcoal)' }}
                />
                {query && (
                  <button onClick={() => setQuery('')} aria-label="Clear" style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--dbv-mist)', display: 'inline-flex', padding: 4 }}>
                    <Icon name="x" size={14} stroke={2} />
                  </button>
                )}
              </div>

              {/* Alphabet */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 14 }}>
                <button onClick={() => setLetter('All')} className={`alphabet-btn ${letter === 'All' ? 'active' : ''}`} style={{ width: 'auto', padding: '0 10px' }}>All</button>
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(L => {
                  const has = all.some(b => b.name.toUpperCase().startsWith(L));
                  return (
                    <button
                      key={L} disabled={!has}
                      className={`alphabet-btn ${letter === L ? 'active' : ''}`}
                      onClick={() => setLetter(letter === L ? 'All' : L)}
                    >{L}</button>
                  );
                })}
              </div>

              {/* Active filters bar */}
              {(query || letter !== 'All' || activeBuilding) && (
                <div style={{
                  marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--color-rule)',
                  display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dbv-sage)' }}>Filters</span>
                  {activeBuilding && (
                    <Chip label={`Building: ${activeBuilding}`} onRemove={() => setActiveBuilding(null)} />
                  )}
                  {letter !== 'All' && (
                    <Chip label={`A–Z: ${letter}`} onRemove={() => setLetter('All')} />
                  )}
                  {query && (
                    <Chip label={`"${query}"`} onRemove={() => setQuery('')} />
                  )}
                  <button onClick={clearAll} style={{
                    marginLeft: 'auto', background: 'transparent', border: 0, cursor: 'pointer',
                    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.10em',
                    textTransform: 'uppercase', color: 'var(--dbv-forest)', borderBottom: '1px solid var(--dbv-stone)',
                    padding: '4px 0',
                  }}>Clear all</button>
                </div>
              )}
            </div>

            {/* Detail panel (when business selected) */}
            {selectedBiz && (
              <BusinessDetailPanel business={selectedBiz} onClose={() => { setSelectedBiz(null); setActiveBuilding(null); }} />
            )}

            {/* Building summary (when a building selected but no specific business) */}
            {activeBuilding && !selectedBiz && (
              <BuildingSummary buildingKey={activeBuilding} onClose={() => setActiveBuilding(null)} onBusinessClick={onBusinessClick} />
            )}

            {/* Results list */}
            {!selectedBiz && !activeBuilding && (
              <div style={{
                background: 'var(--dbv-paper)', border: '1px solid var(--color-border)', borderRadius: 6,
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '14px 18px', borderBottom: '1px solid var(--color-rule)',
                  fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--dbv-sage)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span>Results · {filtered.length}</span>
                  {query && filtered.length === 0 && <span style={{ color: 'var(--dbv-mist)', textTransform: 'none', letterSpacing: 0, fontSize: 12, fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>no match</span>}
                </div>
                {filtered.length === 0 ? (
                  <div style={{ padding: '40px 24px', textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--dbv-forest)', margin: '0 0 14px' }}>
                      No businesses found for "{query}".
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-graphite)', margin: '0 0 18px' }}>Try a different keyword or browse all tenants below.</p>
                    <button onClick={clearAll} className="btn btn--primary btn--sm">Show All</button>
                  </div>
                ) : (
                  <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {filtered.map((b, i) => (
                      <button key={i} className="biz-row" onClick={() => onBusinessClick(b)}>
                        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2, color: 'inherit' }}>{b.name}</div>
                        <div className="biz-row-loc" style={{ fontSize: 11, color: 'var(--dbv-mist)', letterSpacing: '0.05em' }}>
                          <span style={{
                            display: 'inline-block', padding: '2px 8px', borderRadius: 999,
                            border: '1px solid currentColor', marginRight: 6, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                          }}>{b.location}</span>
                        </div>
                        {(b.contact || b.tel) && (
                          <div className="biz-row-contact" style={{ fontSize: 11, color: 'var(--dbv-graphite)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            {b.contact && <span>{b.contact}</span>}
                            {b.tel && <span>{b.tel}</span>}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Print directory link */}
            <a href="#" onClick={e => { e.preventDefault(); window.print(); }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
              fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)',
              borderBottom: '1px solid var(--dbv-stone)', padding: '4px 0', textDecoration: 'none',
            }}>
              <Icon name="printer" size={13} /> Print directory
            </a>

            {/* Fraud warning */}
            <div style={{
              background: 'rgba(180,138,62,.10)', border: '1px solid rgba(180,138,62,.32)',
              borderRadius: 6, padding: '18px 20px',
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <span style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: 2 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.86a2 2 0 0 1 3.4 0l7.7 12.79a2 2 0 0 1-1.7 3H4.3a2 2 0 0 1-1.7-3Z"/></svg>
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-warning)', fontWeight: 700, marginBottom: 4 }}>Fraud warning</div>
                <p style={{ margin: '0 0 8px', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-charcoal)', lineHeight: 1.5 }}>
                  Some businesses may falsely claim a DBV address. Always verify tenants using this official directory. Report concerns to reception.
                </p>
                <a href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--color-warning)', borderBottom: '1px solid currentColor', padding: '2px 0', textDecoration: 'none' }}>
                  View Fraud Notice →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: SVG map */}
          <SiteMapSvg
            highlighted={highlightedBuildings}
            active={activeBuilding}
            isFiltered={query || letter !== 'All'}
            showOnlyOccupied={showOnlyOccupied}
            onBuildingClick={onBuildingClick}
          />
        </div>
      </section>
    </div>
  );
}

function Chip({ label, onRemove }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'var(--dbv-cream)', border: '1px solid var(--color-border)',
      padding: '4px 6px 4px 10px', borderRadius: 999,
      fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--dbv-forest)',
    }}>
      {label}
      <button onClick={onRemove} aria-label="Remove" style={{
        background: 'var(--dbv-stone-soft)', border: 0, cursor: 'pointer',
        width: 18, height: 18, borderRadius: '50%', display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', color: 'var(--dbv-forest)',
      }}><Icon name="x" size={10} stroke={2.5} /></button>
    </span>
  );
}

// ---------- BUSINESS DETAIL PANEL ----------
function BusinessDetailPanel({ business, onClose }) {
  const sameBuilding = (window.SITE_MAP_BUSINESSES_BY_KEY[business.buildingKey] || []).filter(b => b.name !== business.name);
  const isVirtualHub = business.buildingKey === 'cabin-20';
  return (
    <div className="anim-slide-up" style={{
      background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', borderRadius: 6,
      padding: '22px 24px', boxShadow: '0 12px 28px rgba(28,56,41,.16)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600, marginBottom: 4 }}>Tenant profile</div>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, lineHeight: 1.15 }}>{business.name}</h3>
        </div>
        <button onClick={onClose} aria-label="Close" style={{
          background: 'rgba(245,240,232,.10)', border: 0, color: 'var(--dbv-cream)',
          width: 30, height: 30, borderRadius: '50%', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}><Icon name="x" size={14} stroke={2} /></button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 13 }}>
        <DetailRow icon="mapPin" label="Location" value={business.location + (business.door ? ' · Door ' + business.door : '')} />
        {business.contact && <DetailRow icon="user" label="Contact" value={business.contact} />}
        {business.tel && <DetailRow icon="phone" label="Phone" value={business.tel} />}
        {business.website && (
          <DetailRow icon="wifi" label="Website" value={
            <a href={business.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dbv-stone)', borderBottom: '1px solid currentColor' }}>
              {business.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          } />
        )}
        {business.w3w && (
          <DetailRow icon="mapPin" label="what3words" value={
            <a href={`https://what3words.com/${business.w3w}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dbv-stone)', borderBottom: '1px solid currentColor', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
              ///{business.w3w}
            </a>
          } />
        )}
        {business.sector && (
          <DetailRow icon="briefcase" label="Sector" value={business.sector} />
        )}
      </div>
      {isVirtualHub && (
        <div style={{ marginTop: 18, padding: '14px 16px', background: 'rgba(245,240,232,.06)', borderRadius: 4 }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, lineHeight: 1.5, color: 'var(--dbv-stone)' }}>
            📍 Woodland Lodge (Log Cabin 20, Door 64) is the site's virtual office hub and DBV reception. Many businesses use this as their registered address.
          </p>
        </div>
      )}
      <div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
        {business.w3w && (
          <a href={`https://what3words.com/${business.w3w}`} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm" style={{ flex: 1, justifyContent: 'center' }}>
            View on what3words
          </a>
        )}
      </div>
      {sameBuilding.length > 0 && (
        <details style={{ marginTop: 18, borderTop: '1px solid rgba(245,240,232,.10)', paddingTop: 14 }}>
          <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-stone)' }}>
            Others in this building ({sameBuilding.length})
          </summary>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 200, overflowY: 'auto' }}>
            {sameBuilding.map((b, i) => (
              <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(245,240,232,.85)', padding: '4px 0' }}>
                {b.name}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '20px 90px 1fr', gap: 10, alignItems: 'flex-start', padding: '4px 0' }}>
      <span style={{ color: 'var(--dbv-sage)', display: 'inline-flex', marginTop: 2 }}><Icon name={icon} size={14} stroke={1.6} /></span>
      <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600 }}>{label}</span>
      <span style={{ color: 'var(--dbv-cream)' }}>{value}</span>
    </div>
  );
}

// ---------- BUILDING SUMMARY ----------
function BuildingSummary({ buildingKey, onClose, onBusinessClick }) {
  const building = (window.SITE_MAP_BUILDINGS || []).find(b => b.key === buildingKey);
  const businesses = window.SITE_MAP_BUSINESSES_BY_KEY[buildingKey] || [];
  if (!building) return null;
  return (
    <div className="anim-slide-up" style={{
      background: 'var(--dbv-paper)', border: '1px solid var(--color-border)', borderRadius: 6,
      padding: '20px 22px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Building</div>
          <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dbv-forest)', fontWeight: 500 }}>{building.label}</h3>
          {building.subtitle && (
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-sage)', marginTop: 2 }}>{building.subtitle}</div>
          )}
        </div>
        <button onClick={onClose} aria-label="Close" style={{
          background: 'var(--dbv-cream-warm)', border: 0, color: 'var(--dbv-forest)',
          width: 30, height: 30, borderRadius: '50%', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}><Icon name="x" size={14} stroke={2} /></button>
      </div>
      {businesses.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--dbv-mist)', margin: 0 }}>
          This building has no listed tenants right now.
        </p>
      ) : (
        <>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)', marginBottom: 12 }}>
            {businesses.length} business{businesses.length > 1 ? 'es' : ''} at this building
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 400, overflowY: 'auto' }}>
            {businesses.map((b, i) => (
              <button key={i} className="biz-row" onClick={() => onBusinessClick(b)}>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--dbv-forest)' }}>{b.name}</div>
                {b.contact && <div className="biz-row-contact" style={{ fontSize: 11, color: 'var(--dbv-mist)' }}>{b.contact}</div>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.sitemap = SiteMapPage;
