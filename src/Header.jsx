// Sticky header — adapted from the UI kit to use the in-app Router.
// Each nav item, including megamenu sub-items, navigates to a registered page.

const NAV = [
  { id: 'about', label: 'About', groups: [
      { title: 'Our story', items: [
        { label: 'Our Story', to: 'about' },
        { label: 'Our Vision', to: 'vision' },
        { label: 'Awards', to: 'about' },
        { label: 'Regeneration Team', to: 'vision' },
      ] },
  ]},
  { id: 'spaces', label: 'Spaces', groups: [
      { title: 'By type', items: [
        { label: 'Commercial', to: 'spaces' },
        { label: 'Managed', to: 'spaces' },
        { label: 'Leased', to: 'spaces' },
        { label: 'Serviced', to: 'spaces' },
      ] },
      { title: 'Virtual', items: [
        { label: 'Virtual Office', to: 'spaces' },
        { label: 'Virtual Client', to: 'spaces' },
        { label: 'Virtual Phone', to: 'spaces' },
      ] },
      { title: 'Plan', items: [
        { label: 'Site Layout', to: 'sitemap' },
      ] },
  ], feature: {
      eyebrow: 'Spring availability',
      title: 'Twelve units available this quarter',
      cta: 'Book a viewing',
      to: 'contact',
  }},
  { id: 'amenities', label: 'Amenities', groups: [
      { title: 'On site', items: [
        { label: 'Office Facilities', to: 'amenities' },
        { label: 'Reception', to: 'amenities' },
        { label: 'Security', to: 'amenities' },
        { label: 'Communications / IT', to: 'amenities' },
      ] },
      { title: 'Estate-wide', items: [
        { label: 'Green Issues', to: 'amenities' },
        { label: 'Discount Club', to: 'amenities' },
      ] },
  ]},
  { id: 'location', label: 'Location', groups: [
      { title: 'The estate', items: [
        { label: 'Prime Location', to: 'location' },
        { label: 'Find Us', to: 'location' },
        { label: 'Travel Options', to: 'location' },
      ] },
      { title: 'Around us', items: [
        { label: 'Scenic Surrounds', to: 'location' },
        { label: 'Geographic Coverage', to: 'location' },
        { label: 'Local Knowledge', to: 'location' },
      ] },
  ]},
  { id: 'community', label: 'Community', groups: [
      { title: 'On the park', items: [
        { label: 'Business Search', to: 'directory' },
        { label: 'Interactive Map', to: 'sitemap' },
        { label: 'DBV News', to: 'community' },
        { label: 'Testimonials', to: 'community' },
      ] },
      { title: 'Get involved', items: [
        { label: 'Community', to: 'community' },
        { label: 'Tenders', to: 'community' },
        { label: 'Vacancies', to: 'community' },
      ] },
  ]},
  { id: 'contact', label: 'Contact', to: 'contact' },
];

