// Nav.jsx — mobile-safe hamburger nav

function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
    <>
      <nav style={s.root}>
        <div style={s.inner}>
          <a href="/" className="rh-nav-brand">Rhyno<span>flow</span></a>

          {/* Desktop links — classes defined in index.html <head> */}
          <div className="rh-nav-links">
            {links.map((l, i) => (
              <a key={l.label} href={l.href}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                className="rh-nav-link"
                style={{color: hover === i ? '#0a0a0a' : '#525252'}}
              >{l.label}</a>
            ))}
            <a href="https://cal.com/deng-awak-hzu0y1/30min" target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}
              className="rh-nav-cta"
              style={{background: ctaHover ? '#00b34a' : '#00c853'}}
            >Book a call</a>
          </div>

          {/* Hamburger */}
          <button className="rh-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span style={{...s.bar, transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none'}} />
            <span style={{...s.bar, opacity: menuOpen ? 0 : 1}} />
            <span style={{...s.bar, transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'}} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — rendered outside nav so it doesn't break sticky layout */}
      <div className={`rh-drawer${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
            className="rh-nav-link" style={{padding:'13px 0', borderBottom:'1px solid #f0f0f0', fontSize:15}}
          >{l.label}</a>
        ))}
        <a href="https://cal.com/deng-awak-hzu0y1/30min" target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)} className="rh-nav-cta"
          style={{marginTop:14, textAlign:'center', fontSize:15}}>Book a call →</a>
      </div>
    </>
  );
}

const s = {
  root: { position:'sticky', top:0, zIndex:20, width:'100%', boxSizing:'border-box', background:'rgba(250,250,250,0.95)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderBottom:'1px solid #e5e5e5' },
  inner: { width:'100%', maxWidth:1200, margin:'0 auto', padding:'14px 32px', boxSizing:'border-box', display:'flex', alignItems:'center', justifyContent:'space-between' },
  brand: { fontSize:18, fontWeight:800, letterSpacing:'-0.035em', fontFamily:"'Inter',sans-serif", color:'#0a0a0a', textDecoration:'none' },
  link: { fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:500, textDecoration:'none', transition:'color 150ms' },
  cta: { fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, color:'#0a0a0a', textDecoration:'none', padding:'9px 16px', borderRadius:999, transition:'background 150ms' },
  bar: { display:'block', width:24, height:2, background:'#0a0a0a', borderRadius:2, transition:'transform 0.25s, opacity 0.25s' },
  drawerLink: { fontFamily:"Inter,sans-serif", fontSize:15, fontWeight:500, color:'#0a0a0a', textDecoration:'none', padding:'13px 0', borderBottom:'1px solid #f0f0f0' },
  drawerCta: { marginTop:14, fontFamily:"Inter,sans-serif", fontSize:15, fontWeight:700, color:'#0a0a0a', textDecoration:'none', background:'#00c853', borderRadius:999, padding:'14px 20px', textAlign:'center' },
};

window.Nav = Nav;
