// Amenities & Facilities page

const AMENITY_CATEGORIES = [
  {
    icon: 'building', title: 'Office facilities',
    blurb: 'Fully-equipped offices tailored to your specifications.',
    detail: 'Full air-conditioning in every building. Kitchen facilities throughout the site. Disabled access across the campus. Featured courtyards for outdoor meetings. Every space is alarmed, monitored, and ready to move into.',
    bullets: ['A/C in every building', 'Kitchens in every block', 'Disabled access throughout', 'Outdoor courtyard meetings'],
    link: 'spaces',
  },
  {
    icon: 'shield', title: 'Security',
    blurb: 'Site-wide CCTV, door-access cards, alarms.',
    detail: 'Site-wide CCTV monitoring. WiFi door-access control cards across every building. Advanced telephony systems for emergency contact. Secure premises with manned reception and 24/7 monitored alarms.',
    bullets: ['Site-wide CCTV', 'WiFi door-card access', 'Manned reception', '24/7 monitored alarms'],
    link: 'amenities',
  },
  {
    icon: 'wifi', title: 'Communications & IT',
    blurb: 'Fibre, PBX, VPN, leased lines — plus a real helpdesk.',
    detail: 'High-speed internet across the site. PBX telephone systems for every office. VPN connections for headquarters link-up. Leased lines available on request. Full IT support via the DBV IT Helpdesk — a person, not a chatbot.',
    bullets: ['Full-fibre internet', 'PBX phones in every office', 'VPN to your HQ', 'DBV IT Helpdesk on call'],
    link: 'amenities',
  },
  {
    icon: 'user', title: 'Reception',
    blurb: 'A warm welcome for every client, every time.',
    detail: 'Professional reception services from Monday to Friday. First impressions matter — our team ensures your clients receive a warm welcome from the moment they step through the gate. Mail handling, visitor signing-in, and signposting throughout the village.',
    bullets: ['Manned Mon–Fri', 'Mail handling', 'Visitor sign-in', 'Estate signposting'],
    link: 'amenities',
  },
  {
    icon: 'car', title: 'Office relocation',
    blurb: "We help make moving day easy.",
    detail: "DBV assists with the practicalities of relocating your business to the park. Liaising with movers, coordinating IT cutover, sequencing your move with the village calendar. We've done it dozens of times.",
    bullets: ['Move-day coordination', 'IT cutover scheduling', 'Phone-line porting', 'Welcome onboarding'],
    link: 'amenities',
  },
  {
    icon: 'mapPin', title: 'Local accommodation',
    blurb: 'Hotels, B&Bs, and rentals for visiting clients.',
    detail: 'A range of local accommodation options for visiting clients, overnight stays, and relocating staff. We keep an up-to-date list and can book on your behalf if needed.',
    bullets: ['Hotels in Stafford', 'B&Bs nearby', 'Serviced apartments', 'Booking on request'],
    link: 'amenities',
  },
  {
    icon: 'star', title: 'Childcare',
    blurb: 'Reduced nursery rates at SmartStart — 300 yards away.',
    detail: 'DBV has negotiated reduced nursery rates at SmartStart Nursery, located just 300 yards from the site entrance. SmartStart is one of the county\'s leading childcare providers — Ofsted-rated Outstanding.',
    bullets: ['SmartStart Nursery', '300 yards from gate', 'Negotiated tenant rates', 'Ofsted Outstanding'],
    link: 'amenities',
  },
];

