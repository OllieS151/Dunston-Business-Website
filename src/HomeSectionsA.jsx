// Homepage — full landing experience per brief.
// Sections: Hero+search, Awards strip, Key stats, Office options, Why DBV,
// Directory teaser, Testimonials, News, CTA banner.

function HomeHero() {
  const { navigate } = useRouter();
  const [query, setQuery] = React.useState('');
  const onSearch = (e) => {
    e.preventDefault();
    window.HEADER_SEARCH_QUERY = query.trim();
    navigate('directory');
  };
  return (
    <section style={{ padding: '72px 0 56px', background: 'var(--dbv-cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: -240, top: 60, width: 720, height: 720,
        background: 'radial-gradient(circle, rgba(200,184,154,.50) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center', position: 'relative' }}>
        <div>
          <span className="eyebrow">Est. 2008 · Staffordshire · 25 acres</span>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 500,
            fontSize: 80, lineHeight: 0.98, letterSpacing: '-0.018em',
            margin: '18px 0 24px', color: 'var(--dbv-forest)',
          }}>
            Where heritage<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>meets</span> modern business.
          </h1>
          <p style={{
            fontSize: 20, lineHeight: 1.55, color: 'var(--dbv-graphite)',
            maxWidth: 540, margin: '0 0 32px',
          }}>
            Award-winning serviced and managed offices set within 25 acres of Staffordshire countryside.
            From 200 to 10,000+ sq ft — flexible terms from three months.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 36 }}>
            <PageLink to="spaces" className="btn btn--primary btn--lg">
              Explore Available Spaces <Icon name="arrowRight" size={14} stroke={2} />
            </PageLink>
            <a href="#" className="btn btn--ghost">
              Watch the Video Tour
            </a>
          </div>
          {/* Search bar — prominent, business directory entry */}
          <form onSubmit={onSearch} style={{
            background: 'var(--dbv-paper)',
            border: '1px solid rgba(28,56,41,.16)',
            borderRadius: 4, padding: 6, display: 'flex', alignItems: 'center', gap: 8,
            maxWidth: 540, boxShadow: '0 6px 18px rgba(28,56,41,.08)',
          }}>
            <span style={{ color: 'var(--dbv-sage)', paddingLeft: 12, display: 'inline-flex' }}>
              <Icon name="search" size={18} />
            </span>
            <input
              placeholder="Search businesses at DBV"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                flex: 1, border: 0, outline: 0, background: 'transparent',
                fontFamily: 'var(--font-sans)', fontSize: 15,
                padding: '12px 4px', color: 'var(--dbv-charcoal)',
              }}
            />
            <button type="submit" className="btn btn--primary" style={{ padding: '12px 22px' }}>
              Search
            </button>
          </form>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-mist)', marginTop: 10 }}>
            Or <PageLink to="directory" style={{ color: 'var(--dbv-sage)', borderBottom: '1px solid var(--dbv-stone)' }}>browse the full directory</PageLink> · 90+ businesses on site
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div style={{ position: 'relative', aspectRatio: '4/5', width: '100%' }}>
      <div style={{ position: 'absolute', right: -20, bottom: -20, width: '92%', height: '92%', background: 'var(--dbv-stone)', borderRadius: 4 }} />
      <div className="grain" style={{
        position: 'absolute', inset: 0, borderRadius: 4, overflow: 'hidden',
        background: `
          radial-gradient(120% 60% at 70% 110%, rgba(28,56,41,.85) 0%, transparent 60%),
          radial-gradient(140% 80% at 20% 0%, rgba(245,240,232,.30) 0%, transparent 50%),
          linear-gradient(170deg, #6E8C68 0%, #2A4D38 55%, #122418 100%)
        `,
        boxShadow: '0 24px 56px rgba(28,56,41,.25)',
      }}>
        <svg viewBox="0 0 400 500" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto' }}>
          <defs>
            <linearGradient id="bgHaze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="#1C3829" opacity="0.55">
            <ellipse cx="60" cy="320" rx="50" ry="80" />
            <ellipse cx="340" cy="310" rx="60" ry="90" />
            <ellipse cx="120" cy="340" rx="35" ry="60" />
          </g>
          <g>
            <rect x="80" y="260" width="240" height="160" fill="#6F5840" />
            <rect x="80" y="260" width="240" height="160" fill="url(#bgHaze)" />
            <polygon points="70,260 200,180 330,260" fill="#3B2D20" />
            <rect x="190" y="320" width="20" height="100" fill="#1C3829" />
            <rect x="105" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="137" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="169" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="219" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="251" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="283" y="290" width="22" height="28" fill="#F5DBA0" opacity="0.85" />
            <rect x="240" y="200" width="14" height="40" fill="#3B2D20" />
          </g>
          <rect x="0" y="420" width="400" height="80" fill="#1C3829" />
          <rect x="0" y="420" width="400" height="80" fill="url(#bgHaze)" opacity="0.4" />
        </svg>
        <div style={{
          position: 'absolute', left: 20, bottom: 20,
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
          color: 'var(--dbv-paper)', letterSpacing: '0.04em',
        }}>The Courtyard, autumn light</div>
      </div>
      <div style={{
        position: 'absolute', left: -28, top: 32,
        width: 104, height: 104, borderRadius: '50%',
        background: 'var(--dbv-cream)',
        border: '1.5px solid var(--dbv-forest)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', boxShadow: '0 12px 32px rgba(28,56,41,.18)',
        transform: 'rotate(-6deg)',
      }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 10, color: 'var(--dbv-sage)', letterSpacing: '0.10em' }}>RICS winner</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dbv-forest)', fontWeight: 600, lineHeight: 1 }}>2011</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, color: 'var(--dbv-forest)', letterSpacing: '0.14em', marginTop: 2 }}>BEST · WEST MIDS</span>
      </div>
    </div>
  );
}

