// ui_kits/website/FAQ.jsx
// Added 2026-05-19 as part of conversion-boost sprint.

function FAQ() {
  const [openIdx, setOpenIdx] = React.useState(0);

  const items = [
    {
      q: "Will my inbox look different?",
      a: "No. Rhynoflow runs invisibly in the background. You open Gmail like always, you just see drafts waiting to be sent. Same interface, less typing."
    },
    {
      q: "What if the AI writes something wrong?",
      a: "You approve every email before it sends. No auto-send. If a draft is off, you edit or delete. The system learns from your changes over time."
    },
    {
      q: "How secure is this? GDPR?",
      a: "We use Anthropic's Claude API which doesn't train on your data. Everything happens inside your Google Workspace. We never see the content of your emails. Full DPA available on request."
    },
    {
      q: "What happens if Rhynoflow shuts down?",
      a: "All your data stays. We don't touch anything you own. You just stop having the automation. Inbox works like before, no migration headache."
    },
    {
      q: "Can we try without committing?",
      a: "Yes. First month is free, no setup fee. If you don't like it, delete the access and you owe nothing."
    },
    {
      q: "How long does setup take?",
      a: "90 minutes. We do it together over Google Meet. No data migration, no software to install."
    },
    {
      q: "Does it work in Danish?",
      a: "Yes — Rhynoflow was built for Danish foreninger first. It detects the language of incoming emails and replies in kind. English is supported too."
    },
    {
      q: "What does it cost?",
      a: "1,500 DKK/month for foreninger, no setup fee. Bigger setups (multi-tenant gym chains, etc.) start at 3,500 DKK/month with priority support."
    },
    {
      q: "How is this different from Spond or Holdsport?",
      a: "Those handle signups and team lists. We handle the inbox and the board work. Different problems. We play nicely alongside both."
    }
  ];

  return (
    <section id="faq" style={faqStyles.root}>
      <div style={faqStyles.inner}>
        <div style={faqStyles.label}>
          <span style={faqStyles.labelDot} />
          FAQ / QUESTIONS WE GET A LOT
        </div>
        <h2 style={faqStyles.h2}>Straight answers.</h2>
        <p style={faqStyles.lede}>No corporate hedging. If you're considering Rhynoflow, this is what you actually need to know.</p>

        <div style={faqStyles.list}>
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{...faqStyles.item, ...(isOpen ? faqStyles.itemOpen : {})}}>
                <button
                  type="button"
                  style={faqStyles.q}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span style={faqStyles.qText}>{item.q}</span>
                  <span style={{...faqStyles.qIcon, ...(isOpen ? faqStyles.qIconOpen : {})}}>+</span>
                </button>
                {isOpen && (
                  <div style={faqStyles.a}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const faqStyles = {
  root: {
    background: '#fafafa',
    padding: '88px 32px 96px',
    borderBottom: '1px solid #e5e5e5',
  },
  inner: {
    maxWidth: 920, margin: '0 auto',
  },
  label: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', color: '#a3a3a3', marginBottom: 16,
  },
  labelDot: {
    width: 6, height: 6, borderRadius: 999, background: '#00c853',
  },
  h2: {
    margin: '0 0 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(28px, 3vw, 40px)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    color: '#0a0a0a',
  },
  lede: {
    margin: '0 0 48px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 17, lineHeight: 1.55,
    color: '#525252',
    maxWidth: 560,
  },
  list: {
    display: 'flex', flexDirection: 'column', gap: 0,
    border: '1px solid #e5e5e5', borderRadius: 12,
    background: '#fff',
  },
  item: {
    borderBottom: '1px solid #e5e5e5',
  },
  itemOpen: {
    background: '#fafafa',
  },
  q: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    padding: '20px 24px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    cursor: 'pointer',
    textAlign: 'left',
    gap: 16,
  },
  qText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16, fontWeight: 600,
    color: '#0a0a0a',
    lineHeight: 1.35,
  },
  qIcon: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 22, fontWeight: 300,
    color: '#525252',
    transition: 'transform 0.2s ease',
    flexShrink: 0,
  },
  qIconOpen: {
    transform: 'rotate(45deg)',
    color: '#00c853',
  },
  a: {
    padding: '0 24px 24px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 15, lineHeight: 1.6,
    color: '#525252',
    maxWidth: 720,
  },
};

window.FAQ = FAQ;
