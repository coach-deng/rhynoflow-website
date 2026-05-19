// ui_kits/website/Testimonials.jsx
// Added 2026-05-19 as part of conversion-boost sprint.

function Testimonials() {
  const quotes = [
    {
      text: "I just saw one draft, and it was great! Made me so excited!!",
      name: "Sofie Juel Andersen",
      role: "Secretary, Dansk Puslespilsforening",
      logo: "https://danskpuslespilsforening.dk/wp-content/uploads/2024/03/cropped-cropped-logo-rund-dansk-150x150.png",
      alt: "DPF"
    },
    {
      text: "Five hours a week back in my life. That's a Sunday afternoon I get to spend coaching instead of typing.",
      name: "Deng Awak",
      role: "Head Coach, Talata Basketball",
      logo: "./assets/talata-logo.png",
      alt: "Talata"
    }
  ];

  return (
    <section id="testimonials" style={tsStyles.root}>
      <div style={tsStyles.inner}>
        <div style={tsStyles.label}>
          <span style={tsStyles.labelDot} />
          PROOF / WHAT CLIENTS SAY
        </div>
        <h2 style={tsStyles.h2}>From real operators, not marketing.</h2>

        <div style={tsStyles.grid}>
          {quotes.map((q, i) => (
            <figure key={i} style={tsStyles.card}>
              <div style={tsStyles.quoteMark}>"</div>
              <blockquote style={tsStyles.quote}>
                {q.text}
              </blockquote>
              <figcaption style={tsStyles.caption}>
                <img src={q.logo} alt={q.alt} style={tsStyles.cardLogo} />
                <div>
                  <div style={tsStyles.cardName}>{q.name}</div>
                  <div style={tsStyles.cardRole}>{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const tsStyles = {
  root: {
    background: '#0a0a0a',
    padding: '88px 32px 96px',
    color: '#fafafa',
    borderTop: '1px solid #1a1a1a',
    borderBottom: '1px solid #1a1a1a',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto',
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
    margin: '0 0 56px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(28px, 3vw, 40px)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    maxWidth: 720,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
  },
  card: {
    background: '#111',
    border: '1px solid #1f1f1f',
    borderRadius: 16,
    padding: '32px 28px 28px',
    margin: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  quoteMark: {
    position: 'absolute',
    top: 12, left: 22,
    fontFamily: 'Inter, sans-serif',
    fontSize: 56, lineHeight: 1, fontWeight: 800,
    color: '#00c853', opacity: 0.25,
  },
  quote: {
    margin: 0,
    fontFamily: 'Inter, sans-serif',
    fontSize: 17, lineHeight: 1.55,
    color: '#e5e5e5',
    fontStyle: 'normal',
    fontWeight: 400,
    flex: 1,
  },
  caption: {
    display: 'flex', alignItems: 'center', gap: 12,
    paddingTop: 20, borderTop: '1px solid #1f1f1f',
  },
  cardLogo: {
    width: 36, height: 36, objectFit: 'contain',
    borderRadius: 8, background: '#fafafa', padding: 4,
  },
  cardName: {
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
    color: '#fafafa',
  },
  cardRole: {
    fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#a3a3a3',
    marginTop: 2,
  },
};

window.Testimonials = Testimonials;
