// Community page — warm, welcoming hub for the tenant community.

const COMMUNITY_SECTIONS = [
  {
    icon: 'user', title: 'DBV Community',
    eyebrow: 'On the park',
    body: 'A thriving community of businesses spread across the village — financial planners, software firms, construction trades, fostering agencies, and a working restaurant. Tenant networking, shared facilities, and a Friday afternoon round of drinks at the Courtyard.',
    to: 'directory',
    cta: 'Browse the directory',
  },
  {
    icon: 'wifi', title: 'DBV Forum',
    eyebrow: 'Online',
    body: 'A members-only online forum at forum.dunstonbusinessvillage.com — connect with fellow tenants, share ideas, post opportunities, swap referrals. Run by tenants, moderated by reception.',
    href: 'https://forum.dunstonbusinessvillage.com',
    cta: 'Visit the forum',
  },
  {
    icon: 'mail', title: 'DBV News',
    eyebrow: 'Latest from the park',
    body: 'Quarterly site news — refurbishments, new tenants, partner additions to the Discount Club, awards shortlistings, road closures and access notices. Subscribe through reception.',
    to: 'community',
    cta: 'Read latest news',
  },
  {
    icon: 'award', title: 'Discount Club',
    eyebrow: 'For tenants',
    body: 'Exclusive savings for DBV tenants — 26 local partners, from print shops to physiotherapists. Members receive a quarterly partner update by email.',
    to: 'amenities',
    cta: 'View partners',
  },
  {
    icon: 'leaf', title: 'Regeneration Team',
    eyebrow: 'Partnership',
    body: 'DBV is proud to work with the South Staffordshire Regeneration Team. Our 2008 development was co-financed by the Connecting Europe Facility of the European Union — and we remain active partners in the team\'s ongoing work across the county.',
    to: 'vision',
    cta: 'Read more',
  },
  {
    icon: 'briefcase', title: 'Tenders',
    eyebrow: 'Open for bids',
    body: 'Current tenders for park services — landscaping, cleaning, IT contracts, security upgrades. Open to all local businesses; we publish briefs on a rolling basis.',
    to: 'community',
    cta: 'See open tenders',
  },
  {
    icon: 'user', title: 'Vacancies',
    eyebrow: 'Working at DBV',
    body: 'Current job opportunities at businesses based here on the park. Posted by tenants, listed on the noticeboard, and emailed to the local job centre and university careers services.',
    to: 'community',
    cta: 'View current roles',
  },
  {
    icon: 'star', title: 'Testimonials',
    eyebrow: 'In their own words',
    body: 'What tenants say about DBV — the reception team, the fibre, the courtyard restaurant, the view from Barn 7\'s top floor. Real quotes from real businesses.',
    to: 'community',
    cta: 'Read all',
  },
];

function CommunityCard({ s, big }) {
  const { navigate } = useRouter();
  const onClick = () => {
    if (s.href) window.open(s.href, '_blank');
    else if (s.to) navigate(s.to);
  };
  return (
    <article style={{
      background: 'var(--dbv-paper)', borderRadius: 6,
      border: '1px solid var(--color-border)',
      padding: big ? '40px 44px' : '32px 32px',
      display: 'flex', flexDirection: 'column',
      gridColumn: big ? 'span 2' : 'span 1',
      transition: 'transform .25s, box-shadow .25s',
      boxShadow: '0 4px 12px rgba(28,56,41,.06)',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(28,56,41,.14)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(28,56,41,.06)'; }}>
      <div style={{
        width: big ? 64 : 52, height: big ? 64 : 52, borderRadius: '50%',
        background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
      }}>
        <Icon name={s.icon} size={big ? 26 : 22} stroke={1.4} />
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600 }}>{s.eyebrow}</div>
      <h3 style={{ margin: '6px 0 12px', fontFamily: 'var(--font-serif)', fontSize: big ? 32 : 24, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.15 }}>{s.title}</h3>
      <p style={{ margin: '0 0 22px', fontFamily: 'var(--font-sans)', fontSize: big ? 16 : 14, lineHeight: 1.6, color: 'var(--dbv-graphite)' }}>{s.body}</p>
      <button onClick={onClick} style={{
        marginTop: 'auto', alignSelf: 'flex-start',
        background: 'transparent', border: 0, cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.10em', textTransform: 'uppercase',
        color: 'var(--dbv-forest)', display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '8px 0', borderBottom: '1px solid var(--dbv-stone)',
      }}>{s.cta} <Icon name="arrowRight" size={12} stroke={2} /></button>
    </article>
  );
}

