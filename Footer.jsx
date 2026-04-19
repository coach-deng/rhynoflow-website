// ui_kits/website/Footer.jsx

function Footer() {
  const cols = [
    { label: 'PRODUCT', items: [
      { label: 'How it works', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'For Foreninger', href: '#foreninger' },
      { label: 'For Revisorer', href: '#revisor' },
    ]},
    { label: 'COMPANY', items: [
      { label: 'About', href: '#about' },
      { label: 'Pilot programme', href: '#proof' },
      { label: 'Contact', href: 'mailto:hello@rhynoflow.com' },
    ]},
    { label: 'LEGAL', items: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Databehandler-aftale', href: '#dpa' },
    ]},
  ];
  return (
    <footer style={ftStyles.root}>
      <div style={ftStyles.inner}>
        <div style={ftStyles.top}>
          <div style={ftStyles.brandCol}>
            <a href="#" style={ftStyles.brand}>
              <span style={ftStyles.brandText}>
                <span>Rhyno</span><span style={ftStyles.brandAccent}>flow</span>
              </span>
            </a>
            <p style={ftStyles.mission}>
              Admin automation for Danish foreninger, SMBs, and revisorer. Quiet, functional, charged through.
            </p>
            <div style={ftStyles.contact}>
              <a href="mailto:hello@rhynoflow.com" style={ftStyles.contactLink}>hello@rhynoflow.com</a>
              <a href="https://rhynoflow.com" style={ftStyles.contactLink}>rhynoflow.com</a>
              <span style={ftStyles.cvr}>CVR 43367994</span>
            </div>
          </div>

          <div style={ftStyles.cols}>
            {cols.map((col) => (
              <div key={col.label} style={ftStyles.col}>
                <span style={ftStyles.colLabel}>{col.label}</span>
                {col.items.map((it) => (
                  <a key={it.label} href={it.href} style={ftStyles.colLink}>{it.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={ftStyles.bottom}>
          <span style={ftStyles.copy}>© 2026 Rhynoflow ApS · København</span>
          <div style={ftStyles.status}>
            <span style={ftStyles.statusDot} />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ftStyles = {
  root: { background: '#0a0a0a', color: '#a3a3a3', borderTop: '1px solid rgba(250,250,250,0.06)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '72px 32px 40px' },
  top: { display: 'grid', gridTemplateColumns: 'minmax(220px, 1.2fr) minmax(0, 2fr)', gap: 64, alignItems: 'flex-start', paddingBottom: 56 },
  brandCol: { display: 'flex', flexDirection: 'column', gap: 18 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
  mark: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 },
  pill: { height: 4, borderRadius: 999, background: '#00c853' },
  brandText: { color: '#fafafa', fontSize: 18, fontWeight: 800, letterSpacing: '-0.035em' },
  brandAccent: { color: '#00c853' },
  mission: { margin: 0, fontSize: 14, color: '#a3a3a3', lineHeight: 1.55 },
  contact: { display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 },
  contactLink: { fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#fafafa', textDecoration: 'none' },
  cvr: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#525252', letterSpacing: '0.04em' },

  cols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
  col: { display: 'flex', flexDirection: 'column', gap: 12 },
  colLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', color: '#fafafa', marginBottom: 4 },
  colLink: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a3a3a3', textDecoration: 'none' },

  bottom: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: 28, borderTop: '1px solid rgba(250,250,250,0.06)',
  },
  copy: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#525252', letterSpacing: '0.04em' },
  status: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3',
  },
  statusDot: { width: 6, height: 6, borderRadius: 999, background: '#00c853', boxShadow: '0 0 0 3px rgba(0,200,83,0.14)' },
};

window.Footer = Footer;