function UtilityBar() {
  return (
    <div style={{
      background: 'var(--dbv-forest)', color: 'var(--dbv-stone)',
      fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.10em',
      padding: '8px 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>WOODLAND LODGE · STAFFORDSHIRE · ST18 9FJ</span>
        <span style={{ display: 'flex', gap: 24, whiteSpace: 'nowrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}><Icon name="phone" size={11} /> 01785&nbsp;711600</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}><Icon name="mail" size={11} /> ENQUIRIES@DBV.CO.UK</span>
        </span>
      </div>
    </div>
  );
}

function NavItem({ item, open, onOpen, onClose }) {
  const { navigate, page } = useRouter();
  const hasMenu = !!item.groups;
  const isActive = item.to === page || (hasMenu && item.id === page);
  return (
    <div
      onMouseEnter={() => hasMenu && onOpen(item.id)}
      onMouseLeave={() => hasMenu && onClose()}
      style={{ position: 'relative' }}
    >
      <a
        href={item.to ? `#${item.to}` : '#'}
        onClick={(e) => { if (item.to) { e.preventDefault(); navigate(item.to); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
          letterSpacing: '0.04em', color: 'var(--dbv-forest)',
          textDecoration: 'none',
          borderBottom: (open || isActive) ? '1px solid var(--dbv-stone)' : '1px solid transparent',
          padding: '10px 0', transition: 'border-color .2s, color .2s',
        }}>
        {item.label}
        {hasMenu && <Icon name="chevronDown" size={12} stroke={2} />}
      </a>
      {hasMenu && open && (
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          marginTop: 0, paddingTop: 14, zIndex: 50,
        }}>
          <div className="anim-menu-pop">
            <Megamenu item={item} onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  );
}

function Megamenu({ item, onClose }) {
  const { navigate } = useRouter();
  const cols = item.feature ? '1fr 1fr 1.2fr' : item.groups.map(() => '1fr').join(' ');
  return (
    <div style={{
      width: item.feature ? 720 : 320 * item.groups.length,
      background: 'var(--dbv-paper)',
      boxShadow: '0 24px 60px rgba(28,56,41,.18), 0 4px 14px rgba(28,56,41,.08)',
      borderRadius: 6, padding: 28, display: 'grid',
      gridTemplateColumns: cols, gap: 28,
      borderTop: '3px solid var(--dbv-stone)',
    }}>
      {item.groups.map((g, i) => (
        <div key={i}>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--dbv-sage)', marginBottom: 14,
          }}>{g.title}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {g.items.map(it => (
              <li key={it.label}>
                <a href={`#${it.to}`}
                  onClick={(e) => { e.preventDefault(); navigate(it.to); onClose && onClose(); }}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-forest)',
                    textDecoration: 'none', borderBottom: '1px solid transparent',
                    paddingBottom: 1, transition: 'border-color .2s,color .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderBottomColor = 'var(--dbv-stone)'; e.currentTarget.style.color = 'var(--dbv-sage)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.color = 'var(--dbv-forest)'; }}
                >{it.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {item.feature && (
        <div style={{
          background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          padding: 22, borderRadius: 4, display: 'flex',
          flexDirection: 'column', justifyContent: 'space-between',
          backgroundImage: 'linear-gradient(135deg,var(--dbv-forest) 0%,#0E1F14 100%)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--dbv-stone)',
            }}>{item.feature.eyebrow}</div>
            <div style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22,
              lineHeight: 1.2, marginTop: 10,
            }}>{item.feature.title}</div>
          </div>
          <a href={`#${item.feature.to}`}
            onClick={(e) => { e.preventDefault(); navigate(item.feature.to); onClose && onClose(); }}
            style={{
              marginTop: 18, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--dbv-cream)',
              textDecoration: 'none', borderBottom: '1px solid var(--dbv-stone)',
              paddingBottom: 2, alignSelf: 'flex-start',
            }}>{item.feature.cta} →</a>
        </div>
      )}
    </div>
  );
}

function Header() {
  const { navigate } = useRouter();
  const [openId, setOpenId] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.HEADER_SEARCH_QUERY = query.trim();
      navigate('directory');
    } else {
      navigate('directory');
    }
  };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40 }}>
      <UtilityBar />
      <div style={{
        background: scrolled ? 'rgba(251,248,242,.96)' : 'var(--dbv-paper)',
        backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
        borderBottom: '1px solid rgba(28,56,41,.10)',
        transition: 'background .2s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '18px 32px' }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', border: 0 }}>
            <img src="assets/dbv-logo.png" alt="Dunston Business Village" style={{ height: 42, display: 'block' }} />
          </a>
          <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 28 }}>
            {NAV.map(item => (
              <NavItem key={item.id} item={item}
                open={openId === item.id}
                onOpen={setOpenId}
                onClose={() => setOpenId(null)} />
            ))}
          </nav>
          <form className="header-search" style={{ width: 220 }} onSubmit={onSearch}>
            <span className="header-search-icon"><Icon name="search" size={14} /></span>
            <input placeholder="Find a business…" aria-label="Find a business on site"
              value={query} onChange={e => setQuery(e.target.value)} />
            <button className="header-search-btn" type="submit">Go</button>
          </form>
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="btn btn--primary btn--sm">Book a Viewing</a>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
