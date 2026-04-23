// ui_kits/website/Pricing.jsx

const TIERS = [
  {
    key: 'forening', name: 'Forening', tagline: 'For clubs and associations.',
    monthly: '1 500', setup: '3 000',
    features: [
      'Member briefings and renewals',
      'Kontingent invoicing (FIK / MobilePay)',
      'Automated reminders in Danish',
      'Annual report prep, handed to revisor',
      'Up to 250 members',
    ],
    cta: 'Book a call', highlight: false,
  },
  {
    key: 'solo', name: 'Solo', tagline: 'For solo operators and bureaus.',
    monthly: '1 500', setup: '5 000',
    features: [
      'Daily briefing, drafted replies',
      'Invoice and VAT workflow',
      'Bank reconciliation (Nordea, Danske)',
      'SKAT filings queued for approval',
      '1 workspace, 1 operator',
    ],
    cta: 'Book a call', highlight: true,
  },
  {
    key: 'business', name: 'Business', tagline: 'For growing teams.',
    monthly: '3 500', setup: '12 000',
    features: [
      'Everything in Solo',
      'Multi-workspace, multi-client routing',
      'Role-based approval (owner, bogholder)',
      'Dedicated onboarding in København',
      'Priority support via Slack Connect',
    ],
    cta: 'Book a call', highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" data-rh="section" style={prStyles.root}>
      <div style={prStyles.inner}>
        <div style={prStyles.head}>
          <span style={prStyles.label}><span style={{ fontWeight: 600, color: '#0a0a0a' }}>06</span> <span style={{ color: '#a3a3a3', fontWeight: 400 }}>/ PRICING</span></span>
          <h2 style={prStyles.title}>Simple pricing. One invoice a month.</h2>
          <p style={prStyles.sub}>
            Every plan includes the daily briefing, email drafts, and your automations.
            No setup fee if you get started before 1 May 2026.
          </p>
        </div>

        <div data-rh="pricing-grid" style={prStyles.grid}>
          {TIERS.map((t) => <Tier key={t.key} tier={t} />)}
        </div>

        <div style={prStyles.footnote}>
          <span style={prStyles.fnDot} />
          <span>All prices ex. moms. Month-to-month, cancel any time.</span>
        </div>
      </div>
    </section>
  );
}

function Tier({ tier }) {
  const [hover, setHover] = React.useState(false);
  const hi = tier.highlight;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...prStyles.card,
        background: hi ? '#0a0a0a' : '#ffffff',
        color: hi ? '#fafafa' : '#0a0a0a',
        borderColor: hi ? '#0a0a0a' : '#e5e5e5',
        boxShadow: hover && !hi ? '0 1px 3px rgba(10,10,10,0.04), 0 20px 48px rgba(10,10,10,0.08)' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={prStyles.cardHead}>
        <span style={{ ...prStyles.tierName, color: hi ? '#fafafa' : '#0a0a0a' }}>{tier.name}</span>
        {hi && <span style={prStyles.popular}>MOST PICKED</span>}
      </div>
      <p style={{ ...prStyles.tierTag, color: hi ? '#a3a3a3' : '#525252' }}>{tier.tagline}</p>

      <div style={prStyles.priceBlock}>
        <span style={{ ...prStyles.price, color: hi ? '#fafafa' : '#0a0a0a' }}>{tier.monthly} kr</span>
        <span style={{ ...prStyles.priceSuffix, color: hi ? '#a3a3a3' : '#a3a3a3' }}>/ month</span>
      </div>
      <div style={prStyles.setupRow}>
        <span style={{ ...prStyles.setupStrike, color: hi ? '#525252' : '#a3a3a3' }}>{tier.setup} kr setup</span>
        <span style={prStyles.setupBadge}>WAIVED · UNTIL 1 MAY</span>
      </div>

      <div style={{ ...prStyles.divider, background: hi ? '#171717' : '#f0f0f0' }} />

      <ul style={prStyles.features}>
        {tier.features.map((f, i) => (
          <li key={i} style={prStyles.feature}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 4 }}>
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span style={{ color: hi ? '#fafafa' : '#0a0a0a' }}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#book"
        style={{
          ...prStyles.cta,
          background: hi ? '#00c853' : 'transparent',
          color:      hi ? '#0a0a0a' : '#0a0a0a',
          border:     hi ? '1px solid #00c853' : '1px solid #0a0a0a',
        }}
      >{tier.cta}</a>
    </div>
  );
}

const prStyles = {
  root: { background: '#fafafa', padding: '120px 32px', borderTop: '1px solid #e5e5e5' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  head: { maxWidth: 720, marginBottom: 56 },
  label: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#a3a3a3' },
  title: { margin: '14px 0 16px', fontSize: 48, fontWeight: 600, letterSpacing: '-0.03em', color: '#0a0a0a', lineHeight: 1.08 },
  sub: { margin: 0, fontSize: 17, color: '#525252', lineHeight: 1.55, maxWidth: 620 },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'stretch' },
  card: {
    borderRadius: 20, border: '1px solid',
    padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
    transition: 'box-shadow 180ms cubic-bezier(0.2,0,0,1), transform 180ms',
  },
  cardHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tierName: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em' },
  popular: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.08em', color: '#0a0a0a',
    background: '#00c853', padding: '3px 8px', borderRadius: 6,
  },
  tierTag: { margin: 0, fontSize: 14, lineHeight: 1.5 },

  priceBlock: { display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 },
  price: { fontFamily: 'JetBrains Mono, monospace', fontSize: 44, fontWeight: 500, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' },
  priceSuffix: { fontFamily: 'JetBrains Mono, monospace', fontSize: 13 },

  setupRow: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  setupStrike: { fontFamily: 'JetBrains Mono, monospace', fontSize: 12, textDecoration: 'line-through' },
  setupBadge: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500,
    letterSpacing: '0.08em', color: '#006b2a',
    background: '#e6faee', padding: '3px 7px', borderRadius: 6,
  },

  divider: { height: 1, margin: '8px 0' },

  features: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  feature: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5 },

  cta: {
    marginTop: 'auto',
    textAlign: 'center', textDecoration: 'none',
    padding: '12px 18px', borderRadius: 999,
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
  },

  footnote: {
    marginTop: 32, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3',
  },
  fnDot: { width: 4, height: 4, borderRadius: 999, background: '#a3a3a3' },
};

window.Pricing = Pricing;
