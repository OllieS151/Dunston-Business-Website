// Location page — illustrated map, stats, travel options, geographic coverage.

const GEO_TOWNS = [
  { name: 'Stafford', miles: 6 },
  { name: 'Cannock', miles: 8 },
  { name: 'Penkridge', miles: 5 },
  { name: 'Rugeley', miles: 9 },
  { name: 'Lichfield', miles: 16 },
  { name: 'Wolverhampton', miles: 17 },
  { name: 'Walsall', miles: 19 },
  { name: 'Sutton Coldfield', miles: 22 },
  { name: 'Birmingham', miles: 28 },
  { name: 'Tamworth', miles: 24 },
  { name: 'Burton upon Trent', miles: 25 },
  { name: 'Stoke-on-Trent', miles: 22 },
  { name: 'Uttoxeter', miles: 19 },
  { name: 'Telford', miles: 28 },
  { name: 'Bridgnorth', miles: 30 },
  { name: 'Dudley', miles: 24 },
  { name: 'West Bromwich', miles: 24 },
  { name: 'Oldbury', miles: 26 },
  { name: 'Newport', miles: 18 },
  { name: 'Market Drayton', miles: 22 },
  { name: 'Cheadle', miles: 24 },
  { name: 'Donnington', miles: 23 },
];

// ---------- KEY LOCATION FACTS ----------
function LocationFactsStrip() {
  const facts = [
    { number: 'J13', unit: 'M6', label: 'Direct motorway access' },
    { number: 'M6', unit: 'Toll', label: 'Within striking distance' },
    { number: '25', unit: 'acres', label: 'Countryside site' },
    { number: 'ST18', unit: '9FJ', label: 'Staffordshire postcode' },
  ];
  return (
    <section style={{ padding: '80px 0', background: 'var(--dbv-paper)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          border: '1px solid var(--color-border)', borderRadius: 6, overflow: 'hidden',
          background: 'var(--dbv-paper)',
        }}>
          {facts.map((f, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              borderRight: i < 3 ? '1px solid var(--color-border)' : 0,
            }}>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 56, color: 'var(--dbv-forest)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>{f.number}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-mist)', marginLeft: 6 }}>{f.unit}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-graphite)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: 14 }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PRIME LOCATION — geographic coverage ----------
