// ui_kits/website/Testimonials.jsx
// Added 2026-05-19 as part of conversion-boost sprint.

function Testimonials() {
  return (
    <section id="testimonials" style={tsStyles.root}>
      <div style={tsStyles.inner}>
        <div style={tsStyles.label}>
          <span style={tsStyles.labelDot} />
          PROOF / ONE CLIENT, IN THEIR WORDS
        </div>
        <h2 style={tsStyles.h2}>In their words.</h2>

        <figure style={tsStyles.card}>
          <div style={tsStyles.quoteMark}>"</div>
          <blockquote style={tsStyles.quote}>
            I just saw one draft, and it was great! Made me so excited!!
          </blockquote>
          <figcaption style={tsStyles.caption}>
            <div>
              <div style={tsStyles.cardName}>Board member</div>
              <div style={tsStyles.cardRole}>Danish hobby federation · volunteer board</div>
            </div>
          </figcaption>
        </figure>
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
    maxWidth: 760, margin: '0 auto',
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
    margin: '0 0 48px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(28px, 3vw, 40px)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
  },
  card: {
    background: '#111',
    border: '1px solid #00c853',
    borderRadius: 20,
    padding: '48px 48px 36px',
    margin: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    boxShadow: '0 0 40px rgba(0, 200, 83, 0.08)',
  },
  quoteMark: {
    position: 'absolute',
    top: 16, left: 28,
    fontFamily: 'Inter, sans-serif',
    fontSize: 80, lineHeight: 1, fontWeight: 800,
    color: '#00c853', opacity: 0.2,
  },
  quote: {
    margin: 0,
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(20px, 2.5vw, 26px)',
    lineHeight: 1.5,
    color: '#f5f5f5',
    fontStyle: 'normal',
    fontWeight: 500,
    flex: 1,
  },
  caption: {
    display: 'flex', alignItems: 'center', gap: 14,
    paddingTop: 24, borderTop: '1px solid #1f1f1f',
  },
  cardLogo: {
    width: 44, height: 44, objectFit: 'contain',
    borderRadius: 10, background: '#fafafa', padding: 5,
    flexShrink: 0,
  },
  cardName: {
    fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700,
    color: '#fafafa',
  },
  cardRole: {
    fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a3a3a3',
    marginTop: 2,
  },
};

window.Testimonials = Testimonials;
