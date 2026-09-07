// ui_kits/website/FAQ.jsx
// Added 2026-05-19 as part of conversion-boost sprint.

function FAQ() {
  const [openIdx, setOpenIdx] = React.useState(0);

  const items = [
    {
      q: "Do you run it for us, or teach us to run it?",
      a: "Both, in that order. We install it, then two people on your team learn to run it. After the install day it is yours. The office hour is there if you want us back every month."
    },
    {
      q: "What happens when the tools change?",
      a: "Your facts file and your rules file do not care which AI reads them. When Gemini, Copilot or ChatGPT ships a new version, the workspace stays the same. That is the whole reason we build it as files in your own account."
    },
    {
      q: "Which AI do we need to buy?",
      a: "Whatever you already pay for. Gemini if you are on Google Workspace, Copilot if you are on Microsoft 365. If you have neither, we will tell you the cheapest thing that works for your case."
    },
    {
      q: "What if the AI writes something wrong?",
      a: "A person approves every email before it sends. Nothing auto-sends. On top of that the send gate checks every price, date and term in a draft against your own facts file, and holds the message if one disagrees."
    },
    {
      q: "How long does it take?",
      a: "One day on site, after a week of watching how your admin actually runs. The first workflow is live before we leave."
    },
    {
      q: "We are a clinic. What about patient data?",
      a: "Patient data stays in your journal system. We handle the admin around it: bookings, reminders, invoices, supplier mail, the front-desk inbox. Nothing from a journal goes into a general AI tool, and we sign a databehandleraftale before we open anything."
    },
    {
      q: "Will our inbox look different?",
      a: "No. You open Gmail or Outlook the way you always have. Drafts are waiting, labels are tidy. Same screen, less typing."
    },
    {
      q: "What if we stop?",
      a: "Everything stays. The files sit in your account, the rules are on one page, and the two people we trained still know how it works. There is nothing to migrate and nothing to cancel."
    },
    {
      q: "How is this different from our practice system or Holdsport?",
      a: "Those hold your patients, your cases or your members. We handle the work around them: the inbox, the quotes, the reminders, the board and front-desk admin. Different job, and we work alongside whatever you already run."
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
        <p style={faqStyles.lede}>What people ask on the first call, answered the way we answer it there.</p>

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
