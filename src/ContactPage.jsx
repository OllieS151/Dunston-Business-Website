// Contact page — form + details + bottom banner.

function ContactForm() {
  const [data, setData] = React.useState({
    name: '', company: '', email: '', phone: '',
    enquiry: 'Office Space Enquiry', size: '500–2,000 sq ft',
    message: '',
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = 'Please tell us your name.';
    if (!data.email.trim()) e.email = 'We need an email address to reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "That doesn't look quite right.";
    if (!data.message.trim()) e.message = 'Tell us a little about your enquiry.';
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
        padding: '56px 56px', borderRadius: 6,
        textAlign: 'center',
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'var(--dbv-stone)', color: 'var(--dbv-forest)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
        }}>
          <Icon name="check" size={32} stroke={2.5} />
        </div>
        <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500 }}>Thank you, {data.name.split(' ')[0]}.</h3>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--dbv-stone)', margin: '0 0 20px' }}>
          Your enquiry is with us. We answer all messages within one business day.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(245,240,232,.7)', margin: 0 }}>
          We'll be in touch on <strong>{data.email}</strong>. If it's urgent, call 01785 711600 weekdays 9–5.
        </p>
      </div>
    );
  }

  const showSizeField = data.enquiry === 'Office Space Enquiry';

  return (
    <form onSubmit={onSubmit} style={{
      background: 'var(--dbv-paper)', borderRadius: 6,
      border: '1px solid var(--color-border)',
      padding: '40px 44px',
      boxShadow: '0 6px 18px rgba(28,56,41,.08)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <Field label="Full name" required error={errors.name}>
          <input type="text" className="field-input" value={data.name} onChange={e => set('name', e.target.value)} />
        </Field>
        <Field label="Company name">
          <input type="text" className="field-input" value={data.company} onChange={e => set('company', e.target.value)} />
        </Field>
        <Field label="Email address" required error={errors.email}>
          <input type="email" className="field-input" value={data.email} onChange={e => set('email', e.target.value)} />
        </Field>
        <Field label="Phone number">
          <input type="tel" className="field-input" value={data.phone} onChange={e => set('phone', e.target.value)} />
        </Field>
      </div>
      <Field label="Enquiry type">
        <select className="field-input" value={data.enquiry} onChange={e => set('enquiry', e.target.value)} style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C3829%27 stroke-width=%221.8%27><path d=%27m6 9 6 6 6-6%27/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px', paddingRight: 44 }}>
          {['Office Space Enquiry', 'Virtual Office', 'General Enquiry', 'Media', 'Other'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>
      {showSizeField && (
        <div style={{ marginTop: 20 }}>
          <Field label="Office size required">
            <select className="field-input" value={data.size} onChange={e => set('size', e.target.value)} style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C3829%27 stroke-width=%221.8%27><path d=%27m6 9 6 6 6-6%27/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px', paddingRight: 44 }}>
              {['Under 500 sq ft', '500–2,000 sq ft', '2,000–5,000 sq ft', '5,000+ sq ft'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        <Field label="Message" required error={errors.message}>
          <textarea className="field-input" rows={5} value={data.message} onChange={e => set('message', e.target.value)} placeholder="Tell us a little about your enquiry — timing, team size, anything we should know." style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }} />
        </Field>
      </div>
      <button type="submit" className="btn btn--primary btn--lg" style={{
        marginTop: 24, width: '100%', justifyContent: 'center',
        fontSize: 14,
      }}>Send Enquiry <Icon name="arrowRight" size={14} stroke={2} /></button>
      <p style={{ marginTop: 14, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--dbv-mist)', textAlign: 'center' }}>
        We answer all enquiries within one business day. No marketing list.
      </p>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="field-label">
        {label}
        {required && <span style={{ color: 'var(--color-danger)', marginLeft: 4 }}>*</span>}
      </label>
      {children}
      {error && (
        <div style={{ marginTop: 6, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--color-danger)' }}>
          {error}
        </div>
      )}
    </div>
  );
}

// ---------- CONTACT DETAILS / MAP ----------
function ContactDetails() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Map */}
      <div style={{
        position: 'relative', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden',
        border: '1px solid var(--color-border)', boxShadow: '0 6px 18px rgba(28,56,41,.08)',
        background: 'var(--dbv-paper)',
      }}>
        <svg viewBox="0 0 480 360" style={{ width: '100%', height: '100%' }}>
          <defs>
            <pattern id="cgrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(28,56,41,.06)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="480" height="360" fill="var(--dbv-cream)"/>
          <rect width="480" height="360" fill="url(#cgrid)"/>
          <g fill="#7A9B76" opacity="0.30">
            <ellipse cx="80" cy="80" rx="60" ry="40"/>
            <ellipse cx="400" cy="280" rx="60" ry="40"/>
          </g>
          <path d="M 360 0 L 360 360" fill="none" stroke="#A24B3A" strokeWidth="8" opacity="0.5"/>
          <text x="368" y="40" fontFamily="var(--font-sans)" fontSize="11" fill="#A24B3A" fontWeight="700">M6</text>
          <path d="M 0 240 Q 150 230 240 220 T 480 200" fill="none" stroke="#1C3829" strokeWidth="2.5" opacity="0.55"/>
          <g transform="translate(220,200)">
            <circle r="32" fill="var(--dbv-forest)"/>
            <circle r="32" fill="none" stroke="var(--dbv-stone)" strokeWidth="2"/>
            <text textAnchor="middle" y="-6" fontFamily="var(--font-sans)" fontSize="9" fontWeight="700" fill="var(--dbv-stone)" letterSpacing="0.16em">DBV</text>
            <text textAnchor="middle" y="12" fontFamily="var(--font-serif)" fontStyle="italic" fontSize="13" fill="var(--dbv-cream)">ST18 9FJ</text>
          </g>
          <g transform="translate(450,330)">
            <circle r="18" fill="var(--dbv-cream)" stroke="#1C3829" strokeWidth="1"/>
            <path d="M 0 -12 L 3 0 L 0 3 L -3 0 Z" fill="#1C3829"/>
            <text textAnchor="middle" y="-15" fontFamily="var(--font-sans)" fontSize="7" fill="#1C3829" fontWeight="700">N</text>
          </g>
        </svg>
        <a href="https://maps.google.co.uk/maps?q=Dunston+Business+Village+Ltd" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', bottom: 16, right: 16,
          fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.10em', textTransform: 'uppercase',
          background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
          padding: '10px 16px', borderRadius: 2, border: 0,
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>Get Directions <Icon name="arrowRight" size={12} stroke={2} /></a>
      </div>
      {/* Address card */}
      <div style={{ background: 'var(--dbv-forest)', color: 'var(--dbv-cream)', borderRadius: 6, padding: '28px 32px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-stone)', fontWeight: 600, marginBottom: 12 }}>Address</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.45, margin: 0, color: 'var(--dbv-cream)' }}>
          Woodland Lodge,<br/>Dunston Business Village,<br/>Dunston, Staffordshire,<br/>ST18 9FJ
        </p>
      </div>
      <div style={{
        background: 'var(--dbv-paper)', borderRadius: 6, padding: '28px 32px',
        border: '1px solid var(--color-border)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600, marginBottom: 8 }}>Phone</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dbv-forest)', fontWeight: 500 }}>01785 711600</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', marginTop: 4 }}>Mon–Fri · 9am to 5pm</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600, marginBottom: 8 }}>Email</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--dbv-forest)', fontWeight: 500 }}>enquiries@dbv.co.uk</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)', marginTop: 4 }}>Answered within 1 business day</div>
          </div>
        </div>
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--color-rule)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dbv-sage)', fontWeight: 600, marginBottom: 12 }}>Opening hours</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--dbv-graphite)' }}>
            <div>Monday — Thursday</div><div style={{ fontFamily: 'var(--font-serif)' }}>8:30 am — 5:30 pm</div>
            <div>Friday</div><div style={{ fontFamily: 'var(--font-serif)' }}>8:30 am — 4:30 pm</div>
            <div>Saturday — Sunday</div><div style={{ fontFamily: 'var(--font-serif)', color: 'var(--dbv-mist)' }}>By appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- QUICK LINKS ----------
