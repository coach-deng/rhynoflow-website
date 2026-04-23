// ui_kits/website/StatusStrip.jsx
// Live-feeling system status band under hero. Fake ticker that reads like real telemetry.

function StatusStrip() {
  const [tick, setTick] = React.useState(0);
  const [emails, setEmails] = React.useState(1247);
  const [drafts, setDrafts] = React.useState(3);
  const [latency, setLatency] = React.useState(142);

  React.useEffect(() => {
    const id = setInterval(() => {
      setTick(t => t + 1);
      // occasional increments, random latency
      if (Math.random() > 0.6) setEmails(e => e + 1);
      if (Math.random() > 0.85) setDrafts(d => Math.max(1, d + (Math.random() > 0.5 ? 1 : -1)));
      setLatency(80 + Math.floor(Math.random() * 180));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const events = [
    { tag: 'TRIAGE', txt: 'talata-bk · 47 emails → 12 requires_reply · 31 auto · 4 escalate' },
    { tag: 'DRAFT',  txt: 'roskilde-revision · reply to invoice dispute generated in 1.2s' },
    { tag: 'SEND',   txt: 'kv-foreningen · monthly member recap queued for 09:00 CET' },
    { tag: 'FLAG',   txt: 'aalborg-smb · VAT deadline in 48h · reminder drafted, awaiting review' },
    { tag: 'SYNC',   txt: 'gmail · 1,247 msgs ingested · eu-west-1 · avg 142ms' },
    { tag: 'POLICY', txt: 'tone=formal · lang=da · cc=accountant · approved by founder@talata' },
  ];
  const current = events[tick % events.length];

  return (
    <section data-rh="status-strip" style={ssStyles.root}>
      <div style={ssStyles.inner}>
        <div style={ssStyles.left}>
          <span style={ssStyles.liveDot}>
            <span style={ssStyles.liveDotPulse} />
            <span style={ssStyles.liveDotCore} />
          </span>
          <span style={ssStyles.liveLabel}>LIVE</span>
          <span style={ssStyles.divider} />
          <span style={ssStyles.tag}>{current.tag}</span>
          <span style={ssStyles.event}>{current.txt}</span>
        </div>
        <div style={ssStyles.right}>
          <Metric label="emails_processed" value={emails.toLocaleString()} />
          <Metric label="drafts_pending"   value={String(drafts).padStart(2,'0')} />
          <Metric label="avg_latency"      value={latency + 'ms'} />
          <Metric label="region"           value="eu-west-1" mono />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <span style={ssStyles.metric}>
      <span style={ssStyles.metricLabel}>{label}</span>
      <span style={ssStyles.metricValue}>{value}</span>
    </span>
  );
}

const ssStyles = {
  root: {
    background: '#0a0a0a',
    borderTop: '1px solid #1a1a1a',
    borderBottom: '1px solid #1a1a1a',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    padding: '14px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 32,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
    height: 48,
    overflow: 'hidden',
  },
  left: { display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: '1 1 auto', overflow: 'hidden' },
  liveDot: { position: 'relative', width: 8, height: 8, flexShrink: 0 },
  liveDotPulse: {
    position: 'absolute', inset: -4, borderRadius: 999,
    background: '#00c853', opacity: 0.25,
    animation: 'rhyno-pulse 1.6s ease-out infinite',
  },
  liveDotCore: { position: 'absolute', inset: 0, borderRadius: 999, background: '#00c853' },
  liveLabel: { color: '#00c853', fontWeight: 600, letterSpacing: '0.08em' },
  divider: { width: 1, height: 14, background: '#262626' },
  tag: {
    padding: '2px 8px', borderRadius: 4,
    background: '#1a1a1a', color: '#fafafa',
    fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
  },
  event: {
    color: '#a3a3a3',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    minWidth: 0, flex: '1 1 0',
  },
  right: { display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 },
  metric: { display: 'flex', alignItems: 'baseline', gap: 8 },
  metricLabel: { color: '#525252', fontSize: 11 },
  metricValue: {
    color: '#fafafa', fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
    minWidth: '4ch', display: 'inline-block', textAlign: 'right',
  },
};

// Inject keyframes once
if (typeof document !== 'undefined' && !document.getElementById('rhyno-pulse-kf')) {
  const s = document.createElement('style');
  s.id = 'rhyno-pulse-kf';
  s.textContent = `@keyframes rhyno-pulse {
    0%   { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(2.2); opacity: 0; }
  }`;
  document.head.appendChild(s);
}

window.StatusStrip = StatusStrip;
