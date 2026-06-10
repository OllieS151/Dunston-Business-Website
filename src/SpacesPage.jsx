// Spaces page — full office types catalogue.

const OFFICE_TYPES_FULL = [
  { id: 'commercial', name: 'Commercial Office Space',
    eyebrow: 'Traditional', from: '900 sq ft', term: 'Bespoke',
    desc: 'Traditional leased offices for established businesses. Various sizes and configurations across the eight heritage buildings — and through to larger commercial premises at the northern edge of the estate.',
    bullets: ['Restored 1800s buildings', 'Bespoke fit-out to your spec', 'Long-term tenure', 'Self-contained units'],
  },
  { id: 'managed', name: 'Managed Office Space',
    eyebrow: 'Workspace-plus', from: '480 sq ft', term: '3 mo — 10 yr',
    desc: 'Fully managed workspace-plus solutions. Includes IT support, telephony, payroll and accountancy services as required. A single monthly invoice covers utilities, cleaning, security and broadband.',
    bullets: ['One invoice — everything in', 'IT, payroll & accountancy on tap', '3 months to 10 years', 'Cleaning & security included'],
  },
  { id: 'leased', name: 'Leased Office Space',
    eyebrow: 'Long-term', from: '900 sq ft', term: '3 — 10 yr',
    desc: 'Longer-term lease arrangements with full flexibility in layout and specification. Fit out the space exactly to your specifications and brand it as your own.',
    bullets: ['Full fit-out freedom', '3- to 10-year leases', 'Brand the suite as your own', 'Lower per-foot rates'],
  },
  { id: 'serviced', name: 'Serviced Office Space',
    eyebrow: 'Move-in ready', from: '200 sq ft', term: '3 mo+',
    desc: 'Fully inclusive packages. Ideal for startups, SMEs, satellite offices, and project spaces — move in ready, with reception, broadband, PBX phones and meeting room access from day one.',
    bullets: ['Plug-in and start working', 'Reception & meeting rooms', 'Broadband, phones, mail all in', '3-month minimum'],
  },
  { id: 'offices', name: 'Offices to Let / Offices to Rent',
    eyebrow: 'Wide range', from: '200 sq ft', term: 'Flexible',
    desc: 'No-frills through to premium. From 200 sq ft for a single-person operation, up to 10,000+ sq ft for a full-floor team. From £12.50 /sq ft. Tour the village and pick a unit that fits.',
    bullets: ['200 to 10,000+ sq ft', 'From £12.50 /sq ft', 'Single units & full floors', 'No-frills to premium'],
  },
  { id: 'virtual-office', name: 'Virtual Office',
    eyebrow: 'Address only', from: '—', term: 'Monthly',
    desc: 'A professional business address without a physical office. Ideal for home workers, new businesses, or anyone needing a prestigious Staffordshire address. Mail handling, reception cover, and call answering as required.',
    bullets: ['Prestigious ST18 9FJ address', 'Mail handling', 'Reception cover', 'Add Virtual Client or Phone'],
  },
  { id: 'virtual-client', name: 'Virtual Client',
    eyebrow: 'On-site facilities', from: '—', term: 'Pay-as-you-go',
    desc: 'A step up from virtual office — client-facing facilities available on demand. Book the meeting room, conference suite, or a touchdown desk when you need to meet clients in person.',
    bullets: ['Meeting room hire', 'Conference suite (40 delegates)', 'Touchdown desks', 'Same address as Virtual Office'],
  },
  { id: 'virtual-phone', name: 'Virtual Phone',
    eyebrow: 'Answering service', from: '—', term: 'Monthly',
    desc: 'Professional telephone answering and call handling. Our reception team takes your calls under your business name, screens and forwards as instructed, and delivers messages to your inbox.',
    bullets: ['Calls answered in your name', 'Message-to-inbox forwarding', 'Pair with Virtual Office', 'Set rules per caller'],
  },
];

