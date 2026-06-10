// Homepage — second half: Why DBV, directory teaser, testimonials, news, CTA banner.

// ---------- WHY DBV — 6 tile grid on forest ----------
const WHY_TILES = [
  { icon: 'building', title: 'Space',      eyebrow: '200–10,000 sq ft',  body: 'From a single serviced desk to a 10,000 sq ft restored barn. From £12.50 /sq ft, fitted to your specification.' },
  { icon: 'trees',    title: 'Location',   eyebrow: '5 min · M6 J13',    body: 'A countryside setting on 25 acres of Staffordshire — but four miles from junction 13 of the M6 and the M6 Toll.' },
  { icon: 'shield',   title: 'Security',   eyebrow: 'Always covered',    body: 'Site-wide CCTV, WiFi door-access cards across every building, manned reception, and 24/7 monitored alarms.' },
  { icon: 'leaf',     title: 'Comfort',    eyebrow: 'Estate facilities', body: 'Full air-conditioning, kitchen facilities in every building, disabled access throughout, and ground-source heating.' },
  { icon: 'wifi',     title: 'Technology', eyebrow: 'Plug & work',       body: 'Broadband internet, PBX phones, VPN back to head office, leased lines on request, full IT support from the DBV helpdesk.' },
  { icon: 'user',     title: 'Community',  eyebrow: 'A real village',    body: 'On-site childcare at SmartStart 300 yards away, members\' Discount Club, business networking and a working courtyard restaurant.' },
];

function WhyDBV() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          dark
          eyebrow="Why DBV"
          italic="bring a laptop, we'll do the rest"
          title="Six reasons businesses move here — and stay."
          subtitle="Every space includes the village. From fibre internet and PBX phones to a manned reception and a restaurant in the courtyard."
        />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          border: '1px solid rgba(245,240,232,.10)',
          borderRight: 0, borderBottom: 0, borderRadius: 4, overflow: 'hidden',
        }}>
          {WHY_TILES.map(t => (
            <div key={t.title} style={{
              padding: '36px 32px',
              borderRight: '1px solid rgba(245,240,232,.10)',
              borderBottom: '1px solid rgba(245,240,232,.10)',
              display: 'flex', flexDirection: 'column', gap: 14,
              transition: 'background .25s var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,240,232,.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                border: '1px solid var(--dbv-stone)', color: 'var(--dbv-stone)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={t.icon} size={22} stroke={1.4} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600 }}>{t.eyebrow}</div>
                <h3 style={{ margin: '6px 0 0', fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--dbv-cream)', fontWeight: 500, lineHeight: 1.1 }}>{t.title}</h3>
              </div>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(245,240,232,.78)' }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- DIRECTORY TEASER ----------
function DirectoryTeaser() {
  const { navigate } = useRouter();
  const [query, setQuery] = React.useState('');
  const SECTORS = ['All', 'Financial', 'Construction', 'Health & Beauty', 'Technology', 'Education', 'Media', 'Property'];
  const [active, setActive] = React.useState('All');
  const onSubmit = (e) => {
    e.preventDefault();
    window.HEADER_SEARCH_QUERY = query.trim();
    if (active !== 'All') window.HEADER_SEARCH_CATEGORY = active;
    navigate('directory');
  };
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">The community</span>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-0.01em',
            color: 'var(--dbv-forest)', margin: '14px 0 20px',
          }}>
            Find a business at DBV.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 28px', maxWidth: 480 }}>
            Ninety-plus businesses — financial planners, software houses, construction firms, fostering agencies, a fire-safety consultancy and a working restaurant. Browse by sector or search the directory.
          </p>
          <form onSubmit={onSubmit} style={{
            background: 'var(--dbv-paper)', border: '1px solid var(--color-border)',
            borderRadius: 4, padding: 6, display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 4px 12px rgba(28,56,41,.08)', marginBottom: 18,
          }}>
            <span style={{ color: 'var(--dbv-sage)', paddingLeft: 12, display: 'inline-flex' }}>
              <Icon name="search" size={18} />
            </span>
            <input
              placeholder="Search business name, sector, or keyword…"
              value={query} onChange={e => setQuery(e.target.value)}
              style={{ flex: 1, border: 0, outline: 0, background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 15, padding: '12px 4px', color: 'var(--dbv-charcoal)' }}
            />
            <button type="submit" className="btn btn--primary" style={{ padding: '12px 22px' }}>Search</button>
          </form>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {SECTORS.map(s => (
              <button key={s} onClick={() => setActive(s)}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
                  letterSpacing: '0.04em',
                  padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                  background: active === s ? 'var(--dbv-forest)' : 'transparent',
                  color: active === s ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
                  border: active === s ? '1px solid var(--dbv-forest)' : '1px solid var(--color-border)',
                  transition: 'all .15s',
                }}>{s}</button>
            ))}
          </div>
          {/* Fraud warning note */}
          <div style={{
            background: 'rgba(180,138,62,.10)', border: '1px solid rgba(180,138,62,.30)',
            padding: '14px 18px', borderRadius: 4, display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <span style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: 2 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.86a2 2 0 0 1 3.4 0l7.7 12.79a2 2 0 0 1-1.7 3H4.3a2 2 0 0 1-1.7-3Z"/></svg>
            </span>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5, color: 'var(--dbv-charcoal)' }}>
              <strong style={{ color: 'var(--dbv-forest)' }}>Fraud notice:</strong> some businesses may falsely claim a DBV address. Verify any tenant through this official directory.
              {' '}<a href="#" style={{ color: 'var(--color-warning)', borderBottom: '1px solid currentColor' }}>View fraud warning →</a>
            </div>
          </div>
        </div>
        {/* Visual side — illustrated directory card stack */}
        <DirectoryStack />
      </div>
    </section>
  );
}

