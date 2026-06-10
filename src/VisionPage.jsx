// Vision & Regeneration page

function VisionHero() {
  return (
    <section style={{ background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', padding: '96px 0 104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 16px, rgba(245,240,232,.04) 16px 17px)`,
      }} />
      {/* corner ornament */}
      <div style={{
        position: 'absolute', right: -120, top: -120,
        width: 480, height: 480, borderRadius: '50%',
        border: '1px solid rgba(245,240,232,.10)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: -60, top: -60,
        width: 360, height: 360, borderRadius: '50%',
        border: '1px solid rgba(245,240,232,.10)', pointerEvents: 'none',
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Our vision</span>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 500,
          fontSize: 88, lineHeight: 0.98, letterSpacing: '-0.02em',
          color: 'var(--dbv-cream)', margin: '24px 0 28px',
          maxWidth: 1100,
        }}>
          Regenerating Staffordshire,<br/>
          <span style={{ fontStyle: 'italic' }}>one business</span> at a time.
        </h1>
        <p style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 24, lineHeight: 1.4, color: 'var(--dbv-stone)', margin: 0, maxWidth: 800,
        }}>
          From derelict country estate to thriving five-star business park — a fifteen-year project, on record.
        </p>
      </div>
    </section>
  );
}

// ---------- OUR VISION ----------
function OurVisionSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--dbv-cream)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">01 · Our vision</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.018em', color: 'var(--dbv-forest)', margin: '14px 0 24px' }}>
            Where you work <span style={{ fontStyle: 'italic' }}>matters.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 18px' }}>
            DBV was founded with a clear vision: to regenerate a historic site and create an outstanding business environment that attracts and supports companies across the Midlands.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: 0 }}>
            We believe that where you work matters — not just for productivity, but for the wellbeing of your team. A walk around the courtyards between meetings does something a strip-lit office park cannot.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <StoneFramed offset={24} aspect="5/4">
            <div className="grain" style={{
              position: 'absolute', inset: 0,
              background: `
                radial-gradient(120% 60% at 70% 110%, rgba(28,56,41,.85) 0%, transparent 60%),
                linear-gradient(170deg, #A5BCA0 0%, #1C3829 70%)`,
            }}>
              <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <g fill="#1C3829" opacity="0.55">
                  <ellipse cx="50" cy="220" rx="44" ry="60"/>
                  <ellipse cx="360" cy="230" rx="50" ry="65"/>
                </g>
                <path d="M 0 250 Q 100 220 200 230 T 400 220 L 400 320 L 0 320 Z" fill="rgba(0,0,0,.5)"/>
                <path d="M 0 280 Q 150 260 250 270 T 400 260 L 400 320 L 0 320 Z" fill="rgba(0,0,0,.35)"/>
                <g>
                  <rect x="140" y="150" width="120" height="100" fill="#6F5840"/>
                  <polygon points="130,150 200,100 270,150" fill="#3B2D20"/>
                  <rect x="195" y="200" width="14" height="50" fill="#1C3829"/>
                  <rect x="155" y="170" width="16" height="22" fill="#F5DBA0" opacity="0.85"/>
                  <rect x="225" y="170" width="16" height="22" fill="#F5DBA0" opacity="0.85"/>
                </g>
                <circle cx="80" cy="60" r="32" fill="#F5DBA0" opacity="0.45"/>
              </svg>
            </div>
          </StoneFramed>
        </div>
      </div>
    </section>
  );
}