function SpaceTypeCard({ space, index }) {
  const { navigate } = useRouter();
  return (
    <article style={{
      background: 'var(--dbv-paper)', borderRadius: 6, overflow: 'hidden',
      boxShadow: '0 6px 18px rgba(28,56,41,.08)',
      display: 'grid', gridTemplateColumns: '1.2fr 2fr',
      border: '1px solid var(--color-border)',
    }}>
      {/* Artwork left */}
      <div className="grain" style={{
        position: 'relative', overflow: 'hidden', minHeight: 280,
        background: index % 2 === 0
          ? 'linear-gradient(165deg, #6E8C68 0%, #1C3829 100%)'
          : 'linear-gradient(165deg, #C8B89A 0%, #7A5E3E 100%)',
      }}>
        <span style={{
          position: 'absolute', top: 18, left: 18,
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          background: 'var(--dbv-cream)', color: 'var(--dbv-forest)',
          padding: '5px 11px', borderRadius: 2,
        }}>{space.eyebrow}</span>
        <span style={{
          position: 'absolute', top: 18, right: 18,
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 13, color: 'var(--dbv-cream)', opacity: 0.8,
        }}>{String(index + 1).padStart(2, '0')} / 08</span>
        <svg viewBox="0 0 300 280" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '85%' }}>
          <g fill="rgba(0,0,0,.30)">
            <ellipse cx="30" cy="240" rx="40" ry="50" />
            <ellipse cx="280" cy="230" rx="50" ry="60" />
          </g>
          <g fill="rgba(255,255,255,.14)">
            <rect x="60" y="140" width="180" height="120" />
            <polygon points="50,140 150,80 250,140" />
            <rect x="142" y="200" width="16" height="60" fill="rgba(0,0,0,.4)" />
          </g>
          <g fill="rgba(245,219,160,.8)">
            <rect x="80" y="170" width="18" height="22" />
            <rect x="108" y="170" width="18" height="22" />
            <rect x="172" y="170" width="18" height="22" />
            <rect x="200" y="170" width="18" height="22" />
          </g>
        </svg>
      </div>
      {/* Copy right */}
      <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 36, lineHeight: 1.05, color: 'var(--dbv-forest)', fontWeight: 500 }}>{space.name}</h2>
        <div style={{ display: 'flex', gap: 28, marginTop: 14, marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>From</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500 }}>{space.from}</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--color-border)' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>Term</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500 }}>{space.term}</div>
          </div>
        </div>
        <p style={{ margin: '0 0 18px', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)' }}>{space.desc}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {space.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-forest)' }}>
              <span style={{ color: 'var(--dbv-sage)', marginTop: 1, flexShrink: 0 }}><Icon name="check" size={14} stroke={2} /></span>{b}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 14, marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--color-rule)' }}>
          <button onClick={() => navigate('contact')} className="btn btn--primary btn--sm">Enquire about this space</button>
          <button onClick={() => navigate('sitemap')} className="btn btn--ghost btn--sm">See on site map</button>
        </div>
      </div>
    </article>
  );
}

// ---------- COMPARISON TABLE ----------
const COMPARISON_FEATURES = [
  { label: 'Reception & mail handling', commercial: false, managed: true, leased: false, serviced: true, virtual: true },
  { label: 'Broadband & PBX phones', commercial: 'optional', managed: true, leased: 'optional', serviced: true, virtual: false },
  { label: 'Meeting room access', commercial: 'extra', managed: true, leased: 'extra', serviced: true, virtual: 'extra' },
  { label: 'Cleaning & utilities', commercial: false, managed: true, leased: false, serviced: true, virtual: false },
  { label: 'IT support (DBV helpdesk)', commercial: 'extra', managed: true, leased: 'extra', serviced: true, virtual: false },
  { label: 'Site-wide CCTV & door access', commercial: true, managed: true, leased: true, serviced: true, virtual: false },
  { label: 'Free parking', commercial: true, managed: true, leased: true, serviced: true, virtual: false },
  { label: 'Bespoke fit-out', commercial: true, managed: false, leased: true, serviced: false, virtual: false },
  { label: 'Term length', commercial: 'Bespoke', managed: '3mo–10yr', leased: '3–10yr', serviced: '3mo+', virtual: 'Monthly' },
];

function ComparisonCell({ value }) {
  if (value === true) return <span style={{ color: 'var(--color-success)' }}><Icon name="check" size={16} stroke={2.2} /></span>;
  if (value === false) return <span style={{ color: 'var(--dbv-mist)', fontFamily: 'var(--font-sans)', fontSize: 18 }}>—</span>;
  if (value === 'optional' || value === 'extra') {
    return <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontStyle: 'italic', color: 'var(--dbv-mist)' }}>{value}</span>;
  }
  return <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-forest)' }}>{value}</span>;
}

