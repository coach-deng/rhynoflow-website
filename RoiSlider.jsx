// ui_kits/website/RoiSlider.jsx
// Drag hours × pick role → monthly DKK saved.
// Honest math: role * hours_per_week * 4.3 weeks = monthly DKK saved.

const ROLES = {
  frontdesk: { label: 'Front desk',   sub: 'Reception, office admin',        rate: 300,  valueLabel: 'Saved /mo', suffix: 'kr' },
  owner:     { label: 'Owner',        sub: 'You, doing it after hours',      rate: 700,  valueLabel: 'Saved /mo', suffix: 'kr' },
  billable:  { label: 'Billable hour', sub: 'Practice, legal, consulting',   rate: 1400, valueLabel: 'Saved /mo', suffix: 'kr' },
};

function RoiSlider() {
  const [role, setRole] = React.useState('owner');
  const [hours, setHours] = React.useState(6);

  const r = ROLES[role];
  const monthly = Math.round(r.rate * hours * 4.3);
  const reclaimed = Math.round(hours * 4.3);

  const value = monthly;
  const formatted = value.toLocaleString('da-DK').replace(/,/g, ' ') + ' kr';

  return (
    <section data-rh="section" style={roiStyles.root}>
      <div style={roiStyles.inner}>
        <div style={roiStyles.head}>
          <span style={roiStyles.label}><span style={{ fontWeight: 600, color: '#0a0a0a' }}>05</span> <span style={{ color: '#a3a3a3', fontWeight: 400 }}>/ WHAT IT'S WORTH</span></span>
          <h2 style={roiStyles.title}>
            What is the admin actually costing you?
          </h2>
          <p style={roiStyles.sub}>
            Pick whose time it is, drag to the hours a week it eats. The install is a one-off 22.500 kr. Compare it to the number below.
          </p>
        </div>

        <div style={roiStyles.card}>
          <div data-rh="role-row" style={roiStyles.roleRow}>
            {Object.entries(ROLES).map(([key, meta]) => (
              <button
                key={key}
                onClick={() => setRole(key)}
                style={{
                  ...roiStyles.roleBtn,
                  background: role === key ? '#0a0a0a' : '#ffffff',
                  color:      role === key ? '#fafafa' : '#0a0a0a',
                  borderColor: role === key ? '#0a0a0a' : '#e5e5e5',
                }}
              >
                <span style={roiStyles.roleLabel}>{meta.label}</span>
                <span style={{
                  ...roiStyles.roleSub,
                  color: role === key ? '#a3a3a3' : '#a3a3a3',
                }}>{meta.sub}</span>
              </button>
            ))}
          </div>

          <div data-rh="two-col" style={roiStyles.grid}>
            <div style={roiStyles.sliderCol}>
              <div style={roiStyles.sliderHead}>
                <span style={roiStyles.sliderLabel}>ADMIN HOURS / WEEK</span>
                <span style={roiStyles.sliderValue}>{hours} h</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                style={roiStyles.range}
              />
              <div style={roiStyles.ticks}>
                <span>1h</span><span>5h</span><span>10h</span><span>15h</span><span>20h</span>
              </div>
              <p style={roiStyles.note}>
                {hours} h/week × 4.3 weeks × {r.rate} kr/h. The rate is a round
                placeholder. Bring your own number to the call and we will run
                it properly.
              </p>
            </div>

            <div style={roiStyles.resultCol}>
              <span style={roiStyles.resultLabel}>{r.valueLabel.toUpperCase()}</span>
              <span style={roiStyles.resultValue}>{formatted}</span>
              <span style={roiStyles.resultSub}>
                ≈ {Math.round(value * 12).toLocaleString('da-DK').replace(/,/g, ' ')} kr / year · {reclaimed * 12} h back
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const roiStyles = {
  root: { background: '#fafafa', padding: '120px 32px', borderTop: '1px solid #e5e5e5' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  head: { maxWidth: 720, marginBottom: 48 },
  label: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#a3a3a3' },
  title: { margin: '14px 0 16px', fontSize: 48, fontWeight: 600, letterSpacing: '-0.03em', color: '#0a0a0a', lineHeight: 1.08 },
  sub: { margin: 0, fontSize: 17, color: '#525252', lineHeight: 1.55, maxWidth: 620 },

  card: {
    background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: 20,
    padding: 32, display: 'flex', flexDirection: 'column', gap: 32,
  },

  roleRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 },
  roleBtn: {
    textAlign: 'left', padding: '18px 20px', borderRadius: 12, border: '1px solid',
    fontFamily: 'Inter, sans-serif', cursor: 'pointer',
    display: 'flex', flexDirection: 'column', gap: 4,
    transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
  },
  roleLabel: { fontSize: 15, fontWeight: 600 },
  roleSub: { fontSize: 12 },

  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, alignItems: 'stretch' },
  sliderCol: { display: 'flex', flexDirection: 'column', gap: 14 },
  sliderHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
  sliderLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.1em', color: '#525252', fontWeight: 500 },
  sliderValue: { fontFamily: 'JetBrains Mono, monospace', fontSize: 22, fontWeight: 500, color: '#0a0a0a', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' },
  range: { width: '100%', accentColor: '#00c853', height: 6 },
  ticks: { display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#a3a3a3', marginTop: -4 },
  note: { margin: 0, fontSize: 12, color: '#a3a3a3', lineHeight: 1.55 },

  resultCol: {
    background: '#0a0a0a', borderRadius: 16, padding: '28px 24px',
    display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center',
  },
  resultLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', color: '#00c853' },
  resultValue: { fontFamily: 'JetBrains Mono, monospace', fontSize: 56, fontWeight: 500, color: '#fafafa', letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' },
  resultSub: { fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#a3a3a3' },
};

window.RoiSlider = RoiSlider;
