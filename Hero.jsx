// ui_kits/website/Hero.jsx — light, tech-forward, with live side panel.

function Hero() {
  const [primaryHover, setPrimaryHover] = React.useState(false);
  const [ghostHover, setGhostHover] = React.useState(false);

  // Typewriter for the tagline accent
  const words = ['charged through.', 'handled.', 'done before 07:00.', 'off your plate.'];
  const [wIdx, setWIdx] = React.useState(0);
  const [typed, setTyped] = React.useState(words[0]);
  const [dir, setDir] = React.useState(1); // 1 = typing, -1 = erasing

  React.useEffect(() => {
    const target = words[wIdx];
    let t;
    if (dir === 1) {
      if (typed === target) {
        t = setTimeout(() => setDir(-1), 2400);
      } else {
        t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 55);
      }
    } else {
      if (typed === '') {
        setDir(1);
        setWIdx((wIdx + 1) % words.length);
      } else {
        t = setTimeout(() => setTyped(typed.slice(0, -1)), 28);
      }
    }
    return () => clearTimeout(t);
  }, [typed, dir, wIdx]);

  return (
    <section style={heroStyles.root}>
      <div style={heroStyles.gridOverlay} aria-hidden="true" />
      <div style={heroStyles.gridOverlayFine} aria-hidden="true" />
      <div style={heroStyles.inner} data-rh="hero-inner">
        {/* Left: headline */}
        <div style={heroStyles.left}>
          <div style={heroStyles.meta}>
            <span style={heroStyles.metaNum}>01</span>
            <span style={heroStyles.metaSlash}>/</span>
            <span style={heroStyles.metaLabel}>RHYNOFLOW · IN PILOT · APR 2026</span>
          </div>

          <h1 style={heroStyles.title} data-rh="hero-title">
            <span>Your admin,</span>
            <br />
            <span style={heroStyles.titleAccentWrap}>
              <span style={heroStyles.titleAccentGhost} aria-hidden="true">done before 07:00.</span>
              <span style={heroStyles.titleAccent}>
                {typed}
                <span style={heroStyles.caret}>▌</span>
              </span>
            </span>
          </h1>

          <p style={heroStyles.sub} data-rh="hero-sub">
            Rhynoflow handles the emails, reminders, reports, and admin
            so you don't have to. You run your business. It runs the inbox.
          </p>

          <div style={heroStyles.ctas} data-rh="hero-ctas">
            <a
              href="#demo"
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              data-rh="hero-cta-primary" style={{ ...heroStyles.primary, background: primaryHover ? '#00b34a' : '#00c853' }}
            >
              Try the live agent
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
            <a
              href="#how"
              onMouseEnter={() => setGhostHover(true)}
              onMouseLeave={() => setGhostHover(false)}
              data-rh="hero-cta-ghost" style={{
                ...heroStyles.ghost,
                background: ghostHover ? '#f5f5f5' : '#ffffff',
                borderColor: ghostHover ? '#d4d4d4' : '#e5e5e5',
              }}
            >See how it works</a>
          </div>

          <div style={heroStyles.caption} data-rh="hero-caption">
            <span style={heroStyles.captionLabel}>BUILT FOR</span>
            <span>Foreninger · SMBs · Revisorer</span>
            <span style={heroStyles.captionDivider}>·</span>
            <span>Danmark · EU-region</span>
          </div>
        </div>

        {/* Right: terminal-style live panel */}
        <div data-rh="hero-terminal"><HeroTerminal /></div>
      </div>
    </section>
  );
}

function HeroTerminal() {
  const lines = [
    { t: 0,    txt: '$ rhyno status',                          cls: 'cmd' },
    { t: 500,  txt: 'connected · eu-west-1 · v0.4.2',          cls: 'out' },
    { t: 900,  txt: '$ rhyno tail --inbox',                    cls: 'cmd' },
    { t: 1400, txt: '[ingest]   msg_8f2c1a · kunde@example.dk',cls: 'out' },
    { t: 1700, txt: '[classify] intent=invoice_question · p=med', cls: 'out' },
    { t: 2000, txt: '[policy]   tone=da_formal · cc=accountant', cls: 'out' },
    { t: 2400, txt: '[draft]    ready · 187 tokens · 1.2s',    cls: 'ok'  },
    { t: 2800, txt: '[review]   → awaiting founder@talata',    cls: 'out' },
    { t: 3300, txt: '$ _',                                     cls: 'cmd' },
  ];
  const [shown, setShown] = React.useState(0);

  React.useEffect(() => {
    const timers = lines.map((l, i) => setTimeout(() => setShown(i + 1), l.t));
    // Loop every 6s
    const loop = setTimeout(() => setShown(0), 6200);
    const replay = setTimeout(() => {
      lines.forEach((l, i) => setTimeout(() => setShown(i + 1), l.t));
    }, 6300);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loop);
      clearTimeout(replay);
    };
  // eslint-disable-next-line
  }, [shown === 0 ? 'restart' : 'steady']);

  const colorFor = { cmd: '#fafafa', out: '#a3a3a3', ok: '#00c853' };

  return (
    <div style={termStyles.wrap}>
      <div style={termStyles.chrome}>
        <div style={termStyles.dots}>
          <span style={{ ...termStyles.dot, background: '#ef4444' }} />
          <span style={{ ...termStyles.dot, background: '#f59e0b' }} />
          <span style={{ ...termStyles.dot, background: '#00c853' }} />
        </div>
        <span style={termStyles.chromeTitle}>rhyno@prod · ~/talata-bk</span>
        <span style={termStyles.chromeRight}>
          <span style={termStyles.liveDotOuter}>
            <span style={termStyles.liveDotPulse} />
            <span style={termStyles.liveDotCore} />
          </span>
          LIVE
        </span>
      </div>
      <div style={termStyles.body}>
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} style={{ ...termStyles.line, color: colorFor[l.cls] || '#fafafa' }}>
            {l.txt}
          </div>
        ))}
      </div>
      <div style={termStyles.footer}>
        <span>eu-west-1</span>
        <span>·</span>
        <span>claude-haiku-4-5</span>
        <span>·</span>
        <span>p95 184ms</span>
      </div>
    </div>
  );
}