function PrimeLocationSection() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <span className="eyebrow">Prime location</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '14px 0 22px' }}>
            At the <span style={{ fontStyle: 'italic' }}>crossroads</span> of the Midlands.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 22px' }}>
            DBV is ideally positioned for businesses serving the wider Midlands region. The site provides easy access to major motorways and sits within commuting distance of every major town between Birmingham and Stoke-on-Trent.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.4, color: 'var(--dbv-sage)', margin: '0 0 28px' }}>
            22 Midlands towns within 30 miles.
          </p>
          <a href="#" className="link-italic">Full geographic coverage →</a>
        </div>
        <div>
          {/* Coverage list */}
          <div style={{
            background: 'var(--dbv-paper)', borderRadius: 6,
            border: '1px solid var(--color-border)',
            padding: '24px 28px',
            boxShadow: '0 6px 18px rgba(28,56,41,.06)',
          }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', marginBottom: 18 }}>
              Within reach
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px 28px' }}>
              {GEO_TOWNS.map(t => (
                <div key={t.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  paddingBottom: 10, borderBottom: '1px solid var(--color-rule)',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--dbv-forest)', fontWeight: 500 }}>{t.name}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', letterSpacing: '0.05em' }}>{t.miles} mi</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- TRAVEL OPTIONS ----------
function TravelOptions() {
  const modes = [
    { icon: 'car',   title: 'By car',     primary: 'M6 J13 · 5 min', detail: 'Take the A449 north from Stafford or south from Stone. Free on-site parking for tenants and visitors. EV charging in the main car park.' },
    { icon: 'train', title: 'By train',   primary: 'Stafford · 75 min to Euston', detail: 'Stafford railway station is six miles south. Direct services to London Euston (75 min), Manchester (45 min), and Birmingham New Street (25 min). A taxi rank waits outside.' },
    { icon: 'phone', title: 'By air',     primary: 'Birmingham Int\'l · 40 min',  detail: 'Birmingham International Airport is 28 miles south-east. East Midlands and Manchester also within an hour. Long-stay car parking arrangements available through reception.' },
    { icon: 'tree',  title: 'By bicycle', primary: 'Stafford–Cannock Chase cycleway', detail: 'A dedicated cycle path runs from Stafford to the edge of Cannock Chase, passing DBV. Secure bike storage and a tenant shower in Barn 4.' },
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Getting here"
          italic="by every reasonable means"
          title="How to reach the village."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0, background: 'var(--dbv-paper)', border: '1px solid var(--color-border)', borderRight: 0, borderBottom: 0, borderRadius: 6, overflow: 'hidden' }}>
          {modes.map((m, i) => (
            <div key={i} style={{
              padding: '32px 36px',
              borderRight: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex', gap: 22, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon name={m.icon} size={20} stroke={1.4} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dbv-forest)', fontWeight: 500 }}>{m.title}</h3>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--dbv-sage)', marginTop: 4 }}>{m.primary}</div>
                <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--dbv-graphite)' }}>{m.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- MAP EMBED ----------
function MapEmbedSection() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Find us</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-cream)', margin: '14px 0 18px' }}>
              Woodland Lodge,<br/><span style={{ fontStyle: 'italic' }}>Dunston, ST18 9FJ.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, color: 'rgba(245,240,232,.85)', margin: '0 0 24px' }}>
              The main gate is on the A449 — look for the stone sign and the avenue of oaks.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="https://maps.google.co.uk/maps?q=Dunston+Business+Village+Ltd" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                <Icon name="mapPin" size={14} /> Get Directions
              </a>
              <a href="https://maps.google.co.uk/maps?q=Dunston+Business+Village+Ltd" target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">
                Open Street View Tour
              </a>
            </div>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(245,240,232,.10)', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, color: 'rgba(245,240,232,.80)' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600, marginBottom: 8 }}>Address</div>
              Woodland Lodge<br/>Dunston Business Village<br/>Dunston, Staffordshire, ST18 9FJ
            </div>
          </div>
          {/* Map placeholder */}
          <div style={{
            position: 'relative', aspectRatio: '4/3',
            borderRadius: 6, overflow: 'hidden',
            border: '1px solid rgba(245,240,232,.14)',
            boxShadow: '0 24px 56px rgba(0,0,0,.30)',
            background: 'var(--dbv-paper)',
          }}>
            <svg viewBox="0 0 600 450" style={{ width: '100%', height: '100%' }}>
              <defs>
                <pattern id="locgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(28,56,41,.07)" strokeWidth="0.6"/>
                </pattern>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1C3829" stopOpacity="0.16"/>
                  <stop offset="100%" stopColor="#1C3829" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <rect width="600" height="450" fill="var(--dbv-cream)"/>
              <rect width="600" height="450" fill="url(#locgrid)"/>
              {/* Cannock chase woodland */}
              <g fill="#7A9B76" opacity="0.32">
                <ellipse cx="100" cy="100" rx="90" ry="60"/>
                <ellipse cx="220" cy="60" rx="60" ry="40"/>
                <ellipse cx="60" cy="200" rx="50" ry="40"/>
                <ellipse cx="500" cy="380" rx="80" ry="50"/>
              </g>
              {/* major roads */}
              <path d="M 460 0 L 460 450" fill="none" stroke="#A24B3A" strokeWidth="10" opacity="0.55"/>
              <text x="468" y="40" fontFamily="var(--font-sans)" fontSize="14" fill="#A24B3A" fontWeight="700">M6</text>
              <text x="468" y="58" fontFamily="var(--font-sans)" fontSize="9" fill="#A24B3A" letterSpacing="2">J13 ↑</text>
              <path d="M 0 320 Q 200 290 300 280 T 600 220" fill="none" stroke="#1C3829" strokeWidth="3" opacity="0.6"/>
              <path d="M 0 320 Q 200 290 300 280 T 600 220" fill="none" stroke="var(--dbv-cream)" strokeWidth="1" strokeDasharray="4 6"/>
              <text x="100" y="312" fontFamily="var(--font-sans)" fontSize="10" fill="#1C3829" fontWeight="600">A449</text>
              {/* river */}
              <path d="M 0 380 Q 200 400 400 370 T 600 360" fill="none" stroke="#3E6E8A" strokeWidth="2" opacity="0.4"/>
              {/* pin halo */}
              <circle cx="280" cy="240" r="80" fill="url(#halo)"/>
              {/* DBV pin */}
              <g transform="translate(280,240)">
                <circle r="36" fill="var(--dbv-forest)"/>
                <circle r="36" fill="none" stroke="var(--dbv-stone)" strokeWidth="2"/>
                <text textAnchor="middle" y="-7" fontFamily="var(--font-sans)" fontSize="9" fontWeight="700" fill="var(--dbv-stone)" letterSpacing="0.16em">DBV</text>
                <text textAnchor="middle" y="11" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="14" fill="var(--dbv-cream)">ST18 9FJ</text>
              </g>
              {/* Stafford label */}
              <g transform="translate(160,400)">
                <circle r="5" fill="#1C3829"/>
                <text x="12" y="4" fontFamily="var(--font-sans)" fontSize="11" fill="#1C3829" fontWeight="600">Stafford · 6 mi</text>
              </g>
              <g transform="translate(380,140)">
                <circle r="5" fill="#1C3829"/>
                <text x="12" y="4" fontFamily="var(--font-sans)" fontSize="11" fill="#1C3829" fontWeight="600">Stone · 4 mi</text>
              </g>
              <g transform="translate(450,400)">
                <circle r="5" fill="#1C3829"/>
                <text x="12" y="4" fontFamily="var(--font-sans)" fontSize="11" fill="#1C3829" fontWeight="600">Penkridge · 5 mi</text>
              </g>
              <text x="20" y="30" fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" letterSpacing="0.20em" fill="#7A9B76">CANNOCK CHASE</text>
              {/* compass */}
              <g transform="translate(560,420)">
                <circle r="22" fill="var(--dbv-cream)" stroke="#1C3829" strokeWidth="1"/>
                <path d="M 0 -16 L 4 0 L 0 4 L -4 0 Z" fill="#1C3829"/>
                <text textAnchor="middle" y="-20" fontFamily="var(--font-sans)" fontSize="8" fill="#1C3829" fontWeight="700">N</text>
              </g>
              {/* scale */}
              <g transform="translate(30,420)">
                <line x1="0" y1="0" x2="60" y2="0" stroke="#1C3829" strokeWidth="2"/>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="#1C3829" strokeWidth="2"/>
                <line x1="60" y1="-4" x2="60" y2="4" stroke="#1C3829" strokeWidth="2"/>
                <text x="30" y="18" fontFamily="var(--font-sans)" fontSize="10" textAnchor="middle" fill="#1C3829">2 miles</text>
              </g>
            </svg>
            <div style={{
              position: 'absolute', top: 16, left: 16,
              fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              background: 'var(--dbv-cream)', color: 'var(--dbv-forest)',
              padding: '5px 11px', borderRadius: 2,
            }}>Approximate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SCENIC + LOCAL KNOWLEDGE ----------