// ---------- AWARDS STRIP ----------
const AWARDS_FULL = [
  { year: '2008', body: 'Business Contribution to Regeneration', tag: 'South Staffordshire — Winner' },
  { year: '2010', body: 'Regeneration Awards South Staffordshire', tag: 'Second Place' },
  { year: '2010', body: 'Regeneration Project of the Decade', tag: 'RegenWM — Second Place' },
  { year: '2011', body: 'RICS Best Regeneration Project', tag: 'West Midlands — Winner' },
  { year: '2011', body: 'RICS Best Regeneration Project', tag: 'UK — Shortlisted Finalist' },
  { year: '2012', body: 'Royal Patronage', tag: 'Visit by HM\'s Lord Lieutenant' },
];

function AwardsStrip() {
  return (
    <section style={{ background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', padding: '28px 0', borderTop: '1px solid rgba(245,240,232,.10)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'space-between' }}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--dbv-stone)',
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
          }}>
            <Icon name="award" size={14} stroke={1.4} />
            <span>15 years on record</span>
          </div>
          <div style={{
            flex: 1, display: 'flex', gap: 32, overflowX: 'auto',
            padding: '0 8px', justifyContent: 'space-between',
          }}>
            {AWARDS_FULL.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dbv-stone)', fontWeight: 600 }}>{a.year}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-cream)', lineHeight: 1.2 }}>{a.body}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,.60)', marginTop: 2 }}>{a.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- KEY STATS ROW ----------