function AmenityCard({ a, expanded, onToggle }) {
  return (
    <article style={{
      background: 'var(--dbv-paper)',
      borderRadius: 6,
      border: '1px solid var(--color-border)',
      transition: 'box-shadow .25s, transform .25s',
      boxShadow: expanded ? '0 14px 36px rgba(28,56,41,.14)' : '0 4px 12px rgba(28,56,41,.06)',
      transform: expanded ? 'translateY(-2px)' : 'none',
      overflow: 'hidden',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left', background: 'transparent', border: 0,
          padding: '28px 32px', cursor: 'pointer',
          display: 'flex', alignItems: 'flex-start', gap: 22,
        }}
      >
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon name={a.icon} size={22} stroke={1.4} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.1 }}>{a.title}</h3>
          <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-graphite)', lineHeight: 1.5 }}>{a.blurb}</p>
        </div>
        <span style={{
          color: 'var(--dbv-sage)', flexShrink: 0,
          transform: expanded ? 'rotate(180deg)' : 'none',
          transition: 'transform .25s', paddingTop: 14,
        }}>
          <Icon name="chevronDown" size={20} stroke={1.8} />
        </span>
      </button>
      {expanded && (
        <div style={{ padding: '0 32px 28px 110px', borderTop: '1px solid var(--color-rule)', marginTop: 4, paddingTop: 18 }}>
          <p style={{ margin: '0 0 14px', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)' }}>{a.detail}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
            {a.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-forest)' }}>
                <span style={{ color: 'var(--dbv-sage)', marginTop: 1, flexShrink: 0 }}><Icon name="check" size={14} stroke={2} /></span>{b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function AmenitiesAccordion() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          eyebrow="The catalogue"
          italic="every service, every category"
          title="Seven categories. One estate."
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {AMENITY_CATEGORIES.map((a, i) => (
            <AmenityCard key={i} a={a} expanded={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- DISCOUNT CLUB ----------
function DiscountClubSection() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Members only</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '14px 0 22px' }}>
            The DBV <span style={{ fontStyle: 'italic' }}>Discount Club.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 22px', maxWidth: 500 }}>
            As a DBV tenant, you gain access to our exclusive Discount Club — negotiated savings on services, products, and local businesses for you and your staff.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--dbv-graphite)', margin: '0 0 28px', maxWidth: 500 }}>
            Twenty-six local partners as of this quarter — from print shops and cafés to MOTs, physiotherapists, dry cleaners, and a hire-car company. New partners added monthly.
          </p>
          <button className="btn btn--primary">View Member Benefits <Icon name="arrowRight" size={14} stroke={2} /></button>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Discount card stack */}
          {[
            { tag: '15% OFF', name: 'Print Works Direct', cat: 'Print & supplies' },
            { tag: '£10 OFF', name: 'The Courtyard',     cat: 'Restaurant' },
            { tag: '20% OFF', name: 'Stafford MOT',     cat: 'Automotive' },
          ].map((card, i) => (
            <div key={i} style={{
              position: 'relative', marginLeft: i * 36, marginTop: i === 0 ? 0 : -28,
              background: i === 1 ? 'var(--dbv-forest)' : 'var(--dbv-paper)',
              color: i === 1 ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
              padding: '22px 26px', borderRadius: 8,
              border: i === 1 ? 0 : '1px solid var(--color-border)',
              boxShadow: '0 12px 28px rgba(28,56,41,.14)',
              maxWidth: 320, zIndex: 10 - i,
              transform: `rotate(${(i - 1) * -2}deg)`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.75 }}>{card.cat}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginTop: 4, fontWeight: 500 }}>{card.name}</div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                  fontSize: 22, fontWeight: 600,
                  color: i === 1 ? 'var(--dbv-stone)' : 'var(--dbv-sage)',
                }}>{card.tag}</div>
              </div>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: i === 1 ? '1px solid rgba(245,240,232,.15)' : '1px solid var(--color-rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.10em', textTransform: 'uppercase' }}>
                <span>DBV TENANT</span>
                <span>Valid 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- GREEN ISSUES ----------
function GreenIssuesSection() {
  const items = [
    { title: 'Ground-source heat', body: 'A multi-borehole ground-source system serves the eight heritage buildings — replacing the original oil boilers.' },
    { title: 'Solar arrays', body: 'Photovoltaic panels on the south-facing roof of Barn 4 and the rear cabin roof line offset around 22% of estate consumption.' },
    { title: 'EV charging', body: 'Six rapid charge points in the main car park; further dedicated bays in the rear car park.' },
    { title: 'Rewilded margins', body: 'Three of the 25 acres are unmown and managed as pollinator habitat in partnership with the South Staffordshire wildlife trust.' },
    { title: 'Local supply chain', body: 'Cleaning, catering, maintenance, and most stationery sourced from within a 10-mile radius.' },
  ];
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>Environmental commitment</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--dbv-cream)', margin: '14px 0 22px' }}>
            A <span style={{ fontStyle: 'italic' }}>working</span> countryside park.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(245,240,232,.85)', margin: '0 0 24px' }}>
            DBV takes its environmental responsibilities seriously. Our green initiatives sit alongside the village's day-to-day operation — not bolted on as an afterthought.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, color: 'var(--dbv-stone)', margin: '0 0 24px' }}>
            "The eight original buildings are themselves the largest piece of sustainability work we've ever done — adaptive reuse, not demolition and rebuild."
          </p>
          <a href="#" className="link-italic" style={{ color: 'var(--dbv-stone)', borderBottomColor: 'var(--dbv-stone)' }}>Read the full policy →</a>
        </div>
        <div>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '28px 0',
              borderTop: i === 0 ? 0 : '1px solid rgba(245,240,232,.10)',
              display: 'grid', gridTemplateColumns: '64px 1fr', gap: 18,
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dbv-stone)',
                fontWeight: 500, lineHeight: 1,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--dbv-cream)', fontWeight: 500, lineHeight: 1.15 }}>{it.title}</h3>
                <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'rgba(245,240,232,.80)' }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ISO BANNER ----------
