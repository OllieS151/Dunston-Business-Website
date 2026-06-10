// Directory page — business search + filter + card grid.
// Uses window.BUSINESSES.

function DirectoryPage() {
  const all = window.BUSINESSES || [];

  // Hydrate from header search if present
  const initialQuery = window.HEADER_SEARCH_QUERY || '';
  const initialCategory = window.HEADER_SEARCH_CATEGORY || 'All';
  React.useEffect(() => { window.HEADER_SEARCH_QUERY = ''; window.HEADER_SEARCH_CATEGORY = ''; }, []);

  const [query, setQuery] = React.useState(initialQuery);
  const [sector, setSector] = React.useState(initialCategory);
  const [letter, setLetter] = React.useState('All');
  const [sort, setSort] = React.useState('A–Z');

  const sectors = ['All', ...window.BUSINESS_SECTORS.map(s => `${s.sector} (${s.count})`)];

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
    if (sector !== 'All') {
      const sec = sector.replace(/\s*\(\d+\)$/, '');
      list = list.filter(b => b.sector === sec);
    }
    if (letter !== 'All') {
      list = list.filter(b => (b.name || '').toUpperCase().startsWith(letter));
    }
    if (sort === 'A–Z') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'Z–A') list.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'By building') list.sort((a, b) => a.buildingKey.localeCompare(b.buildingKey));
    return list;
  }, [all, query, sector, letter, sort]);

  const reset = () => { setQuery(''); setSector('All'); setLetter('All'); };

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div data-screen-label="Directory">
      <PageHero
        eyebrow="Business directory"
        title="Businesses at Dunston Business Village."
        subtitle="Discover the thriving community of businesses based at DBV, Staffordshire. Ninety-plus tenants across financial planning, construction, technology, education, healthcare, hospitality and more — all verified through our reception."
      >
        <div style={{ display: 'flex', gap: 28, marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--color-rule)', maxWidth: 760 }}>
          <MetricStat number={all.length} unit="" label="Verified tenants" />
          <MetricStat number={window.BUSINESS_SECTORS.length} unit="" label="Sectors represented" />
          <MetricStat number="22" unit="buildings" label="Across the estate" />
          <MetricStat number="2026" unit="" label="Last verified" />
        </div>
      </PageHero>

      {/* Search + filter bar */}
      <section style={{ padding: '48px 0 0', background: 'var(--dbv-cream)' }}>
        <div className="container">
          <div style={{
            background: 'var(--dbv-paper)', border: '1px solid var(--color-border)', borderRadius: 6,
            padding: 28, boxShadow: '0 6px 18px rgba(28,56,41,.08)',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: 14, alignItems: 'center',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'var(--dbv-cream)', border: '1px solid var(--color-border)',
                borderRadius: 4, padding: '4px 8px',
              }}>
                <span style={{ color: 'var(--dbv-sage)', paddingLeft: 8, display: 'inline-flex' }}>
                  <Icon name="search" size={18} />
                </span>
                <input
                  value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Search by business name, sector, or service…"
                  style={{
                    flex: 1, border: 0, outline: 0, background: 'transparent',
                    fontFamily: 'var(--font-sans)', fontSize: 15, padding: '12px 4px',
                    color: 'var(--dbv-charcoal)',
                  }}
                />
                {query && (
                  <button onClick={() => setQuery('')} aria-label="Clear search" style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--dbv-mist)', display: 'inline-flex', padding: 6 }}>
                    <Icon name="x" size={14} stroke={2} />
                  </button>
                )}
              </div>
              <select value={sector} onChange={e => setSector(e.target.value)} className="field-input" style={{
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C3829%27 stroke-width=%221.8%27><path d=%27m6 9 6 6 6-6%27/></svg>")',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '14px', paddingRight: 40,
              }}>
                {sectors.map(s => <option key={s} value={s}>{s === 'All' ? 'All sectors' : s}</option>)}
              </select>
              <select value={sort} onChange={e => setSort(e.target.value)} className="field-input" style={{
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C3829%27 stroke-width=%221.8%27><path d=%27m6 9 6 6 6-6%27/></svg>")',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '14px', paddingRight: 40,
              }}>
                {['A–Z', 'Z–A', 'By building'].map(o => <option key={o} value={o}>Sort: {o}</option>)}
              </select>
              <button onClick={reset} className="btn btn--ghost">Browse All</button>
            </div>
            {/* Alphabet pills */}
            <div style={{ display: 'flex', gap: 6, marginTop: 20, flexWrap: 'wrap' }}>
              <button onClick={() => setLetter('All')} style={pillStyle(letter === 'All')}>All</button>
              {ALPHABET.map(L => {
                const hasAny = all.some(b => b.name.toUpperCase().startsWith(L));
                return (
                  <button key={L} onClick={() => hasAny && setLetter(L)} disabled={!hasAny} style={{
                    ...pillStyle(letter === L),
                    opacity: hasAny ? 1 : 0.3,
                    cursor: hasAny ? 'pointer' : 'not-allowed',
                  }}>{L}</button>
                );
              })}
            </div>
          </div>
          {/* Result count */}
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dbv-forest)', fontWeight: 500 }}>{filtered.length}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-mist)', marginLeft: 8 }}>
                of {all.length} businesses
                {query && <> matching "<em style={{ color: 'var(--dbv-forest)' }}>{query}</em>"</>}
                {sector !== 'All' && <> in <em style={{ color: 'var(--dbv-forest)' }}>{sector.replace(/\s*\(\d+\)$/, '')}</em></>}
              </span>
            </div>
            <PageLink to="sitemap" className="link-italic">View on site map →</PageLink>
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section style={{ padding: '40px 0 80px', background: 'var(--dbv-cream)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
          <div>
            {filtered.length === 0
              ? <DirectoryEmptyState query={query} onShowAll={reset} />
              : <BusinessGrid items={filtered} />
            }
          </div>
          <DirectorySidebar count={all.length} sectorCount={window.BUSINESS_SECTORS.length} />
        </div>
      </section>

      {/* Fraud warning */}
      <FraudWarning />
    </div>
  );
}