function KeyStats() {
  const stats = [
    { number: '25', unit: 'acres', label: 'Of Staffordshire countryside' },
    { number: '60,000+', unit: 'sq ft', label: 'Hi-tech office accommodation' },
    { number: '8', unit: 'buildings', label: 'Heritage structures from the 1800s' },
    { number: '3', unit: 'months+', label: 'Flexible term length' },
  ];
  return (
    <section style={{ padding: '80px 0', background: 'var(--dbv-paper)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0,
          border: '1px solid var(--color-border)', borderRadius: 6, overflow: 'hidden',
          background: 'var(--dbv-paper)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              borderRight: i < 3 ? '1px solid var(--color-border)' : 0,
              textAlign: 'left',
            }}>
              <div style={{ display: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 56, color: 'var(--dbv-forest)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.number}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-mist)', marginLeft: 6 }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: 14 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- OFFICE OPTIONS (3 cards) ----------
const OFFICE_TYPES = [
  { id: 'serviced', name: 'Serviced offices', eyebrow: 'Move-in ready',
    desc: 'Fully inclusive packages — reception, broadband, PBX phones, meeting rooms — all included on a single monthly invoice. Flexible terms from three months.',
    bullets: ['All IT & utilities included', 'Reception & meeting rooms', 'From three-month terms'],
    cta: 'Explore Serviced', to: 'spaces',
    tone: ['#6E8C68', '#1C3829'] },
  { id: 'managed', name: 'Managed offices', eyebrow: 'Tailored',
    desc: 'A bespoke workspace solution tailored to your specifications. From a few desks to a private restored barn — three months to ten years, one to forty people.',
    bullets: ['Tailored to your spec', '3 months — 10 years', '1 — 40 people'],
    cta: 'Explore Managed', to: 'spaces',
    tone: ['#C8B89A', '#7A5E3E'] },
  { id: 'virtual', name: 'Virtual office', eyebrow: 'Address only',
    desc: 'A prestigious Staffordshire business address — without the physical space. Add client-facing facilities on demand, or our professional phone answering service.',
    bullets: ['Virtual Client (on-site facilities)', 'Virtual Phone (answering)', 'Mail handling included'],
    cta: 'Explore Virtual', to: 'spaces',
    tone: ['#9A8862', '#3B2D20'] },
];

function OfficeOptions() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Our spaces"
          italic="three ways in"
          title="Find the right kind of office."
          subtitle="Plug-in serviced, larger managed suites, or a virtual address. Whichever you choose, you get the village — reception, fibre, security, and 25 acres of countryside."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {OFFICE_TYPES.map((o, i) => <OfficeCard key={o.id} office={o} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function OfficeCard({ office, index }) {
  const [hover, setHover] = React.useState(false);
  const { navigate } = useRouter();
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(office.to)}
      style={{
        background: 'var(--dbv-paper)', borderRadius: 6, overflow: 'hidden',
        boxShadow: hover ? '0 22px 48px rgba(28,56,41,.18)' : '0 6px 18px rgba(28,56,41,.10)',
        transition: 'box-shadow .25s var(--ease-out), transform .25s var(--ease-out)',
        transform: hover ? 'translateY(-4px)' : 'none',
        cursor: 'pointer', display: 'flex', flexDirection: 'column',
      }}>
      <div className="grain" style={{
        height: 220, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(160deg, ${office.tone[0]} 0%, ${office.tone[1]} 100%)`,
      }}>
        <span style={{
          position: 'absolute', top: 16, left: 16,
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          background: 'var(--dbv-cream)', color: 'var(--dbv-forest)',
          padding: '5px 11px', borderRadius: 2,
        }}>{office.eyebrow}</span>
        <span style={{
          position: 'absolute', top: 16, right: 16,
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 13, color: 'var(--dbv-cream)', opacity: 0.85,
        }}>{String(index + 1).padStart(2, '0')} / 03</span>
        <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '75%' }}>
          <g fill="rgba(0,0,0,.30)">
            <ellipse cx="40" cy="190" rx="40" ry="50" />
            <ellipse cx="370" cy="180" rx="50" ry="60" />
          </g>
          <g fill="rgba(255,255,255,.12)">
            {office.id === 'serviced' && (
              <>
                <rect x="100" y="100" width="200" height="120" />
                <polygon points="90,100 200,50 310,100" />
                <rect x="190" y="160" width="20" height="60" fill="rgba(0,0,0,.4)" />
              </>
            )}
            {office.id === 'managed' && (
              <>
                <rect x="60" y="110" width="140" height="110" />
                <polygon points="50,110 130,60 210,110" />
                <rect x="220" y="130" width="120" height="90" />
                <polygon points="210,130 280,80 350,130" />
                <rect x="265" y="180" width="20" height="40" fill="rgba(0,0,0,.4)" />
              </>
            )}
            {office.id === 'virtual' && (
              <>
                <rect x="120" y="120" width="160" height="100" />
                <polygon points="110,120 200,70 290,120" />
                <rect x="180" y="170" width="20" height="50" fill="rgba(0,0,0,.4)" />
                <circle cx="200" cy="95" r="20" fill="rgba(245,219,160,.6)" />
              </>
            )}
          </g>
        </svg>
      </div>
      <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 28, lineHeight: 1.05, color: 'var(--dbv-forest)', fontWeight: 500 }}>{office.name}</h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--dbv-graphite)' }}>{office.desc}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {office.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-forest)' }}>
              <span style={{ color: 'var(--dbv-sage)', marginTop: 1, flexShrink: 0 }}><Icon name="check" size={14} stroke={2} /></span>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--color-rule)' }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: 'var(--dbv-forest)', display: 'inline-flex', alignItems: 'center', gap: 6,
            transform: hover ? 'translateX(4px)' : 'none', transition: 'transform .25s',
          }}>{office.cta} <Icon name="arrowRight" size={12} stroke={2} /></span>
        </div>
      </div>
    </article>
  );
}

window.HomeHero = HomeHero;
window.AwardsStrip = AwardsStrip;
window.KeyStats = KeyStats;
window.OfficeOptions = OfficeOptions;
