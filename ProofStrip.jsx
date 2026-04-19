// ui_kits/website/ProofStrip.jsx

function ProofStrip() {
  return (
    <section style={proofStyles.root}>
      <div style={proofStyles.inner}>
        <span style={proofStyles.label}>PILOT · APR 2026</span>
        <div style={proofStyles.pill}>
          <span style={proofStyles.dot} />
          <span style={proofStyles.pillText}>
            Pilot running with <strong style={{ color: '#0a0a0a', fontWeight: 600 }}>Talata Basketball Copenhagen</strong>
            <span style={proofStyles.tag}>SPORTS &amp; ASSOCIATIONS</span>
          </span>
        </div>
        <p style={proofStyles.note}>
          Early access open for 4 more organisations. No setup fee until 1 May.
        </p>
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
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
    textAlign: 'center',
  },
  label: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', color: '#a3a3a3',
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '10px 18px', borderRadius: 999,
    background: '#ffffff', border: '1px solid #e5e5e5',
  },
  dot: {
    width: 8, height: 8, borderRadius: 999, background: '#00c853',
    boxShadow: '0 0 0 4px rgba(0,200,83,0.12)',
  },
  pillText: {
    fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#525252',
    display: 'inline-flex', alignItems: 'center', gap: 10,
  },
  tag: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.08em', color: '#525252',
    background: '#f5f5f5', borderRadius: 6, padding: '3px 7px',
  },
  note: {
    margin: 0,
    fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a3a3a3',
  },
};

window.ProofStrip = ProofStrip;