function IsoBanner() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--dbv-stone)' }}>
      <div className="container" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
        <div style={{
          width: 140, height: 140, borderRadius: '50%',
          background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', flexShrink: 0, boxShadow: '0 14px 36px rgba(28,56,41,.18)',
          border: '4px solid var(--dbv-cream)',
        }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 11, color: 'var(--dbv-stone)', letterSpacing: '0.10em' }}>certified</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 4 }}>ISO</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, lineHeight: 1 }}>9001</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 8, color: 'var(--dbv-stone)', letterSpacing: '0.18em', marginTop: 4 }}>QUALITY MGMT</span>
        </div>
        <div>
          <span className="eyebrow" style={{ color: 'var(--dbv-forest-soft)' }}>Quality management</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--dbv-forest)', margin: '10px 0 12px' }}>
            ISO 9001 certified, every year since 2014.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: 'var(--dbv-forest-soft)', margin: 0, maxWidth: 720 }}>
            Quality is at the heart of everything we do. The annual ISO 9001 audit covers every part of estate operations — from reception protocols to facilities management to tenant onboarding.
          </p>
        </div>
      </div>
    </section>
  );
}

function AmenitiesPage() {
  return (
    <div data-screen-label="Amenities">
      <PageHero
        eyebrow="Amenities & facilities"
        title="Everything your business needs."
        italic="nothing it doesn't."
        subtitle="DBV offers a comprehensive range of services and facilities so you can focus on running your business, not managing your office. Bring a laptop — we've taken care of the rest."
      >
        <div style={{ display: 'flex', gap: 28, marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--color-rule)', maxWidth: 760 }}>
          <MetricStat number="7" unit="categories" label="Of services" />
          <MetricStat number="ISO" unit="9001" label="Certified since 2014" />
          <MetricStat number="300" unit="yds" label="To nursery" />
          <MetricStat number="26" unit="partners" label="Discount Club" />
        </div>
      </PageHero>
      <AmenitiesAccordion />
      <DiscountClubSection />
      <GreenIssuesSection />
      <IsoBanner />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.amenities = AmenitiesPage;
