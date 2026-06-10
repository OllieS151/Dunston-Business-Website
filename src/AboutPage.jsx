// About / Our Story page — heritage, buildings, awards timeline, registered details.

const AWARDS_TIMELINE = [
  { year: '2008', title: 'Business Contribution to Regeneration', body: 'South Staffordshire — Winner', kind: 'winner' },
  { year: '2010', title: 'Regeneration Awards South Staffordshire', body: 'Second Place', kind: 'place' },
  { year: '2010', title: 'Regeneration Project of the Decade 2000–2010', body: 'RegenWM — Second Place', kind: 'place' },
  { year: '2011', title: 'RICS Best Regeneration Project', body: 'West Midlands — Winner', kind: 'winner' },
  { year: '2011', title: 'RICS Best Regeneration Project', body: 'UK — Shortlisted Finalist', kind: 'place' },
  { year: '2012', title: 'Royal Patronage', body: "Visit by HM's Lord Lieutenant", kind: 'royal' },
];

// ---------- DEVELOPMENT / BUILDINGS / FLEXIBILITY / TECH ----------
const STORY_SECTIONS = [
  {
    eyebrow: 'The development',
    title: 'A five-star business park.',
    body: 'A five-star business park development on a 25-acre site in the heart of the West Midlands, just off Junction 13 of the M6. Sixty thousand square feet of hi-tech, quality office accommodation. Office space ranges from 800 sq ft to 10,000+ sq ft, with layouts tailored to your specifications.',
    stat: { number: '25', unit: 'acres', label: 'Site footprint' },
  },
  {
    eyebrow: 'The buildings',
    title: 'Eight character buildings, restored.',
    body: 'The site comprises eight character buildings dating back to the 1800s, fully restored to create a modern and professional working environment. Featured courtyards offer a unique setting for outdoor meetings, with views over the famous Cannock Chase.',
    stat: { number: '8', unit: 'buildings', label: 'From the 1800s' },
  },
  {
    eyebrow: 'Flexibility',
    title: 'Three months to ten years.',
    body: 'Fully-inclusive packages available on terms from 3 months to 10 years. High-quality serviced and non-serviced office space gives ultimate choice and flexibility, with offices available to suit 1–40 people.',
    stat: { number: '1–40', unit: 'people', label: 'Per office' },
  },
  {
    eyebrow: 'Technology',
    title: 'Plug-and-work, modernised.',
    body: 'The latest in CCTV, door-access control and telephony systems. Full IT support via the DBV IT Helpdesk. Fibre internet, PBX phones, VPN connections back to your headquarters, and leased lines available on request.',
    stat: { number: 'Full', unit: 'fibre', label: 'On every desk' },
  },
];

function StoryBlock({ section, index }) {
  const isEven = index % 2 === 0;
  return (
    <section style={{ padding: '88px 0', background: isEven ? 'var(--dbv-cream)' : 'var(--dbv-paper)' }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        direction: isEven ? 'ltr' : 'rtl',
      }}>
        <div style={{ direction: 'ltr' }}>
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: 80, color: 'var(--dbv-stone)',
            fontWeight: 500, lineHeight: 1, marginBottom: 6, letterSpacing: '-0.02em',
          }}>{String(index + 1).padStart(2, '0')}</div>
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '14px 0 18px' }}>{section.title}</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 24px' }}>{section.body}</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', paddingTop: 18, borderTop: '1px solid var(--color-rule)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, color: 'var(--dbv-forest)' }}>{section.stat.number}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-mist)' }}>{section.stat.unit}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--dbv-graphite)', letterSpacing: '0.10em', textTransform: 'uppercase', marginLeft: 14 }}>{section.stat.label}</span>
          </div>
        </div>
        <div style={{ direction: 'ltr' }}>
          <StoryIllustration index={index} />
        </div>
      </div>
    </section>
  );
}

