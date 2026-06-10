// Shared page components — PageHero, SectionHead, etc.

function PageHero({ eyebrow, title, italic, subtitle, dark, children, height, footer }) {
  return (
    <section style={{
      background: dark ? 'var(--dbv-forest)' : 'var(--dbv-cream)',
      color: dark ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
      padding: '88px 0 96px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft stone wash for cream heroes */}
      {!dark && (
        <div style={{
          position: 'absolute', right: -240, top: 40, width: 640, height: 640,
          background: 'radial-gradient(circle, rgba(200,184,154,.45) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
      )}
      <div className="container" style={{ position: 'relative', maxWidth: 1180 }}>
        <span className="eyebrow" style={dark ? { color: 'var(--dbv-stone)' } : {}}>{eyebrow}</span>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 500,
          fontSize: 72, lineHeight: 1.08, letterSpacing: '-0.018em',
          color: dark ? 'var(--dbv-cream)' : 'var(--dbv-forest)',
          margin: '20px 0 28px', maxWidth: 1000,
        }}>
          {title}{italic && (<><br/><span style={{ fontStyle: 'italic' }}>{italic}</span></>)}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: 20, lineHeight: 1.55,
            color: dark ? 'rgba(245,240,232,.80)' : 'var(--dbv-graphite)',
            maxWidth: 720, margin: '0 0 12px',
          }}>{subtitle}</p>
        )}
        {children}
        {footer}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, italic, title, subtitle, dark, align = 'center' }) {
  const isCenter = align === 'center';
  return (
    <div className="section-head" style={{
      textAlign: isCenter ? 'center' : 'left',
      margin: isCenter ? '0 auto 56px' : '0 0 48px',
      maxWidth: isCenter ? 760 : 880,
    }}>
      <span className="eyebrow" style={dark ? { color: 'var(--dbv-stone)' } : {}}>{eyebrow}</span>
      {italic && (
        <div className="ornament" style={{ color: 'var(--dbv-stone-deep)', justifyContent: isCenter ? 'center' : 'flex-start' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: dark ? 'var(--dbv-stone)' : 'var(--dbv-sage)' }}>{italic}</span>
        </div>
      )}
      <h2 style={{ color: dark ? 'var(--dbv-cream)' : 'var(--dbv-forest)' }}>{title}</h2>
      {subtitle && <p style={{ color: dark ? 'rgba(245,240,232,.80)' : 'var(--dbv-graphite)' }}>{subtitle}</p>}
    </div>
  );
}

// Breadcrumb pill row
function Crumbs({ items }) {
  return (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'center',
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dbv-sage)',
      marginBottom: 20,
    }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: 'var(--dbv-stone)' }}>/</span>}
          {it.to ? <PageLink to={it.to} style={{ color: 'var(--dbv-sage)' }}>{it.label}</PageLink> : <span style={{ color: 'var(--dbv-forest)' }}>{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// Stone backplate behind a child element (decorative photo frame)
function StoneFramed({ children, offset = 20, aspect = '4/5' }) {
  return (
    <div style={{ position: 'relative', aspectRatio: aspect, width: '100%' }}>
      <div style={{
        position: 'absolute', right: -offset, bottom: -offset,
        width: '92%', height: '92%', background: 'var(--dbv-stone)', borderRadius: 4,
      }} />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 4, overflow: 'hidden', boxShadow: '0 24px 56px rgba(28,56,41,.25)' }}>
        {children}
      </div>
    </div>
  );
}

// A reusable "stat" component
function MetricStat({ number, unit, label, dark }) {
  return (
    <div>
      <div>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: dark ? 'var(--dbv-cream)' : 'var(--dbv-forest)', fontWeight: 500, letterSpacing: '-.01em' }}>{number}</span>
        {unit && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: dark ? 'var(--dbv-stone)' : 'var(--dbv-mist)', marginLeft: 4 }}>{unit}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: dark ? 'rgba(245,240,232,.7)' : 'var(--dbv-graphite)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
    </div>
  );
}

// Subtle in-page anchor link
function LinkArrow({ children, to, italic }) {
  const Tag = to ? PageLink : 'a';
  return (
    <Tag to={to} href={to ? undefined : '#'} className={italic ? 'link-italic' : ''}
      style={italic ? {} : {
        fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.10em', textTransform: 'uppercase',
        color: 'var(--dbv-forest)', textDecoration: 'none', borderBottom: 0,
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
      {children} <Icon name="arrowRight" size={12} stroke={2} />
    </Tag>
  );
}

Object.assign(window, { PageHero, SectionHead, Crumbs, StoneFramed, MetricStat, LinkArrow });