// ---------- REGENERATION STORY ----------
function RegenerationStorySection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--dbv-paper)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, alignItems: 'start' }}>
        <div>
          <span className="eyebrow">02 · The story</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.018em', color: 'var(--dbv-forest)', margin: '14px 0 24px' }}>
            From derelict to <span style={{ fontStyle: 'italic' }}>five-star.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 18px' }}>
            The site's transformation from derelict historic estate to thriving five-star business park is a story of ambition and community. Eight 1800s buildings were brought back to working condition over a multi-year programme of careful, period-correct restoration work.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 30px' }}>
            DBV won second place in the "Regeneration Project of the Decade 2000–2010" awarded by RegenWM, and took the top RICS prize for Best Regeneration Project in the West Midlands in 2011.
          </p>
          <blockquote style={{
            margin: 0, padding: '24px 28px', borderLeft: '3px solid var(--dbv-stone)',
            background: 'var(--dbv-cream-warm)', borderRadius: 4,
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45,
            color: 'var(--dbv-forest)',
          }}>
            "Restoration, not redevelopment. We didn't tear down the stone — we asked what it could still do for us, and gave it the chance to prove it."
            <footer style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dbv-sage)', marginTop: 18, fontWeight: 600 }}>
              — The founding principle
            </footer>
          </blockquote>
        </div>
        <div style={{
          background: 'var(--dbv-cream-warm)', borderRadius: 6,
          padding: '32px 28px', border: '1px solid var(--color-border)',
        }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>The numbers</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 18 }}>
            {[
              { number: '25', unit: 'acres', label: 'Brought back to active use' },
              { number: '8', unit: 'buildings', label: 'Restored, not rebuilt' },
              { number: '60,000+', unit: 'sq ft', label: 'Of new office accommodation' },
              { number: '4', unit: 'awards', label: 'In the first four years' },
              { number: '90+', unit: 'businesses', label: 'Calling DBV home today' },
              { number: '450+', unit: 'jobs', label: 'Created or relocated to the site' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'baseline', gap: 16,
                paddingBottom: 16, borderBottom: i === 5 ? 0 : '1px solid var(--color-rule)',
              }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dbv-forest)', fontWeight: 500 }}>{s.number}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', marginLeft: 4 }}>{s.unit}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-graphite)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- REGENERATION TEAM + EU CO-FINANCING ----------
function RegenTeamSection() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container" style={{
        background: 'var(--dbv-paper)', borderRadius: 6,
        padding: '56px 64px',
        border: '1px solid var(--color-border)',
        boxShadow: '0 6px 18px rgba(28,56,41,.06)',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <span className="eyebrow">03 · Partnership</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '14px 0 18px' }}>
            The Regeneration Team.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 16px' }}>
            DBV works in close partnership with the South Staffordshire Regeneration Team. Together we've contributed to a series of district-wide regeneration projects — and we credit them as the catalyst for our own work here at the village.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 22px' }}>
            Co-financed in part by the <strong>Connecting Europe Facility</strong> of the European Union. The CEF grant supported the fibre and infrastructure upgrade phase of the development.
          </p>
          <a href="#" className="link-italic">Read more about the team →</a>
        </div>
        {/* EU + Regen badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{
            background: 'var(--dbv-cream)', borderRadius: 4, padding: '22px 26px',
            border: '1px solid var(--color-border)',
            display: 'flex', gap: 18, alignItems: 'center',
          }}>
            {/* EU flag-style logo */}
            <div style={{
              width: 90, height: 60, borderRadius: 2,
              background: '#003399', position: 'relative', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="58" height="38" viewBox="-40 -25 80 50">
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 - 90) * Math.PI / 180;
                  const x = Math.cos(angle) * 20;
                  const y = Math.sin(angle) * 20;
                  return <text key={i} x={x} y={y + 2} fontSize="6" fill="#FFCC00" textAnchor="middle" fontWeight="900">★</text>;
                })}
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Co-financed by</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--dbv-forest)', fontWeight: 500, marginTop: 2 }}>European Union</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-mist)' }}>Connecting Europe Facility</div>
            </div>
          </div>
          <div style={{
            background: 'var(--dbv-cream)', borderRadius: 4, padding: '22px 26px',
            border: '1px solid var(--color-border)',
            display: 'flex', gap: 18, alignItems: 'center',
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name="leaf" size={28} stroke={1.4} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>In partnership with</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--dbv-forest)', fontWeight: 500, marginTop: 2 }}>South Staffordshire</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-mist)' }}>Regeneration Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- AWARDS AS EVIDENCE ----------
const AWARDS_HERO = [
  { year: '2008', title: 'Business Contribution to Regeneration', tag: 'South Staffordshire · Winner' },
  { year: '2010', title: 'Regeneration Project of the Decade 2000–2010', tag: 'RegenWM · Runner-up' },
  { year: '2011', title: 'RICS Best Regeneration Project', tag: 'West Midlands · Winner' },
  { year: '2011', title: 'RICS Best Regeneration Project', tag: 'UK · Shortlisted Finalist' },
  { year: '2012', title: 'Royal Patronage', tag: "Visit by HM's Lord Lieutenant" },
];