function QuickLinks() {
  const links = [
    { icon: 'phone', label: 'Video Tour', sub: 'A 4-minute walk around the village' },
    { icon: 'mapPin', label: 'Street View Tour', sub: 'Google Maps · external', external: 'https://maps.google.co.uk/maps?q=Dunston+Business+Village+Ltd' },
    { icon: 'star', label: 'Gallery', sub: 'Photos of every building' },
    { icon: 'building', label: 'Site Layout', sub: 'Interactive site map', to: 'sitemap' },
    { icon: 'car', label: 'Find Us', sub: 'Travel options and directions', to: 'location' },
  ];
  return (
    <section style={{ padding: '88px 0', background: 'var(--dbv-cream-warm)' }}>
      <div className="container">
        <SectionHead
          eyebrow="Quick links"
          italic="other ways to explore"
          title="Before you call."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
          {links.map((l, i) => {
            const Wrap = l.to ? PageLink : 'a';
            const wrapProps = l.to ? { to: l.to } : { href: l.external || '#', target: l.external ? '_blank' : undefined, rel: l.external ? 'noopener noreferrer' : undefined };
            return (
              <Wrap key={i} {...wrapProps} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12,
                background: 'var(--dbv-paper)', border: '1px solid var(--color-border)',
                borderRadius: 6, padding: '22px 24px',
                textDecoration: 'none', color: 'var(--dbv-forest)',
                transition: 'transform .2s, box-shadow .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 28px rgba(28,56,41,.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--dbv-forest)', color: 'var(--dbv-cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={l.icon} size={18} stroke={1.4} />
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 500 }}>{l.label}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--dbv-mist)' }}>{l.sub}</div>
              </Wrap>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- INTRANET BANNER ----------
function IntranetBanner() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--dbv-forest)', color: 'var(--dbv-cream)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--dbv-stone)' }}>For tenants</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 36, lineHeight: 1.1, color: 'var(--dbv-cream)', margin: '10px 0 8px' }}>
            Intranet & Tenant Access.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'rgba(245,240,232,.85)', margin: 0 }}>
            Existing tenants can access the DBV Intranet and Forum using their login credentials.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#" className="btn btn--secondary">Tenant Login</a>
          <a href="https://forum.dunstonbusinessvillage.com" target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">DBV Forum →</a>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <div data-screen-label="Contact">
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you."
        subtitle="Whether you're looking for office space, have a question about our services, or just want to find out more about life at DBV — drop us a note. We answer all enquiries within one business day."
      />
      <section style={{ padding: '104px 0', background: 'var(--dbv-cream)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'start' }}>
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
      <QuickLinks />
      <IntranetBanner />
    </div>
  );
}

window.PAGES_REGISTRY = window.PAGES_REGISTRY || {};
window.PAGES_REGISTRY.contact = ContactPage;
