// BookingSection.jsx — inline Cal.com embed + contact form

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
    <section id="book" data-rh="section" style={bs.root}>
      <div style={bs.inner}>
        <div style={bs.head}>
          <span style={bs.label}>
            <span style={{ fontWeight: 600, color: '#0a0a0a' }}>07</span>
            <span style={{ color: '#a3a3a3', fontWeight: 400 }}> / GET STARTED</span>
          </span>
          <h2 style={bs.title}>Let's talk.</h2>
          <p style={bs.sub}>
            Book a free 30-minute call and we'll dig into your actual inbox together.
            Prefer email? Just send a message.
          </p>
        </div>

        <div data-rh="booking-inner" style={bs.grid}>

          {/* Left — Cal.com iframe embed */}
          <div style={bs.calCard}>
            <iframe
              src="https://cal.com/deng-awak-hzu0y1/30min?embed=true&layout=month_view&theme=dark"
              data-rh="cal-embed"
              style={bs.calEmbed}
              frameBorder="0"
              title="Book a call with Deng"
            />
          </div>

          {/* Divider */}
          <div data-rh="hide-mobile" style={bs.or}>
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
                <span>Opening your mail app. We'll get back to you shortly.</span>
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
                    onFocus={e => e.target.style.borderColor = '#00c853'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
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
                    onFocus={e => e.target.style.borderColor = '#00c853'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
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
                    onFocus={e => e.target.style.borderColor = '#00c853'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
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

  grid: { display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'start' },

  // Cal card (left)
  calCard: {
    background: '#111111', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20, overflow: 'hidden',
  },
  calHeader: { display: 'flex', alignItems: 'center', gap: 14 },
  avatarWrap: { position: 'relative', flexShrink: 0 },
  avatarImg: {
    width: 48, height: 48, borderRadius: 999,
    objectFit: 'cover', display: 'block',
    border: '2px solid #00c853',
  },
  onlineDot: {
    position: 'absolute', bottom: 2, right: 2,
    width: 10, height: 10, borderRadius: 999,
    background: '#00c853', border: '2px solid #111111',
  },
  callerName: { fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, color: '#fafafa' },
  callerRole: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#525252', marginTop: 2 },

  calMeta: { display: 'flex', gap: 20 },
  metaRow: {
    display: 'flex', alignItems: 'center', gap: 6,
    fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#525252',
  },

  calDesc: {
    margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14,
    color: '#525252', lineHeight: 1.55,
    paddingBottom: 4,
  },

  calEmbed: {
    width: '100%',
    minHeight: 600,
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    marginTop: 4,
    borderRadius: '0 0 20px 20px',
  },

  // OR divider
  or: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 12, padding: '0 32px', minHeight: 400,
  },
  orLine: { width: 1, flex: 1, background: 'rgba(255,255,255,0.06)' },
  orText: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#525252',
    letterSpacing: '0.1em', flexShrink: 0,
  },

  // Form card (right)
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
    background: '#0a0a0a', border: '1px solid #2a2a2a',
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