function pillStyle(active) {
  return {
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
    letterSpacing: '0.06em',
    padding: '7px 11px', minWidth: 34, borderRadius: 999, cursor: 'pointer',
    background: active ? 'var(--dbv-forest)' : 'transparent',
    color: active ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
    border: active ? '1px solid var(--dbv-forest)' : '1px solid var(--color-border)',
    transition: 'all .15s',
  };
}

// ---------- BUSINESS GRID ----------
function BusinessGrid({ items }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
      {items.map((b, i) => <BusinessCard key={b.name + i} business={b} />)}
    </div>
  );
}

function BusinessCard({ business }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--dbv-paper)',
        border: '1px solid var(--color-border)', borderRadius: 6,
        padding: '22px 24px', display: 'flex', flexDirection: 'column',
        transition: 'transform .2s, box-shadow .2s',
        boxShadow: hover ? '0 14px 28px rgba(28,56,41,.14)' : '0 2px 8px rgba(28,56,41,.05)',
        transform: hover ? 'translateY(-3px)' : 'none',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.2 }}>{business.name}</h3>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'var(--dbv-sage-soft)', color: 'var(--dbv-forest)',
          padding: '4px 8px', borderRadius: 2, flexShrink: 0, whiteSpace: 'nowrap',
        }}>{business.sector}</span>
      </div>
      {business.keywords && (
        <p style={{ margin: '0 0 14px', fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5, color: 'var(--dbv-graphite)' }}>
          {business.keywords.split(', ').slice(0, 5).join(' · ')}
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)' }}>
          <span style={{ color: 'var(--dbv-sage)', flexShrink: 0, display: 'inline-flex' }}><Icon name="mapPin" size={12} /></span>
          {business.location}{business.door && ` · Door ${business.door}`}
        </div>
        {business.contact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)' }}>
            <span style={{ color: 'var(--dbv-sage)', flexShrink: 0, display: 'inline-flex' }}><Icon name="user" size={12} /></span>
            {business.contact}
          </div>
        )}
        {business.tel && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)' }}>
            <span style={{ color: 'var(--dbv-sage)', flexShrink: 0, display: 'inline-flex' }}><Icon name="phone" size={12} /></span>
            {business.tel}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--color-rule)', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--dbv-mist)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>///{business.w3w}</span>
        <PageLink to="sitemap" style={{
          fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.10em', textTransform: 'uppercase',
          color: 'var(--dbv-forest)', display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>View profile <Icon name="arrowRight" size={11} stroke={2} /></PageLink>
      </div>
    </article>
  );
}

