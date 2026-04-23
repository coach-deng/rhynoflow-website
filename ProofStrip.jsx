// ui_kits/website/ProofStrip.jsx

function NordicKitsLogo() {
  return (
    <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontFamily="Inter,-apple-system,sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.04em" fill="#0a0a0a">NORDIC</text>
      <text x="72" y="22" fontFamily="Inter,-apple-system,sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.04em" fill="#00c853">KITS</text>
    </svg>
  );
}

function ProofStrip() {
  return (
    <section id="proof" style={proofStyles.root}>
      <div style={proofStyles.inner}>
        <span style={proofStyles.label}>
          <span style={{ fontWeight: 600, color: '#0a0a0a' }}>LIVE</span>
          {' · APR 2026'}
        </span>

        <div style={proofStyles.logoRow}>
          {/* DPF */}
          <div style={proofStyles.logoWrap} title="Dansk Puslespilsforening">
            <span style={proofStyles.dot} />
            <img
              src="https://danskpuslespilsforening.dk/wp-content/uploads/2024/03/cropped-cropped-logo-rund-dansk-150x150.png"
              alt="Dansk Puslespilsforening"
              style={proofStyles.logoImg}
            />
          </div>

          <span style={proofStyles.logoDivider} />

          {/* Talata */}
          <div style={proofStyles.logoWrap} title="Talata Basketball Copenhagen">
            <span style={proofStyles.dot} />
            <div style={proofStyles.talaLogo}>
              <img src="./assets/talata-logo.png" alt="Talata Basketball" style={{ width: 44, height: 44, objectFit: 'contain' }} />
            </div>
          </div>

          <span style={proofStyles.logoDivider} />

          {/* Nordic Kits */}
          <div style={proofStyles.logoWrap} title="Nordic Kits">
            <span style={proofStyles.dot} />
            <NordicKitsLogo />
          </div>
        </div>
      </div>
    </section>
  );
}

const proofStyles = {
  root: {
    background: '#fafafa',
    borderBottom: '1px solid #e5e5e5',
    padding: '64px 32px',
  },
  inner: {
    maxWidth: 860, margin: '0 auto',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', color: '#a3a3a3',
  },
  logoRow: {
    display: 'flex', alignItems: 'center', gap: 32,
    flexWrap: 'wrap', justifyContent: 'center',
  },
  logoWrap: {
    display: 'flex', alignItems: 'center', gap: 10,
  },
  dot: {
    width: 8, height: 8, borderRadius: 999, background: '#00c853', flexShrink: 0,
    boxShadow: '0 0 0 4px rgba(0,200,83,0.12)',
  },
  logoImg: {
    width: 48, height: 48, objectFit: 'contain', borderRadius: 8,
  },
  talaLogo: {
    width: 48, height: 48, borderRadius: 8, background: '#0a0a0a',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  logoDivider: {
    width: 1, height: 36, background: '#e5e5e5', flexShrink: 0,
  },
  metrics: {
    display: 'flex', alignItems: 'center', gap: 32, marginTop: 8,
  },
  metric: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
  },
  metricValue: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 22, fontWeight: 600,
    color: '#0a0a0a', letterSpacing: '-0.02em',
  },
  metricLabel: {
    fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#a3a3a3',
  },
  metricDivider: {
    width: 1, height: 32, background: '#e5e5e5', flexShrink: 0,
  },
  note: {
    margin: 0,
    fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a3a3a3',
  },
};

window.ProofStrip = ProofStrip;
