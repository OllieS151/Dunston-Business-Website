// Footer — adapted from the UI kit to route via the app router.

function AwardSeal({ label, year, kind = 'stone' }) {
  const isStone = kind === 'stone';
  return (
    <div style={{
      width: 72, height: 72, borderRadius: '50%',
      border: isStone ? '1.5px solid var(--dbv-stone)' : '1.5px solid var(--dbv-cream)',
      background: isStone ? 'transparent' : 'var(--dbv-cream)',
      color: isStone ? 'var(--dbv-stone)' : 'var(--dbv-forest)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
    }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 8, letterSpacing: '0.10em', opacity: 0.85 }}>{year}</span>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 600, lineHeight: 1, marginTop: 2 }}>{label}</span>
    </div>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.20em', textTransform: 'uppercase',
        color: 'var(--dbv-stone)', marginBottom: 18,
      }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {children}
      </div>
    </div>
  );
}

function FLink({ to, children }) {
  return (
    <PageLink to={to} style={{
      padding: '5px 0',
      fontFamily: 'var(--font-sans)', fontSize: 14,
      color: 'var(--dbv-cream)',
      borderBottom: '1px solid transparent',
      transition: 'color .2s',
      width: 'fit-content',
    }}>{children}</PageLink>
  );
}

function Footer() {
  const { navigate } = useRouter();
  return (
    <footer style={{ background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container" style={{ padding: '72px 32px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr', gap: 48 }}>
          <div>
            <img src="assets/dbv-logo-stacked.png" alt="DBV"
              style={{ height: 96, background: 'var(--dbv-cream)', padding: '8px 14px', borderRadius: 2 }} />
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.35, color: 'var(--dbv-cream)', margin: '20px 0 24px', maxWidth: 280 }}>
              Eight restored heritage buildings.<br />One remarkable estate.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <AwardSeal label="ISO" year="9001" />
              <AwardSeal label="EU" year="ERDF" />
              <AwardSeal label="2026" year="RURAL" kind="cream" />
            </div>
          </div>
          <FooterCol title="Explore">
            <FLink to="about">Our story</FLink>
            <FLink to="vision">Our vision</FLink>
            <FLink to="spaces">All spaces</FLink>
            <FLink to="amenities">Amenities</FLink>
            <FLink to="location">Find us</FLink>
            <FLink to="community">DBV news</FLink>
            <FLink to="contact">Book a viewing</FLink>
          </FooterCol>
          <FooterCol title="For tenants">
            <FLink to="directory">Business search</FLink>
            <FLink to="sitemap">Interactive site map</FLink>
            <FLink to="community">Community</FLink>
            <FLink to="amenities">Discount club</FLink>
            <FLink to="community">Tenders & vacancies</FLink>
            <FLink to="amenities">Reception</FLink>
          </FooterCol>
          <FooterCol title="Visit">
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.5, color: 'var(--dbv-cream)', margin: '0 0 16px' }}>
              Woodland Lodge<br />Dunston Business Village<br />Dunston, ST18 9FJ
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--dbv-stone)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={13} /> 01785 711600</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="mail" size={13} /> enquiries@dbv.co.uk</span>
              <PageLink to="location" style={{ color: 'var(--dbv-cream)', borderBottom: '1px solid var(--dbv-stone)', padding: '4px 0', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: 15 }}>
                <Icon name="mapPin" size={13} /> Open in map
              </PageLink>
            </div>
          </FooterCol>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(245,240,232,.10)', padding: '24px 0', background: 'var(--dbv-forest-deep)' }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
          fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(245,240,232,.55)',
          letterSpacing: '0.04em', flexWrap: 'wrap',
        }}>
          <span>© 2008–2026 Dunston Business Village Ltd. Company No. 4223216 · VAT 775 9676 54</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent' }}>Legal notice</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent' }}>Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
