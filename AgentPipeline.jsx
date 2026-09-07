// ui_kits/website/AgentPipeline.jsx
// Visible reasoning trace: how an email flows through Rhynoflow.
// Animates a token pulsing through the pipeline; each stage shows latency + state.

function AgentPipeline() {
  const stages = [
    { key: 'discover', label: 'Discover', desc: 'With the people who do it', when: 'half a day', code: 'what eats the week' },
    { key: 'observe',  label: 'Observe',  desc: 'One week of the real inbox', when: '1 week',    code: 'who answers what' },
    { key: 'install',  label: 'Install',  desc: 'In your own Google or Microsoft account',  when: 'half a day', code: 'facts · rules · drafter' },
    { key: 'train',    label: 'Train',    desc: 'Two named owners',           when: 'half a day', code: 'they run it, not us' },
    { key: 'check',    label: 'Check in', desc: 'Is it still being used?',    when: 'day 30',     code: 'one fix included' },
  ];
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % stages.length), 1800);
    return () => clearInterval(id);
  }, []);

  const files = [
    { name: 'facts.md',    desc: 'every price, date, venue and term you quote' },
    { name: 'rules.md',    desc: 'who owns what, and what AI may never say' },
    { name: 'drafter',     desc: 'writes the replies you send every day' },
    { name: 'send-gate',   desc: 'holds anything that disagrees with facts.md' },
    { name: 'owners.md',   desc: 'the two people trained to run it' },
  ];

  return (
    <section id="how" data-rh="section" style={apStyles.root}>
      <div style={apStyles.inner}>
        <SectionHeader num="02" eyebrow="THE INSTALL" title="One day. Then it is yours." sub="We watch how your admin actually runs before we build anything, install it inside the accounts you already pay for, and train two of your people to own it. Then we come back at thirty days to see whether it stuck." />

        <div data-rh="pipeline-steps" style={apStyles.pipe}>
          {/* Connector line */}
          <div style={apStyles.track} aria-hidden="true" />
          <div
            data-rh="pipeline-arrow"
            style={{
              ...apStyles.trackFill,
              width: `calc(${(active / (stages.length - 1)) * 100}% )`,
            }}
            aria-hidden="true"
          />
          {stages.map((s, i) => (
            <Stage key={s.key} stage={s} index={i} active={active} />
          ))}
        </div>

        <div style={apStyles.traceWrap}>
          <div style={apStyles.traceHeader}>
            <span style={apStyles.traceTitle}>what lands in your Drive</span>
            <span style={apStyles.traceTotal}>yours to keep</span>
          </div>
          <div style={apStyles.traceBody}>
            {files.map((f, i) => (
              <div key={f.name} style={{
                ...apStyles.traceRow,
                opacity: i <= active ? 1 : 0.35,
              }}>
                <span style={apStyles.traceIdx}>{String(i + 1).padStart(2,'0')}</span>
                <span style={apStyles.traceCode}>{f.name}</span>
                <span style={apStyles.traceLabel}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({ stage, index, active }) {
  const done = index < active;
  const now  = index === active;
  const color = done ? '#00c853' : now ? '#0a0a0a' : '#d4d4d4';
  return (
    <div style={apStyles.stage}>
      <div style={{
        ...apStyles.stageNode,
        background: now ? '#0a0a0a' : done ? '#00c853' : '#ffffff',
        borderColor: now ? '#0a0a0a' : done ? '#00c853' : '#e5e5e5',
        color: (now || done) ? '#fafafa' : '#a3a3a3',
        boxShadow: now ? '0 0 0 6px rgba(0,200,83,0.12)' : 'none',
      }}>
        <span style={apStyles.stageIdx}>{String(index).padStart(2,'0')}</span>
      </div>
      <div style={apStyles.stageMeta}>
        <div style={{ ...apStyles.stageLabel, color: now ? '#0a0a0a' : '#0a0a0a' }}>{stage.label}</div>
        <div style={apStyles.stageDesc}>{stage.desc}</div>
        <div style={apStyles.stageLatency}>{stage.when}</div>
      </div>
    </div>
  );
}

const apStyles = {
  root: { background: '#fafafa', borderTop: '1px solid #e5e5e5' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '120px 32px' },
  pipe: {
    position: 'relative',
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8,
    marginTop: 64,
  },
  track: {
    position: 'absolute', top: 22, left: '8%', right: '8%', height: 2,
    background: '#e5e5e5', zIndex: 0,
  },
  trackFill: {
    position: 'absolute', top: 22, left: '8%', height: 2,
    background: '#00c853', zIndex: 1,
    transition: 'width 400ms cubic-bezier(0.2,0,0,1)',
  },
  stage: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 },
  stageNode: {
    width: 44, height: 44, borderRadius: 999,
    border: '2px solid',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 250ms cubic-bezier(0.2,0,0,1)',
  },
  stageIdx: { fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600 },
  stageMeta: { marginTop: 16, textAlign: 'center' },
  stageLabel: { fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' },
  stageDesc: { marginTop: 4, fontSize: 12, color: '#737373' },
  stageLatency: {
    marginTop: 6, fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10, color: '#a3a3a3', letterSpacing: '0.04em',
  },
  traceWrap: {
    marginTop: 72,
    background: '#0a0a0a', borderRadius: 12,
    border: '1px solid #1a1a1a',
    overflow: 'hidden',
  },
  traceHeader: {
    padding: '14px 20px',
    borderBottom: '1px solid #1a1a1a',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
  },
  traceTitle: { color: '#a3a3a3', letterSpacing: '0.04em' },
  traceTotal: { color: '#00c853', letterSpacing: '0.04em' },
  traceBody: { padding: '8px 0' },
  traceRow: {
    display: 'grid',
    gridTemplateColumns: '40px 120px 1fr',
    gap: 16, padding: '8px 20px',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
    transition: 'opacity 250ms',
  },
  traceIdx:     { color: '#525252' },
  traceLabel:   { color: '#fafafa', fontWeight: 500 },
  traceCode:    { color: '#00c853' },
  traceLatency: { color: '#a3a3a3', textAlign: 'right' },
};

function SectionHeader({ num, eyebrow, title, sub }) {
  return (
    <div style={shStyles.root}>
      <div style={shStyles.meta}>
        <span style={shStyles.num}>{num}</span>
        <span style={shStyles.slash}>/</span>
        <span style={shStyles.eyebrow}>{eyebrow}</span>
      </div>
      <h2 style={shStyles.title}>{title}</h2>
      {sub && <p style={shStyles.sub}>{sub}</p>}
    </div>
  );
}
const shStyles = {
  root: { maxWidth: 720 },
  meta: {
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
    color: '#525252', letterSpacing: '0.06em', marginBottom: 20,
  },
  num: { color: '#0a0a0a', fontWeight: 600 },
  slash: { color: '#d4d4d4' },
  eyebrow: { fontWeight: 500 },
  title: {
    margin: 0, color: '#0a0a0a',
    fontFamily: 'Inter, -apple-system, sans-serif',
    fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600,
    textWrap: 'balance',
  },
  sub: {
    marginTop: 16, maxWidth: 560,
    color: '#525252', fontSize: 16, lineHeight: 1.55,
    fontFamily: 'Inter, -apple-system, sans-serif',
  },
};

window.AgentPipeline = AgentPipeline;
window.SectionHeader = SectionHeader;