function CommunityGrid() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          eyebrow="The community"
          italic="more than an office"
          title="Eight ways the village stays connected."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {COMMUNITY_SECTIONS.map((s, i) => (
            <CommunityCard key={i} s={s} big={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- COMMUNITY HIGHLIGHTS / NEWS PREVIEW ----------
const COMMUNITY_NEWS = [
  { date: 'April 2026', cat: 'Site news',  title: 'Barn 4 first-floor refurbishment now complete', excerpt: 'The Office E suite is now available on managed terms.' },
  { date: 'March 2026', cat: 'Community',  title: 'Discount Club partners expanded for Q2',       excerpt: 'Six new local providers have joined the Discount Club.' },
  { date: 'Feb 2026',   cat: 'Awards',     title: 'Rural Business of the Year — shortlisted',     excerpt: 'For the third consecutive year, DBV has been shortlisted.' },
  { date: 'Jan 2026',   cat: 'Tenants',    title: 'Welcome to Coldrush Energy at Cabin 16C',      excerpt: 'A new neighbour: net-zero advisory practice.' },
  { date: 'Dec 2025',   cat: 'Tenders',    title: 'Open tender: estate landscaping 2026',         excerpt: 'A two-year contract is open for proposals.' },
  { date: 'Nov 2025',   cat: 'Community',  title: 'The Courtyard Christmas market — 7 December',  excerpt: 'Tenants and the public welcome from 10am.' },
];

function CommunityNewsList() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <span className="eyebrow">DBV News</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 48, lineHeight: 1.05, color: 'var(--dbv-forest)', margin: '12px 0 0' }}>From the village.</h2>
          </div>
          <a href="#" className="link-italic">View archive →</a>
        </div>
        <div style={{ background: 'var(--dbv-paper)', borderRadius: 6, border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 6px 18px rgba(28,56,41,.06)' }}>
          {COMMUNITY_NEWS.map((n, i) => (
            <a key={i} href="#" style={{
              display: 'grid', gridTemplateColumns: '160px 220px 1fr 24px', alignItems: 'center', gap: 32,
              padding: '24px 32px',
              borderTop: i === 0 ? 0 : '1px solid var(--color-rule)',
              textDecoration: 'none', color: 'var(--dbv-forest)',
              transition: 'background .15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--dbv-cream-warm)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dbv-mist)' }}>{n.date}</div>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                background: 'var(--dbv-sage-soft)', color: 'var(--dbv-forest)',
                padding: '5px 11px', borderRadius: 2, justifySelf: 'start',
              }}>{n.cat}</span>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500, lineHeight: 1.2 }}>{n.title}</h3>
                <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-graphite)' }}>{n.excerpt}</p>
              </div>
              <span style={{ color: 'var(--dbv-sage)' }}><Icon name="chevronRight" size={18} stroke={2} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS DETAIL ----------
const ALL_TESTIMONIALS = [
  { quote: "We've grown from a two-desk serviced unit into a leased suite over four years — and never had a single reason to move off the park.", name: 'Lisa Luck', role: 'Charterhouse Financial Planning', loc: 'Log Cabin 2B' },
  { quote: "The reception team are the first impression our clients get of us. They've never let us down. That matters more than any amount of square footage.", name: 'Phil McGuinness', role: 'ATG Airports', loc: 'Lodge 13A' },
  { quote: "Eight buildings, full fibre, a courtyard restaurant — and twenty-five minutes from the centre of Birmingham. We don't know what more we'd ask for.", name: 'Soloman Kidd-Smithers', role: 'KS Construction Group', loc: 'Barn 7' },
  { quote: "When we needed to expand from one cabin to two, DBV moved us next door over a weekend. The IT and phones didn't drop a beat.", name: 'Ed Englefield', role: 'Snag R Software', loc: 'Log Cabin 21' },
  { quote: "There's a real sense of being in a working village — the lunch trade at The Courtyard, the post handover at reception, the chats in the car park.", name: 'Nicki Haywood', role: 'The Honeycomb Foundation', loc: 'Log Cabin 20' },
];

function TestimonialsBlock() {
  return (
    <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Testimonials"
          italic="from the tenant community"
          title="What businesses at DBV actually say."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
          {ALL_TESTIMONIALS.map((t, i) => (
            <figure key={i} style={{
              background: i % 3 === 0 ? 'var(--dbv-forest)' : 'var(--dbv-paper)',
              color: i % 3 === 0 ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
              margin: 0, padding: '36px 40px', borderRadius: 6,
              boxShadow: '0 6px 18px rgba(28,56,41,.08)',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: -2, left: 24,
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: 96, lineHeight: 1,
                color: i % 3 === 0 ? 'var(--dbv-stone)' : 'var(--dbv-stone)',
              }}>"</span>
              <blockquote style={{
                margin: '32px 0 24px', padding: 0,
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: i === 0 ? 28 : 22, lineHeight: 1.35,
              }}>{t.quote}</blockquote>
              <figcaption style={{
                paddingTop: 18, borderTop: `1px solid ${i % 3 === 0 ? 'rgba(245,240,232,.15)' : 'var(--color-rule)'}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12,
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, opacity: 0.7, marginTop: 2 }}>{t.role}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, opacity: 0.7 }}>{t.loc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityPage() {
  return (
    <div data-screen-label="Community">
      <PageHero
        eyebrow="Community"
        title="More than an office."
        italic="a community."
        subtitle="A real village of businesses. Tenant networking, shared facilities, a forum that's been running since 2010, a discount club, and an active job board. Sixty-plus businesses, one estate."
      />
      <CommunityGrid />
      <CommunityNewsList />
      <TestimonialsBlock />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.community = CommunityPage;