// ---------- EMPTY STATE ----------
function DirectoryEmptyState({ query, onShowAll }) {
  return (
    <div style={{
      background: 'var(--dbv-paper)', border: '1px dashed var(--color-border-strong)', borderRadius: 6,
      padding: '72px 56px', textAlign: 'center',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 96, height: 96, borderRadius: '50%', background: 'var(--dbv-cream-warm)', color: 'var(--dbv-sage)', marginBottom: 18 }}>
        <Icon name="search" size={36} stroke={1.4} />
      </div>
      <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--dbv-forest)', fontWeight: 500 }}>No businesses found{query ? <> for <em>"{query}"</em></> : null}.</h3>
      <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--dbv-graphite)' }}>
        Try a different keyword, or browse the whole directory.
      </p>
      <button onClick={onShowAll} className="btn btn--primary">Show All Businesses</button>
    </div>
  );
}

// ---------- SIDEBAR ----------
function DirectorySidebar({ count, sectorCount }) {
  const { navigate } = useRouter();
  const featured = (window.BUSINESSES || []).find(b => b.name === 'Lonsdale Wealth Management');
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'sticky', top: 120 }}>
      {/* Quick stats */}
      <div style={{ background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', borderRadius: 6, padding: '24px 26px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600, marginBottom: 14 }}>Quick stats</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 10, borderBottom: '1px solid rgba(245,240,232,.10)' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(245,240,232,.8)' }}>Businesses</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500 }}>{count}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 10, borderBottom: '1px solid rgba(245,240,232,.10)' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(245,240,232,.8)' }}>Sectors</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500 }}>{sectorCount}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(245,240,232,.8)' }}>Buildings</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500 }}>22</span>
          </div>
        </div>
      </div>
      {/* Links */}
      <div style={{ background: 'var(--dbv-paper)', borderRadius: 6, padding: '24px 26px', border: '1px solid var(--color-border)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600, marginBottom: 14 }}>Useful links</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => navigate('contact')} style={sidebarLinkStyle}>Become a tenant <Icon name="arrowRight" size={12} stroke={2} /></button>
          <button onClick={() => navigate('contact')} style={sidebarLinkStyle}>Contact us <Icon name="arrowRight" size={12} stroke={2} /></button>
          <button onClick={() => navigate('location')} style={sidebarLinkStyle}>Take a tour <Icon name="arrowRight" size={12} stroke={2} /></button>
          <button onClick={() => navigate('sitemap')} style={sidebarLinkStyle}>Interactive site map <Icon name="arrowRight" size={12} stroke={2} /></button>
        </div>
      </div>
      {/* Featured spotlight */}
      {featured && (
        <div style={{ background: 'var(--dbv-cream-warm)', borderRadius: 6, padding: '26px 28px', border: '1px solid var(--color-border)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600, marginBottom: 12 }}>Featured tenant</div>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.15 }}>{featured.name}</h3>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', marginTop: 6 }}>{featured.location}</div>
          <p style={{ margin: '14px 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.45, color: 'var(--dbv-graphite)' }}>
            Independent financial advisers — at DBV since 2014, helping local families plan retirement, investment, and estate.
          </p>
          <a href="http://www.lonsdaleservices.co.uk" target="_blank" rel="noopener noreferrer" className="link-italic">Visit website →</a>
        </div>
      )}
    </aside>
  );
}

const sidebarLinkStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  width: '100%', textAlign: 'left',
  background: 'transparent', border: 0, padding: '11px 0',
  borderTop: '1px solid var(--color-rule)',
  fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-forest)',
  cursor: 'pointer', fontWeight: 500,
};

// ---------- FRAUD WARNING ----------
function FraudWarning() {
  return (
    <section style={{ padding: '64px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <div style={{
          background: 'rgba(180,138,62,.12)', border: '1px solid rgba(180,138,62,.40)',
          borderRadius: 6, padding: '32px 40px',
          display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 24, alignItems: 'center',
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: '50%',
            background: 'var(--color-warning)', color: 'var(--dbv-cream)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.86a2 2 0 0 1 3.4 0l7.7 12.79a2 2 0 0 1-1.7 3H4.3a2 2 0 0 1-1.7-3Z"/></svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warning)', fontWeight: 700, marginBottom: 6 }}>Important notice</div>
            <h3 style={{ margin: '0 0 6px', fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dbv-forest)', fontWeight: 500 }}>Verify before you engage.</h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-graphite)', lineHeight: 1.55 }}>
              Please be aware that some businesses may falsely claim to be based at DBV. Check our verified tenant list above before engaging. Report suspicious activity to reception.
            </p>
          </div>
          <a href="#" className="btn btn--ghost" style={{ borderColor: 'var(--color-warning)', color: 'var(--color-warning)' }}>
            View Fraud Warning <Icon name="arrowRight" size={14} stroke={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.directory = DirectoryPage;