function StoryIllustration({ index }) {
  const palettes = [
    ['#6E8C68', '#1C3829'],
    ['#C8B89A', '#7A5E3E'],
    ['#A5BCA0', '#2A4D38'],
    ['#9A8862', '#3B2D20'],
  ];
  const [a, b] = palettes[index % palettes.length];
  return (
    <div style={{ position: 'relative', aspectRatio: '4/3', width: '100%' }}>
      <div style={{ position: 'absolute', right: -16, bottom: -16, width: '92%', height: '92%', background: 'var(--dbv-stone)', borderRadius: 4 }} />
      <div className="grain" style={{
        position: 'absolute', inset: 0, borderRadius: 4, overflow: 'hidden',
        background: `linear-gradient(165deg, ${a} 0%, ${b} 100%)`,
        boxShadow: '0 24px 56px rgba(28,56,41,.18)',
      }}>
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '90%' }}>
          <g fill="rgba(0,0,0,.30)">
            <ellipse cx="40" cy="240" rx="40" ry="50" />
            <ellipse cx="370" cy="230" rx="50" ry="65" />
            <ellipse cx="100" cy="240" rx="22" ry="30" />
          </g>
          {index === 0 && (
            <g fill="rgba(255,255,255,.15)">
              <rect x="60" y="150" width="280" height="120" />
              <polygon points="50,150 200,90 350,150" />
              <rect x="190" y="200" width="20" height="70" fill="rgba(0,0,0,.4)" />
              {[80, 110, 140, 170, 230, 260, 290, 320].map((x, i) => (
                <rect key={i} x={x} y="170" width="16" height="22" fill="rgba(245,219,160,.85)" />
              ))}
            </g>
          )}
          {index === 1 && (
            <g fill="rgba(255,255,255,.18)">
              <rect x="40" y="160" width="100" height="110" />
              <polygon points="30,160 90,110 150,160" />
              <rect x="160" y="180" width="80" height="90" />
              <polygon points="150,180 200,140 250,180" />
              <rect x="260" y="170" width="100" height="100" />
              <polygon points="250,170 310,120 370,170" />
              <rect x="80" y="200" width="16" height="22" fill="rgba(245,219,160,.85)" />
              <rect x="190" y="210" width="14" height="20" fill="rgba(245,219,160,.85)" />
              <rect x="295" y="200" width="16" height="22" fill="rgba(245,219,160,.85)" />
            </g>
          )}
          {index === 2 && (
            <g fill="rgba(255,255,255,.16)">
              {/* multi-level building */}
              <rect x="100" y="100" width="200" height="170" />
              <polygon points="90,100 200,50 310,100" />
              <rect x="120" y="120" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="155" y="120" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="190" y="120" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="225" y="120" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="260" y="120" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="120" y="170" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="155" y="170" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="190" y="170" width="22" height="28" fill="rgba(0,0,0,.4)"/>
              <rect x="225" y="170" width="22" height="28" fill="rgba(245,219,160,.85)"/>
              <rect x="260" y="170" width="22" height="28" fill="rgba(245,219,160,.85)"/>
            </g>
          )}
          {index === 3 && (
            <g>
              <rect x="100" y="120" width="200" height="150" fill="rgba(255,255,255,.16)"/>
              <polygon points="90,120 200,70 310,120" fill="rgba(0,0,0,.30)"/>
              {/* tech grid pattern */}
              {[0, 1, 2, 3, 4].map(i => [0, 1, 2, 3].map(j => (
                <rect key={`${i}-${j}`} x={120 + i * 38} y={140 + j * 28} width="22" height="18" fill="rgba(245,219,160,.8)" opacity={Math.random() > 0.3 ? 1 : 0.3}/>
              )))}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

// ---------- AWARDS TIMELINE ----------
function AwardsTimeline() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          dark
          eyebrow="On record"
          italic="five years of formal recognition"
          title="Awards timeline."
          subtitle="From the 2008 South Staffordshire prize for regeneration through to royal patronage in 2012 — a small, complete record."
        />
        <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto' }}>
          <div style={{
            position: 'absolute', top: 12, bottom: 12, left: 96,
            width: 1, background: 'rgba(245,240,232,.15)',
          }} />
          {AWARDS_TIMELINE.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 32, paddingBottom: 32 }}>
              <div style={{ textAlign: 'left', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--dbv-stone)', fontWeight: 600, lineHeight: 1 }}>{a.year}</div>
                <div style={{
                  position: 'absolute', right: -8, top: 14,
                  width: 16, height: 16, borderRadius: '50%',
                  background: a.kind === 'royal' ? 'var(--dbv-stone)' : a.kind === 'winner' ? 'var(--dbv-cream)' : 'var(--dbv-sage)',
                  border: '3px solid var(--dbv-forest)',
                  boxShadow: '0 0 0 1px rgba(245,240,232,.2)',
                }} />
              </div>
              <div style={{ paddingLeft: 32, paddingTop: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: a.kind === 'royal' ? 'var(--dbv-stone)' : a.kind === 'winner' ? 'var(--dbv-cream)' : 'rgba(245,240,232,.6)',
                  border: '1px solid currentColor', padding: '4px 10px', borderRadius: 2,
                  display: 'inline-block',
                }}>{a.kind === 'royal' ? 'Royal patronage' : a.kind === 'winner' ? 'Winner' : 'Recognised'}</span>
                <h3 style={{ margin: '14px 0 6px', fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--dbv-cream)', fontWeight: 500, lineHeight: 1.2 }}>{a.title}</h3>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, color: 'rgba(245,240,232,.7)' }}>{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- REGISTERED DETAILS ----------
function RegisteredDetails() {
  return (
    <section style={{ padding: '88px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <div style={{
          background: 'var(--dbv-paper)', borderRadius: 6,
          border: '1px solid var(--color-border)',
          padding: '40px 48px',
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'center',
          boxShadow: '0 6px 18px rgba(28,56,41,.06)',
        }}>
          <div>
            <span className="eyebrow">Registered details</span>
            <h3 style={{ margin: '10px 0 0', fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--dbv-forest)', fontWeight: 500 }}>For the record.</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 32px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Company No.</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', marginTop: 4 }}>4223216</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>VAT No.</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', marginTop: 4 }}>775 9676 54</div>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Registered Office</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--dbv-forest)', marginTop: 4 }}>Woodland Lodge, Dunston Business Village, Dunston, ST18 9FJ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div data-screen-label="About">
      <PageHero
        eyebrow="Our story"
        title="A business village built on heritage."
        italic="restored, not rebuilt."
        subtitle="The Dunston estate began life as a working country home in the 1800s. A multi-year regeneration project — winner of South Staffordshire's Business Contribution to Regeneration award in 2008 — turned eight heritage buildings into a fully-networked modern business village without losing the character of the bricks and beams underneath."
      />
      {STORY_SECTIONS.map((s, i) => <StoryBlock key={i} section={s} index={i} />)}
      <AwardsTimeline />
      <RegisteredDetails />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.about = AboutPage;