function ComparisonTable() {
  const cols = [
    { id: 'commercial', label: 'Commercial' },
    { id: 'managed', label: 'Managed' },
    { id: 'leased', label: 'Leased' },
    { id: 'serviced', label: 'Serviced' },
    { id: 'virtual', label: 'Virtual' },
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-paper)' }}>
      <div className="container">
        <SectionHead
          eyebrow="What's included"
          italic="side by side"
          title="A clearer look at what comes with each."
          subtitle="What's standard, what's add-on, and what's bespoke — for every space type DBV offers."
        />
        <div style={{
          background: 'var(--dbv-cream)', borderRadius: 6, overflow: 'hidden',
          border: '1px solid var(--color-border)',
          boxShadow: '0 6px 18px rgba(28,56,41,.06)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `2fr repeat(${cols.length}, 1fr)`,
            background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          }}>
            <div style={{ padding: '18px 24px', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-stone)' }}>Feature</div>
            {cols.map(c => (
              <div key={c.id} style={{ padding: '18px 24px', fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--dbv-cream)', fontWeight: 500, textAlign: 'center' }}>{c.label}</div>
            ))}
          </div>
          {COMPARISON_FEATURES.map((row, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: `2fr repeat(${cols.length}, 1fr)`,
              borderTop: i === 0 ? 0 : '1px solid var(--color-rule)',
              background: i % 2 === 0 ? 'var(--dbv-cream)' : 'var(--dbv-paper)',
            }}>
              <div style={{ padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-forest)', fontWeight: 500 }}>{row.label}</div>
              {cols.map(c => (
                <div key={c.id} style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ComparisonCell value={row[c.id]} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 18, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--dbv-mist)', textAlign: 'center' }}>
          "optional" — included on request. "extra" — billable add-on. Speak to reception for a tailored quote.
        </div>
      </div>
    </section>
  );
}

// ---------- KEY FEATURES BAND ----------
function KeyFeaturesBand() {
  const features = [
    { icon: 'building', title: '8 heritage buildings', detail: 'Restored 1800s structures' },
    { icon: 'tree',     title: 'Courtyards & views',   detail: 'Outdoor meetings, Cannock Chase views' },
    { icon: 'shield',   title: 'CCTV & door access',   detail: 'Site-wide WiFi keycards' },
    { icon: 'leaf',     title: 'A/C & kitchens',       detail: 'In every building, disabled access' },
    { icon: 'wifi',     title: 'Fibre, PBX, leased',   detail: 'VPN to your HQ' },
    { icon: 'user',     title: '1–40 people',          detail: 'Per office, per suite' },
  ];
  return (
    <section style={{ padding: '88px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Common to every space"
          italic="what comes with the village"
          title="The estate features."
          subtitle="No matter which kind of space you take, you get the village around it."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--color-border)', borderRight: 0, borderBottom: 0, borderRadius: 6, overflow: 'hidden', background: 'var(--dbv-paper)' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              borderRight: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex', gap: 18, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon name={f.icon} size={18} stroke={1.4} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--dbv-forest)', fontWeight: 500 }}>{f.title}</h4>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-mist)', marginTop: 4 }}>{f.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PRICING CTA + SITE LAYOUT TEASER ----------
function SpacesCtaSection() {
  const { navigate } = useRouter();
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 16px, rgba(245,240,232,.04) 16px 17px)`,
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, position: 'relative' }}>
        <div style={{ padding: 32, borderRight: '1px solid rgba(245,240,232,.10)' }}>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Pricing</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-cream)', margin: '14px 0 16px' }}>
            From <span style={{ fontStyle: 'italic' }}>£12.50</span> /sq ft.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, color: 'rgba(245,240,232,.85)', margin: '0 0 24px', maxWidth: 460 }}>
            Pricing is tailored to your requirements — square footage, term length, fit-out and services included.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(245,240,232,.70)', margin: '0 0 24px', maxWidth: 460 }}>
            Get in touch with the reception team for a detailed quote and a site visit. We answer all enquiries within one business day.
          </p>
          <button onClick={() => navigate('contact')} className="btn btn--secondary btn--lg">Request a Quote <Icon name="arrowRight" size={14} stroke={2} /></button>
        </div>
        <div style={{ padding: 32 }}>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Explore the layout</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-cream)', margin: '14px 0 16px' }}>
            Walk the site plan.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, color: 'rgba(245,240,232,.85)', margin: '0 0 24px', maxWidth: 460 }}>
            See where every barn, lodge and log cabin sits — and which businesses are in them.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(245,240,232,.70)', margin: '0 0 24px', maxWidth: 460 }}>
            Our interactive site map shows the layout of all 25 acres — every building, courtyard, car park and access point.
          </p>
          <button onClick={() => navigate('sitemap')} className="btn btn--ghost-light btn--lg">View Site Layout <Icon name="arrowRight" size={14} stroke={2} /></button>
        </div>
      </div>
    </section>
  );
}

// ---------- PAGE ----------
function SpacesPage() {
  return (
    <div data-screen-label="Spaces">
      <PageHero
        eyebrow="Spaces"
        title="Find your perfect space."
        italic="from one desk to ten thousand square feet."
        subtitle="From a single-desk virtual office to a 10,000 sq ft managed campus, DBV offers flexible workspace solutions tailored to your business. Eight office types, one estate."
      >
        <div style={{ display: 'flex', gap: 28, marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--color-rule)', maxWidth: 760 }}>
          <MetricStat number="200" unit="sq ft min" label="Smallest unit" />
          <MetricStat number="10,000+" unit="sq ft" label="Largest" />
          <MetricStat number="£12.50" unit="/sq ft" label="From" />
          <MetricStat number="8" unit="types" label="Office formats" />
        </div>
      </PageHero>
      <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
        <div className="container">
          <SectionHead
            eyebrow="Detail"
            italic="eight ways to take space at DBV"
            title="The full catalogue."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {OFFICE_TYPES_FULL.map((s, i) => <SpaceTypeCard key={s.id} space={s} index={i} />)}
          </div>
        </div>
      </section>
      <KeyFeaturesBand />
      <ComparisonTable />
      <SpacesCtaSection />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.spaces = SpacesPage;