const heroStyles = {
  root: {
    position: 'relative',
    background: '#fafafa',
    overflow: 'hidden',
    borderBottom: '1px solid #e5e5e5',
  },
  gridOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage:
      'linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)',
    backgroundSize: '80px 80px',
    maskImage: 'radial-gradient(ellipse at 30% 40%, #000 30%, transparent 80%)',
    WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, #000 30%, transparent 80%)',
    pointerEvents: 'none',
  },
  gridOverlayFine: {
    position: 'absolute', inset: 0,
    backgroundImage:
      'linear-gradient(to right, rgba(10,10,10,0.025) 1px, transparent 1px)',
    backgroundSize: '16px 100%',
    maskImage: 'linear-gradient(to bottom, transparent 0%, #000 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 100%)',
    pointerEvents: 'none',
  },
  inner: {
    position: 'relative',
    maxWidth: 1200, margin: '0 auto',
    padding: '96px 32px 120px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
    gap: 56, alignItems: 'center',
  },
  left: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0, overflow: 'hidden' },
  meta: {
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    color: '#525252', letterSpacing: '0.06em', marginBottom: 28,
  },
  metaNum: { color: '#0a0a0a', fontWeight: 600 },
  metaSlash: { color: '#d4d4d4' },
  metaLabel: { fontWeight: 500 },
  title: {
    margin: 0,
    color: '#0a0a0a',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(32px, 3.8vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 700,
    minWidth: 0,
  },
  titleAccentWrap: {
    position: 'relative', display: 'block',
    overflow: 'hidden', maxWidth: '100%',
  },
  titleAccentGhost: {
    visibility: 'hidden', pointerEvents: 'none', display: 'block',
    whiteSpace: 'nowrap', overflow: 'hidden',
  },
  titleAccent: {
    position: 'absolute', left: 0, top: 0,
    color: '#00c853', whiteSpace: 'nowrap',
    maxWidth: '100%', overflow: 'hidden',
  },
  caret: {
    display: 'inline-block', marginLeft: 2,
    color: '#00c853', fontWeight: 400,
    animation: 'rhyno-blink 1s ease-in-out infinite',
  },
  sub: {
    marginTop: 24, marginBottom: 36, maxWidth: 520,
    color: '#525252', fontSize: 17, lineHeight: 1.55,
  },
  ctas: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  primary: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 22px', borderRadius: 999,
    background: '#00c853', color: '#0a0a0a',
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none',
    transition: 'background 150ms cubic-bezier(0.2,0,0,1)',
  },
  ghost: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 22px', borderRadius: 999,
    border: '1px solid #e5e5e5', background: '#ffffff',
    color: '#0a0a0a', textDecoration: 'none',
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
    transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
  },
  caption: {
    marginTop: 48, display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3', letterSpacing: '0.04em',
  },
  captionLabel: {
    color: '#525252', fontWeight: 500, letterSpacing: '0.08em',
    paddingRight: 12, borderRight: '1px solid #e5e5e5',
  },
  captionDivider: { color: '#d4d4d4' },
};

const termStyles = {
  wrap: {
    background: '#0a0a0a',
    border: '1px solid #1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 20px 40px -20px rgba(10,10,10,0.3), 0 1px 2px rgba(10,10,10,0.05)',
  },
  chrome: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '10px 14px',
    background: '#111',
    borderBottom: '1px solid #1a1a1a',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3',
  },
  dots: { display: 'flex', gap: 6 },
  dot: { width: 10, height: 10, borderRadius: 999 },
  chromeTitle: { flex: 1, color: '#737373' },
  chromeRight: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    color: '#00c853', fontWeight: 600, letterSpacing: '0.08em',
  },
  liveDotOuter: { position: 'relative', width: 8, height: 8 },
  liveDotPulse: {
    position: 'absolute', inset: -3, borderRadius: 999,
    background: '#00c853', opacity: 0.3,
    animation: 'rhyno-pulse 1.6s ease-out infinite',
  },
  liveDotCore: { position: 'absolute', inset: 0, borderRadius: 999, background: '#00c853' },
  body: {
    padding: '20px 18px',
    minHeight: 260,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 1.7,
  },
  line: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  footer: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '10px 14px', borderTop: '1px solid #1a1a1a',
    background: '#080808',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
    color: '#525252', letterSpacing: '0.04em',
  },
};

window.Hero = Hero;