function DirectoryStack() {
  const cards = [
    { name: 'Lonsdale Wealth Management', loc: 'Lodge 12b · Butterfly House', tag: 'Financial' },
    { name: 'Target Fire Systems',        loc: 'Log Cabin 3',                tag: 'Fire safety' },
    { name: 'The Courtyard Restaurant',   loc: 'Between Barn 4 & 7',         tag: 'Hospitality' },
  ];
  return (
    <div style={{ position: 'relative', height: 460 }}>
      {cards.map((c, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: 30 + i * 76, left: 40 + i * 30, right: 0 - i * 10,
          background: 'var(--dbv-paper)',
          padding: '20px 24px', borderRadius: 6,
          border: '1px solid var(--color-border)',
          boxShadow: '0 14px 32px rgba(28,56,41,.14)',
          transform: `rotate(${(i - 1) * -1.5}deg)`,
          zIndex: cards.length - i,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
            <h4 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.1 }}>{c.name}</h4>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'var(--dbv-sage-soft)', color: 'var(--dbv-forest)',
              padding: '4px 8px', borderRadius: 2, flexShrink: 0,
            }}>{c.tag}</span>
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-mist)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="mapPin" size={12} /> {c.loc}
          </div>
          <div style={{ borderTop: '1px solid var(--color-rule)', marginTop: 14, paddingTop: 12, fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>
            View profile →
          </div>
        </div>
      ))}
      <div style={{
        position: 'absolute', bottom: 0, left: 60,
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--dbv-mist)',
      }}>… and 90+ more on the directory.</div>
    </div>
  );
}

// ---------- TESTIMONIALS ----------
const TESTIMONIALS = [
  {
    quote: "We've grown from a two-desk serviced unit into a leased suite over four years — and never had a single reason to move off the park.",
    name: 'Lisa Luck', role: 'Charterhouse Financial Planning', location: 'Log Cabin 2B',
  },
  {
    quote: "The reception team are the first impression our clients get of us. They've never let us down. That matters more than any amount of square footage.",
    name: 'Phil McGuinness', role: 'ATG Airports', location: 'Lodge 13A',
  },
  {
    quote: "Eight buildings, full fibre, a courtyard restaurant — and twenty-five minutes from the centre of Birmingham. We don't know what more we'd ask for.",
    name: 'Soloman Kidd-Smithers', role: 'KS Construction Group', location: 'Barn 7',
  },
];

