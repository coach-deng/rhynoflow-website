// ui_kits/website/MorningBriefing.jsx — interactive time-chip simulator.

const BRIEFINGS = {
  '06:30': {
    summary: 'Overnight · 3 new emails, 1 bank reconciliation, 0 blockers.',
    stats: [
      ['INBOX', '3'],
      ['RECONCILED', '1 · 1 250 kr'],
      ['FOR YOU', '0'],
    ],
    drafts: [
      { to: 'nordlys@example.dk',      subject: 'Re: Kontingent Q2 — paid, thank you', status: 'SENT',   time: '06:28' },
      { to: 'bogholder@example.dk',    subject: 'Q1 numbers attached',                  status: 'DRAFT',  time: '—' },
    ],
  },
  '07:00': {
    summary: 'Morning desk · 2 drafts ready, 1 filing approaching, pilot test green.',
    stats: [
      ['DRAFTS READY', '2'],
      ['DUE THIS WEEK', '3'],
      ['BLOCKED', '0'],
    ],
    drafts: [
      { to: 'cafe.nord@example.dk',    subject: 'Reminder: Invoice 0180 overdue',       status: 'DRAFT',  time: '—' },
      { to: 'skat@virk.dk',            subject: 'Momsindberetning · 4 820 kr',          status: 'DRAFT',  time: '—' },
      { to: 'coach@talatabasketball.dk', subject: 'Member list synced, 42 aktive',     status: 'SENT',   time: '06:58' },
    ],
  },
  '07:30': {
    summary: 'You are clear. Everything sendable has been sent or queued for approval.',
    stats: [
      ['YOUR INBOX', '0'],
      ['QUEUED', '2'],
      ['TIME BACK', '38 min'],
    ],
    drafts: [
      { to: 'nordlys@example.dk',      subject: 'Re: Kontingent Q2 — paid, thank you', status: 'SENT',   time: '06:28' },
      { to: 'coach@talatabasketball.dk', subject: 'Member list synced, 42 aktive',     status: 'SENT',   time: '06:58' },
      { to: 'cafe.nord@example.dk',    subject: 'Reminder: Invoice 0180 overdue',       status: 'SENT',   time: '07:12' },
    ],
  },
};

function MorningBriefing() {
  const [time, setTime] = React.useState('07:00');
  const data = BRIEFINGS[time];

  return (
    <section style={{ background: '#fafafa', padding: '112px 32px', borderBottom: '1px solid #e5e5e5' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 72, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <SectionLabel>MORNING BRIEFING</SectionLabel>
          <h2 style={{
            margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#0a0a0a',
          }}>
            Open your laptop to a finished inbox.
          </h2>
          <p style={{
            margin: 0, fontFamily: 'Inter, sans-serif',
            fontSize: 16, lineHeight: 1.6, color: '#525252', maxWidth: 440,
          }}>
            Rhynoflow wakes up before you do. It reads overnight mail, reconciles what cleared, drafts what needs drafting, and leaves only the judgment calls for you.
          </p>
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            {Object.keys(BRIEFINGS).map(t => (
              <button key={t} onClick={() => setTime(t)}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 500,
                  padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                  border: time === t ? '1px solid #0a0a0a' : '1px solid #e5e5e5',
                  background: time === t ? '#0a0a0a' : '#ffffff',
                  color: time === t ? '#fafafa' : '#0a0a0a',
                  fontVariantNumeric: 'tabular-nums',
                  transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
                }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: 20,
          padding: 28, display: 'flex', flexDirection: 'column', gap: 20,
          boxShadow: '0 1px 3px rgba(10,10,10,0.03), 0 10px 32px rgba(10,10,10,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#00c853' }} />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.1em',
                color: '#525252', textTransform: 'uppercase',
              }}>BRIEFING · {time} · 19 APR</span>
            </div>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3',
            }}>RHYNOFLOW CLIENT</span>
          </div>

          <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.5, color: '#0a0a0a' }}>
            {data.summary}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {data.stats.map(([l, v], i) => (
              <div key={i} style={{
                background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: 12,
                padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em',
                  color: '#a3a3a3', textTransform: 'uppercase',
                }}>{l}</span>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 20, fontWeight: 500,
                  color: '#0a0a0a', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
                }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #f0f0f0', paddingTop: 16 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em',
              color: '#525252', textTransform: 'uppercase', marginBottom: 8,
            }}>DRAFTED &amp; SENT</span>
            {data.drafts.map((d, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16,
                padding: '10px 0', borderBottom: i === data.drafts.length - 1 ? 'none' : '1px solid #f0f0f0',
                alignItems: 'center',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: '#0a0a0a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {d.subject}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3' }}>
                    to {d.to}
                  </span>
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 500,
                  letterSpacing: '0.06em', borderRadius: 6, padding: '3px 7px',
                  background: d.status === 'SENT' ? '#e6faee' : 'transparent',
                  color: d.status === 'SENT' ? '#006b2a' : '#525252',
                  border: d.status === 'SENT' ? 'none' : '1px solid #e5e5e5',
                }}>{d.status}</span>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3',
                  fontVariantNumeric: 'tabular-nums', minWidth: 40, textAlign: 'right',
                }}>{d.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <span style={{
      fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
      letterSpacing: '0.14em', color: '#00c853', textTransform: 'uppercase',
      display: 'inline-flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: '#00c853' }} />
      {children}
    </span>
  );
}

window.MorningBriefing = MorningBriefing;
window.SectionLabel = SectionLabel;
