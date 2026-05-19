// ui_kits/website/CaseStudyCard.jsx
// Added 2026-05-19 as part of conversion-boost sprint. Update stats after Nordics May 30-31.

function CaseStudyCard() {
  return (
    <section id="case-study" style={csStyles.root}>
      <div style={csStyles.inner}>
        <a href="/case-studies/dpf.html" style={csStyles.card} data-rh="case-card">
          <div style={csStyles.header}>
            <img
              src="https://danskpuslespilsforening.dk/wp-content/uploads/2024/03/cropped-cropped-logo-rund-dansk-150x150.png"
              alt="Dansk Puslespilsforening"
              style={csStyles.logo}
            />
            <div style={csStyles.label}>
              <span style={csStyles.labelDot} />
              CASE STUDY / FEATURED
            </div>
          </div>

          <h3 style={csStyles.h3}>
            How Dansk Puslespilsforening rebuilt their admin in 6 weeks.
          </h3>
          <p style={csStyles.sub}>
            A 4-person volunteer board. 100+ members. The Nordic Championship. All run from one inbox that drafts itself.
          </p>

          <div style={csStyles.stats} data-rh="case-stats">
            <div style={csStyles.stat}>
              <div style={csStyles.statVal}>~5h</div>
              <div style={csStyles.statLabel}>saved per week</div>
            </div>
            <div style={csStyles.statDiv} />
            <div style={csStyles.stat}>
              <div style={csStyles.statVal}>48</div>
              <div style={csStyles.statLabel}>tasks extracted from one meeting</div>
            </div>
            <div style={csStyles.statDiv} />
            <div style={csStyles.stat}>
              <div style={csStyles.statVal}>06:00</div>
              <div style={csStyles.statLabel}>Monday briefing in inbox</div>
            </div>
          </div>

          <div style={csStyles.ctaRow}>
            <div style={csStyles.cta}>
              Read the full story
              <span style={csStyles.ctaArrow}>→</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

const csStyles = {
  root: {
    background: '#fafafa',
    padding: '64px 32px',
    borderBottom: '1px solid #e5e5e5',
  },
  inner: {
    maxWidth: 1100, margin: '0 auto',
  },
  card: {
    display: 'block',
    padding: '40px 48px',
    background: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 20,
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s ease',
  },
  header: {
    display: 'flex', alignItems: 'center', gap: 16,
    marginBottom: 20,
  },
  logo: {
    width: 56, height: 56, objectFit: 'contain', flexShrink: 0,
  },
  label: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', color: '#a3a3a3',
  },
  labelDot: {
    width: 6, height: 6, borderRadius: 999, background: '#00c853',
  },
  h3: {
    margin: '0 0 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(20px, 2.2vw, 28px)',
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
    color: '#0a0a0a',
  },
  sub: {
    margin: '0 0 28px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 15, lineHeight: 1.55,
    color: '#525252',
    maxWidth: 640,
  },
  stats: {
    display: 'flex', alignItems: 'center', gap: 28,
    flexWrap: 'wrap',
    marginBottom: 28,
    paddingTop: 24,
    borderTop: '1px solid #f0f0f0',
  },
  stat: {
    display: 'flex', flexDirection: 'column', gap: 2,
  },
  statVal: {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 22, fontWeight: 600,
    color: '#0a0a0a', letterSpacing: '-0.02em',
  },
  statLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 12, color: '#a3a3a3',
  },
  statDiv: {
    width: 1, height: 28, background: '#e5e5e5',
  },
  ctaRow: {
    display: 'flex', justifyContent: 'flex-start',
  },
  cta: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '12px 22px',
    background: '#0a0a0a',
    color: '#fafafa',
    borderRadius: 999,
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
  },
  ctaArrow: {
    fontSize: 16,
  },
};

window.CaseStudyCard = CaseStudyCard;