function Testimonials() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          eyebrow="What tenants say"
          italic="in their own words"
          title="A small village. A long memory."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} style={{
              background: 'var(--dbv-paper)', margin: 0,
              padding: '36px 32px', borderRadius: 6,
              boxShadow: '0 6px 18px rgba(28,56,41,.08)',
              display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: -8, left: 24,
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: 84, lineHeight: 1, color: 'var(--dbv-stone)',
              }}>"</span>
              <blockquote style={{
                margin: '20px 0 24px', padding: 0,
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: 20, lineHeight: 1.4, color: 'var(--dbv-forest)',
              }}>{t.quote}</blockquote>
              <figcaption style={{
                marginTop: 'auto', paddingTop: 18,
                borderTop: '1px solid var(--color-rule)',
              }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-forest)', fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', marginTop: 2 }}>{t.role} · {t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- NEWS PREVIEW ----------
const NEWS_ITEMS = [
  { date: 'April 2026', cat: 'Site news',  title: 'Barn 4 first-floor refurbishment now complete', excerpt: 'The Office E suite — 1,200 sq ft on the first floor of Barn 4 — has been fully refurbished and is now available on managed terms.' },
  { date: 'March 2026', cat: 'Community',  title: 'Discount Club partners expanded for Q2', excerpt: 'Six new local providers have joined the members-only Discount Club: a print shop, two cafés, an MOT centre, and two physiotherapists.' },
  { date: 'Feb 2026',   cat: 'Awards',     title: 'Rural Business of the Year — shortlisted', excerpt: 'For the third consecutive year, DBV has been shortlisted at the Midlands Rural Business Awards. Result announced in May.' },
];

function NewsPreview() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-paper)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">Latest from the village</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '12px 0 0' }}>
              DBV news.
            </h2>
          </div>
          <PageLink to="community" className="link-italic">All news →</PageLink>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {NEWS_ITEMS.map((n, i) => (
            <PageLink key={i} to="community" style={{ display: 'block', textDecoration: 'none' }}>
              <article style={{
                background: 'var(--dbv-cream-warm)', borderRadius: 6, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'transform .25s, box-shadow .25s',
                boxShadow: '0 4px 12px rgba(28,56,41,.06)',
                height: '100%',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(28,56,41,.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(28,56,41,.06)'; }}>
                <div className="grain" style={{
                  height: 180,
                  background: `linear-gradient(160deg, ${['#7A9B76', '#C8B89A', '#6E8C68'][i]} 0%, ${['#1C3829', '#7A5E3E', '#2A4D38'][i]} 100%)`,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', top: 14, left: 14,
                    fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    background: 'var(--dbv-cream)', color: 'var(--dbv-forest)',
                    padding: '5px 10px', borderRadius: 2,
                  }}>{n.cat}</span>
                </div>
                <div style={{ padding: '24px 26px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>{n.date}</div>
                  <h3 style={{ margin: '8px 0 12px', fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.2, color: 'var(--dbv-forest)', fontWeight: 500 }}>{n.title}</h3>
                  <p style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--dbv-graphite)' }}>{n.excerpt}</p>
                  <span style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--dbv-forest)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Read more <Icon name="arrowRight" size={12} stroke={2} /></span>
                </div>
              </article>
            </PageLink>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA BANNER ----------
function HomeCtaBanner() {
  const { navigate } = useRouter();
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 16px, rgba(245,240,232,.04) 16px 17px)`,
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center', position: 'relative' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Make the move</span>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 500,
            fontSize: 64, lineHeight: 1.0, letterSpacing: '-0.018em',
            color: 'var(--dbv-cream)', margin: '14px 0 22px',
          }}>
            Ready to make the move?
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: 'rgba(245,240,232,.85)', margin: '0 0 0', maxWidth: 620 }}>
            Our service is what makes us stand out in a crowded market. Whatever your requirement, DBV has the resources to meet your need.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <button onClick={() => navigate('contact')} className="btn btn--secondary btn--lg" style={{ width: '100%', justifyContent: 'space-between' }}>
            Get in Touch <Icon name="arrowRight" size={14} stroke={2} />
          </button>
          <button onClick={() => navigate('location')} className="btn btn--ghost-light btn--lg" style={{ width: '100%', justifyContent: 'space-between' }}>
            Take a Virtual Tour <Icon name="arrowRight" size={14} stroke={2} />
          </button>
          <PageLink to="sitemap" style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17,
            color: 'var(--dbv-stone)', borderBottom: '1px solid var(--dbv-stone)',
            paddingBottom: 1, marginTop: 8,
          }}>Or explore the interactive site map →</PageLink>
        </div>
      </div>
    </section>
  );
}

window.WhyDBV = WhyDBV;
window.DirectoryTeaser = DirectoryTeaser;
window.Testimonials = Testimonials;
window.NewsPreview = NewsPreview;
window.HomeCtaBanner = HomeCtaBanner;
