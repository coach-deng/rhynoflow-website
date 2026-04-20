// ui_kits/website/ProofStrip.jsx

function ProofStrip() {
  const orgs = [
    { name: 'Talata Basketball Copenhagen', tag: 'SPORTS & ASSOCIATIONS' },
    { name: 'Dansk Puslespilsforening',     tag: 'FORENINGER' },
  ];
  const metrics = [
    { value: '1,251', label: 'emails processed' },
    { value: '25h',   label: 'saved per org / week' },
    { value: '2',     label: 'orgs live' },
  ];
  return (
    <section id="proof" style={proofStyles.root}>
      <div style={proofStyles.inner}>
        <span style={proofStyles.label}>
          <span style={{ fontWeight: 600, color: '#0a0a0a' }}>LIVE</span>
          {' · APR 2026'}
        </span>

        <div style={proofStyles.pills}>
          {orgs.map((o) => (
            <div key={o.name} style={proofStyles.pill}>
              <span style={proofStyles.dot} />
              <span style={proofStyles.pillText}>
                Running for <strong style={{ color: '#0a0a0a', fontWeight: 600 }}>{o.name}</strong>
                <span style={proofStyles.tag}>{o.tag}</span>
              </span>
            </div>
          ))}
        </div>

        <div style={proofStyles.metrics}>
          {metrics.map((m, i) => (
            <React.Fragment key={m.label}>
              <div style={proofStyles.metric}>
                <span style={proofStyles.metricValue}>{m.value}</span>
                <span style={proofStyles.metricLabel}>{m.label}</span>
              </div>
              {i < metrics.length - 1 && <span style={proofStyles.metricDivider} />}
            </React.Fragment>
          ))}
        </div>

        <p style={proofStyles.note}>Early access open. No setup fee.</p>
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
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', color: '#a3a3a3',
  },
  pills: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12,
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '10px 18px', borderRadius: 999,
    background: '#ffffff', border: '1px solid #e5e5e5',
  },
  dot: {
    width: 8, height: 8, borderRadius: 999, background: '#00c853', flexShrink: 0,
    boxShadow: '0 0 0 4px rgba(0,200,83,0.12)',
  },
  pillText: {
    fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#525252',
    display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
  },
  tag: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.08em', color: '#525252',
    background: '#f5f5f5', borderRadius: 6, padding: '3px 7px',
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
