// ui_kits/website/Nav.jsx

function Nav() {
  const [hover, setHover] = React.useState(null);
  const [ctaHover, setCtaHover] = React.useState(false);
  const links = [
    { label: 'How it works',    href: '#how' },
    { label: 'Pricing',         href: '#pricing' },
    { label: 'For Foreninger',  href: '/for-foreninger.html' },
    { label: 'For Accountants', href: '/for-revisorer.html' },
    { label: 'About',           href: '/about.html' },
  ];
  return (
    <nav style={navStyles.root}>
      <div style={navStyles.inner}>
        <a href="#" style={navStyles.brand}>
          <span style={navStyles.brandText}>
            <span>Rhyno</span><span style={navStyles.brandAccent}>flow</span>
          </span>
        </a>
        <div style={navStyles.links}>
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ ...navStyles.link, color: hover === i ? '#0a0a0a' : '#525252' }}
            >{l.label}</a>
          ))}
          <a
            href="https://cal.com/deng-awak-hzu0y1/30min"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              ...navStyles.cta,
              background: ctaHover ? '#00b34a' : '#00c853',
            }}
          >Book a call</a>
        </div>
      </div>
    </nav>
  );
}

const navStyles = {
  root: {
    position: 'sticky', top: 0, zIndex: 20,
    background: 'rgba(250,250,250,0.72)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e5e5e5',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  brandMark: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 },
  pill: { height: 4, borderRadius: 999, background: '#0a0a0a' },
  brandText: { color: '#0a0a0a', fontSize: 18, fontWeight: 800, letterSpacing: '-0.035em', fontFamily: "'Inter', sans-serif" },
  brandAccent: { color: '#00c853' },
  links: { display: 'flex', alignItems: 'center', gap: 28 },
  link: {
    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
    textDecoration: 'none', transition: 'color 150ms cubic-bezier(0.2,0,0,1)',
  },
  cta: {
    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
    color: '#0a0a0a', textDecoration: 'none',
    padding: '9px 16px', borderRadius: 999,
    transition: 'background 150ms cubic-bezier(0.2,0,0,1)',
  },
};

window.Nav = Nav;