function ScenicAndLocal() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Scenic Surrounds */}
        <article style={{
          background: 'var(--dbv-paper)', borderRadius: 6, overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(28,56,41,.08)',
        }}>
          <div className="grain" style={{
            height: 260, position: 'relative',
            background: 'linear-gradient(170deg, #A5BCA0 0%, #1C3829 100%)',
          }}>
            <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <g fill="rgba(0,0,0,.45)">
                <path d="M 0 200 Q 80 140 160 180 T 320 160 T 400 180 L 400 260 L 0 260 Z"/>
              </g>
              <g fill="rgba(0,0,0,.25)">
                <path d="M 0 230 Q 100 200 200 220 T 400 210 L 400 260 L 0 260 Z"/>
              </g>
              <g fill="#1C3829" opacity="0.45">
                <ellipse cx="60" cy="200" rx="20" ry="30"/>
                <ellipse cx="100" cy="195" rx="16" ry="22"/>
                <ellipse cx="320" cy="200" rx="18" ry="26"/>
                <ellipse cx="350" cy="210" rx="14" ry="20"/>
              </g>
              {/* sun */}
              <circle cx="320" cy="80" r="30" fill="#F5DBA0" opacity="0.45"/>
            </svg>
          </div>
          <div style={{ padding: '28px 32px 32px' }}>
            <span className="eyebrow">Surrounds</span>
            <h3 style={{ margin: '10px 0 12px', fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--dbv-forest)', fontWeight: 500 }}>Scenic surrounds.</h3>
            <p style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)' }}>
              Work doesn't have to mean concrete and car parks. DBV's featured courtyards and views stretching over Cannock Chase offer a genuinely inspiring environment — and a 2-minute walk takes you onto the chase itself.
            </p>
            <a href="#" className="link-italic">More on the surrounds →</a>
          </div>
        </article>
        {/* Local Knowledge */}
        <article style={{
          background: 'var(--dbv-paper)', borderRadius: 6, overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(28,56,41,.08)',
        }}>
          <div className="grain" style={{
            height: 260, position: 'relative',
            background: 'linear-gradient(170deg, #C8B89A 0%, #7A5E3E 100%)',
          }}>
            <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {/* village street */}
              <g fill="rgba(0,0,0,.4)">
                <rect x="40" y="150" width="80" height="90"/>
                <polygon points="35,150 80,110 125,150"/>
                <rect x="140" y="170" width="60" height="70"/>
                <polygon points="135,170 170,140 205,170"/>
                <rect x="220" y="160" width="90" height="80"/>
                <polygon points="215,160 265,120 315,160"/>
                <rect x="330" y="170" width="60" height="70"/>
              </g>
              <g fill="rgba(245,219,160,.8)">
                <rect x="60" y="170" width="14" height="18"/>
                <rect x="85" y="170" width="14" height="18"/>
                <rect x="245" y="180" width="14" height="18"/>
                <rect x="275" y="180" width="14" height="18"/>
              </g>
            </svg>
          </div>
          <div style={{ padding: '28px 32px 32px' }}>
            <span className="eyebrow">Local knowledge</span>
            <h3 style={{ margin: '10px 0 12px', fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--dbv-forest)', fontWeight: 500 }}>Local knowledge.</h3>
            <p style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)' }}>
              Our team knows the local area inside out. From restaurants and accommodation to business services and networking — we're here to help you settle in. Ask reception for a tenant orientation pack.
            </p>
            <a href="#" className="link-italic">Ask reception →</a>
          </div>
        </article>
      </div>
    </section>
  );
}

function LocationPage() {
  return (
    <div data-screen-label="Location">
      <PageHero
        eyebrow="Location"
        title="A prime location in the heart of the Midlands."
        subtitle="Dunston Business Village sits at the crossroads of the UK, just off Junction 13 of the M6, within striking distance of the M6 Toll. A relaxing countryside setting with outstanding transport connections."
      />
      <LocationFactsStrip />
      <PrimeLocationSection />
      <TravelOptions />
      <MapEmbedSection />
      <ScenicAndLocal />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.location = LocationPage;