function AwardsAsEvidence() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>04 · Awards as evidence</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.018em', color: 'var(--dbv-cream)', margin: '14px 0 0' }}>
            On record, <span style={{ fontStyle: 'italic' }}>five years running.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {AWARDS_HERO.map((a, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '180px 1fr 280px', gap: 32, alignItems: 'baseline',
              padding: '36px 0',
              borderTop: i === 0 ? '1px solid rgba(245,240,232,.20)' : 'none',
              borderBottom: '1px solid rgba(245,240,232,.20)',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 96, lineHeight: 1, color: 'var(--dbv-stone)', fontWeight: 500, letterSpacing: '-0.02em' }}>{a.year}</div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 32, lineHeight: 1.15, color: 'var(--dbv-cream)', fontWeight: 500 }}>{a.title}</h3>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'rgba(245,240,232,.7)', textAlign: 'right' }}>{a.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- COMMUNITY IMPACT ----------
function CommunityImpactSection() {
  const items = [
    { number: '450+', label: 'Jobs created or relocated to the site since 2008' },
    { number: '90+',  label: 'Businesses now calling DBV home' },
    { number: '26',   label: 'Local providers in the Discount Club' },
    { number: '£M',   label: 'Annual gross spend within a 10-mile radius' },
  ];
  return (
    <section style={{ padding: '120px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <span className="eyebrow">05 · Impact</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 52, lineHeight: 1.02, color: 'var(--dbv-forest)', margin: '14px 0 16px' }}>
            Our community impact.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: 0 }}>
            Job creation, local business support, the Discount Club, the DBV Forum, and engagement with the wider Staffordshire community. The numbers come second to the relationships — but the numbers tell the same story.
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0,
          background: 'var(--dbv-paper)', border: '1px solid var(--color-border)',
          borderRadius: 6, overflow: 'hidden',
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              borderRight: i < 3 ? '1px solid var(--color-border)' : 0,
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 500, color: 'var(--dbv-forest)', letterSpacing: '-0.02em', lineHeight: 1 }}>{it.number}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-graphite)', lineHeight: 1.55, marginTop: 14 }}>{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ISO CERT ----------
function IsoSection() {
  return (
    <section style={{ padding: '96px 0', background: 'var(--dbv-stone)' }}>
      <div className="container" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
        <div style={{
          width: 160, height: 160, borderRadius: '50%',
          background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', flexShrink: 0, boxShadow: '0 14px 36px rgba(28,56,41,.18)',
          border: '4px solid var(--dbv-cream)',
        }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 12, color: 'var(--dbv-stone)', letterSpacing: '0.12em' }}>certified</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 42, fontWeight: 600, lineHeight: 1, marginTop: 4 }}>ISO</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500, lineHeight: 1 }}>9001</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, color: 'var(--dbv-stone)', letterSpacing: '0.18em', marginTop: 4 }}>QUALITY MGMT</span>
        </div>
        <div>
          <span className="eyebrow" style={{ color: 'var(--dbv-forest-soft)' }}>06 · Quality assured</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.1, color: 'var(--dbv-forest)', margin: '10px 0 14px' }}>
            ISO 9001 certified.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: 'var(--dbv-forest-soft)', margin: 0, maxWidth: 720 }}>
            Quality is at the heart of everything we do. Our commitment to you — audited, certified, and renewed every year.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function VisionFinalCta() {
  const { navigate } = useRouter();
  return (
    <section style={{ padding: '120px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent 0 16px, rgba(245,240,232,.04) 16px 17px)` }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>07 · Join the story</span>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 500,
          fontSize: 88, lineHeight: 0.98, letterSpacing: '-0.02em',
          color: 'var(--dbv-cream)', margin: '20px auto 22px', maxWidth: 920,
        }}>
          Be part of the <span style={{ fontStyle: 'italic' }}>story.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, lineHeight: 1.4, color: 'var(--dbv-stone)', margin: '0 auto 40px', maxWidth: 760 }}>
          Join the growing community of businesses that call Dunston Business Village home.
        </p>
        <button onClick={() => navigate('contact')} className="btn btn--secondary btn--lg">Enquire about space <Icon name="arrowRight" size={14} stroke={2} /></button>
      </div>
    </section>
  );
}

function VisionPage() {
  return (
    <div data-screen-label="Vision">
      <VisionHero />
      <OurVisionSection />
      <RegenerationStorySection />
      <RegenTeamSection />
      <AwardsAsEvidence />
      <CommunityImpactSection />
      <IsoSection />
      <VisionFinalCta />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.vision = VisionPage;
