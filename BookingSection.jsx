// BookingSection.jsx — dual CTA: book a call OR send a message

function BookingSection() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent('Rhynoflow enquiry from ' + form.name);
    const body = encodeURIComponent(
      'Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message
    );
    window.location.href = 'mailto:hello@rhynoflow.com?subject=' + subject + '&body=' + body;
    setSent(true);
  }

  return (
    <section id="book" style={bs.root}>
      <div style={bs.inner}>
        <div style={bs.head}>
          <span style={bs.label}>
            <span style={{ fontWeight: 600, color: '#0a0a0a' }}>07</span>
            <span style={{ color: '#a3a3a3', fontWeight: 400 }}> / GET STARTED</span>
          </span>
          <h2 style={bs.title}>Ready when you are.</h2>
          <p style={bs.sub}>
            Book a free 30-minute call and we will look at your actual inbox together.
            Or send a message if you prefer to start async.
          </p>
        </div>

        <div style={bs.grid}>
          {/* Left — Book a call */}
          <div style={bs.callCard}>
            <div style={bs.callTop}>
              <div style={bs.avatarWrap}>
                <div style={bs.avatarRing}>
                  <div style={bs.avatarInitials}>DA</div>
                </div>
                <div style={bs.onlineDot} />
              </div>
              <div>
                <div style={bs.callerName}>Deng Awak</div>
                <div style={bs.callerRole}>Founder, Rhynoflow</div>
              </div>
            </div>

            <div style={bs.callMeta}>
              <div style={bs.metaRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>30 minutes</span>
              </div>
              <div style={bs.metaRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span>Google Meet</span>
              </div>
              <div style={bs.metaRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>Europe / Copenhagen</span>
              </div>
            </div>

            <p style={bs.callDesc}>
              I will look at your actual inbox and calendar and tell you exactly what I would build for you. No pitch, no pressure.
            </p>

            <a
              href="https://cal.com/deng-awak-hzu0y1/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={bs.calBtn}
              onMouseEnter={e => e.currentTarget.style.background = '#00b34a'}
              onMouseLeave={e => e.currentTarget.style.background = '#00c853'}
            >
              Pick a time
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>

            <div style={bs.calBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Powered by Cal.com</span>
            </div>
          </div>

          {/* Divider */}
          <div style={bs.or}>
            <div style={bs.orLine} />
            <span style={bs.orText}>or</span>
            <div style={bs.orLine} />
          </div>

          {/* Right — Contact form */}
          <div style={bs.formCard}>
            <div style={bs.formHead}>
              <span style={bs.formTitle}>Send a message</span>
              <span style={bs.formSub}>We reply within one business day.</span>
            </div>

            {sent ? (
              <div style={bs.sentMsg}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Opening your mail app. We will get back to you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={bs.form}>
                <div style={bs.field}>
                  <label style={bs.fieldLabel}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={bs.input}
                    onFocus={e => e.target.style.borderColor = '#0a0a0a'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>
                <div style={bs.field}>
                  <label style={bs.fieldLabel}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    style={bs.input}
                    onFocus={e => e.target.style.borderColor = '#0a0a0a'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>
                <div style={bs.field}>
                  <label style={bs.fieldLabel}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us what you are spending time on every week..."
                    style={{ ...bs.input, resize: 'vertical', minHeight: 100 }}
                    onFocus={e => e.target.style.borderColor = '#0a0a0a'}
                    onBlur={e => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>
                <button
                  type="submit"
                  style={bs.submitBtn}
                  onMouseEnter={e => e.currentTarget.style.background = '#1a1a1a'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const bs = {
  root: { background: '#0a0a0a', padding: '120px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  head: { maxWidth: 720, marginBottom: 56 },
  label: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#a3a3a3' },
  title: { margin: '14px 0 16px', fontSize: 48, fontWeight: 600, letterSpacing: '-0.03em', color: '#fafafa', lineHeight: 1.08 },
  sub: { margin: 0, fontSize: 17, color: '#525252', lineHeight: 1.55, maxWidth: 620 },

  grid: { display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'stretch' },

  // Call card
  callCard: {
    background: '#111111', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20, padding: 36,
    display: 'flex', flexDirection: 'column', gap: 20,
  },
  callTop: { display: 'flex', alignItems: 'center', gap: 14 },
  avatarWrap: { position: 'relative', flexShrink: 0 },
  avatarRing: {
    width: 48, height: 48, borderRadius: 999,
    background: '#00c853', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  avatarInitials: { fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#0a0a0a' },
  onlineDot: {
    position: 'absolute', bottom: 2, right: 2,
    width: 10, height: 10, borderRadius: 999,
    background: '#00c853', border: '2px solid #111111',
  },
  callerName: { fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, color: '#fafafa' },
  callerRole: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#525252', marginTop: 2 },

  callMeta: { display: 'flex', flexDirection: 'column', gap: 8 },
  metaRow: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#a3a3a3',
  },

  callDesc: { margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#525252', lineHeight: 1.55 },

  calBtn: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    background: '#00c853', color: '#0a0a0a',
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
    textDecoration: 'none', padding: '12px 20px', borderRadius: 999,
    transition: 'background 150ms cubic-bezier(0.2,0,0,1)',
  },
  calBadge: {
    display: 'flex', alignItems: 'center', gap: 6,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#525252', letterSpacing: '0.06em',
  },

  // OR divider
  or: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 12, padding: '0 32px',
  },
  orLine: { width: 1, flex: 1, background: 'rgba(255,255,255,0.06)' },
  orText: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#525252',
    letterSpacing: '0.1em', flexShrink: 0,
  },

  // Form card
  formCard: {
    background: '#111111', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20, padding: 36,
    display: 'flex', flexDirection: 'column', gap: 24,
  },
  formHead: { display: 'flex', flexDirection: 'column', gap: 6 },
  formTitle: { fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600, color: '#fafafa' },
  formSub: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#525252' },

  form: { display: 'flex', flexDirection: 'column', gap: 16 },
  field: { display: 'flex', flexDirection: 'column', gap: 6 },
  fieldLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', color: '#a3a3a3' },
  input: {
    fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#fafafa',
    background: '#0a0a0a', border: '1px solid #e5e5e5',
    borderRadius: 10, padding: '10px 14px',
    outline: 'none', transition: 'border-color 150ms',
    width: '100%', boxSizing: 'border-box',
  },
  submitBtn: {
    background: '#0a0a0a', color: '#fafafa', border: '1px solid rgba(255,255,255,0.12)',
    fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
    padding: '12px 20px', borderRadius: 999, cursor: 'pointer',
    transition: 'background 150ms', marginTop: 4,
  },
  sentMsg: {
    display: 'flex', alignItems: 'center', gap: 12,
    fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#a3a3a3',
    background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.15)',
    borderRadius: 12, padding: '16px 20px',
  },
};

window.BookingSection = BookingSection;
