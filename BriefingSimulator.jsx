// ui_kits/website/BriefingSimulator.jsx
// Morning briefing — click a time chip to reveal the inbox summary + drafted emails.

const BRIEFINGS = {
  '06:30': {
    summary: 'Overnight inbox: 12 new, 3 need attention. No blockers.',
    inbox: [
      { from: 'SKAT',                    subject: 'Momsindberetning — kvittering Q1',    tag: 'FILING',  time: '23:14' },
      { from: 'Nordea Erhverv',          subject: 'Kontoudtog · 18 apr',                  tag: 'BANK',    time: '01:02' },
      { from: 'Foreningen Nordlys',      subject: 'Kontingent Q2 — betalt',               tag: 'PAID',    time: '05:22' },
    ],
    drafts: [
      { to: 'louise@bogholder.dk',       subject: 'Re: Q1 afstemning',                   preview: 'Tak — vedlagt er kontoudtoget for marts. Differencen på 420 kr er fundet og bogført som…' },
      { to: 'kasserer@ifaalborg.dk',     subject: 'Kontingent Q2 · faktura vedhæftet',    preview: 'Hej Peter. Her er jeres faktura for Q2 (850 kr). Betaling via FIK 73 senest 1 maj…' },
    ],
  },
  '07:00': {
    summary: 'Ready for review: 2 drafts, 1 reminder. Cash flow is green.',
    inbox: [
      { from: 'Talata Basketball',       subject: 'Medlemsliste opdateret',              tag: 'MEMBERS', time: '06:48' },
      { from: 'Bakery Sct. Peder',       subject: 'Regning #0183 — modtaget',            tag: 'PAID',    time: '06:51' },
      { from: 'Café Nord',               subject: 'Re: Betalingspåmindelse',             tag: 'REPLY',   time: '06:55' },
    ],
    drafts: [
      { to: 'kontakt@cafenord.dk',       subject: 'Re: Betalingspåmindelse',              preview: 'Tak for beskeden. Betaling er registreret på kontoen i morges kl. 06:44. Afmelder påmindelsen…' },
      { to: 'styrelsen@talata.dk',       subject: 'Ugerapport · uge 16',                  preview: '3 nye medlemmer i denne uge, 1 udmeldelse. Kontingent Q2 sendt til 42 af 44 aktive…' },
    ],
  },
  '07:30': {
    summary: 'All drafts approved. 2 follow-ups queued for tomorrow.',
    inbox: [
      { from: 'SKAT',                    subject: 'Frist · moms Q2 den 1 juli',           tag: 'FILING',  time: '07:12' },
      { from: 'Advokat Brøndum',         subject: 'Årsrapport 2025 — signeret',           tag: 'SIGNED',  time: '07:18' },
      { from: 'Rhynoflow',               subject: 'Briefing sendt · tak for i dag',       tag: 'SYSTEM',  time: '07:30' },
    ],
    drafts: [
      { to: 'team@rhynoflow.com',        subject: 'I morgen · 06:30',                     preview: 'Planlagte opgaver: afstemning april, fakturering Q2 for 3 foreninger, SKAT-påmindelse 21 apr.' },
    ],
  },
};

function BriefingSimulator() {
  const [slot, setSlot] = React.useState('07:00');
  const data = BRIEFINGS[slot];
  const slots = Object.keys(BRIEFINGS);

  return (
    <section id="briefing" style={bsStyles.root}>
      <div style={bsStyles.inner}>
        <div style={bsStyles.head}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
            color: '#525252', letterSpacing: '0.06em', marginBottom: 20,
          }}>
            <span style={{ color: '#0a0a0a', fontWeight: 600 }}>04</span>
            <span style={{ color: '#d4d4d4' }}>/</span>
            <span style={{ fontWeight: 500 }}>THE BRIEFING</span>
          </div>
          <h2 style={bsStyles.title}>
            A briefing on your desk, <span style={{ color: '#525252' }}>before coffee.</span>
          </h2>
          <p style={bsStyles.sub}>
            Every morning, Rhynoflow sorts the inbox, drafts the replies, and queues the reminders.
            You open the briefing, read three bullets, approve what matters. The rest is already done.
          </p>
        </div>

        <div style={bsStyles.chipRow}>
          <span style={bsStyles.chipLabel}>PICK A MORNING</span>
          {slots.map((s) => (
            <button
              key={s}
              onClick={() => setSlot(s)}
              style={{
                ...bsStyles.chip,
                background: slot === s ? '#0a0a0a' : '#ffffff',
                color:      slot === s ? '#fafafa' : '#0a0a0a',
                borderColor: slot === s ? '#0a0a0a' : '#e5e5e5',
              }}
            >{s}</button>
          ))}
        </div>

        <div style={bsStyles.window}>
          <div style={bsStyles.windowHead}>
            <div style={bsStyles.dots}>
              <span style={{ ...bsStyles.tlDot, background: '#e5e5e5' }} />
              <span style={{ ...bsStyles.tlDot, background: '#e5e5e5' }} />
              <span style={{ ...bsStyles.tlDot, background: '#e5e5e5' }} />
            </div>
            <span style={bsStyles.windowTitle}>Morning briefing · {slot} · 19 apr 2026</span>
            <span style={bsStyles.windowMeta}>TO: TALATA · FOUNDER</span>
          </div>

          <div style={bsStyles.summary}>
            <span style={bsStyles.summaryLabel}>SUMMARY</span>
            <p style={bsStyles.summaryText}>{data.summary}</p>
          </div>

          <div style={bsStyles.twoCol}>
            <div style={bsStyles.col}>
              <div style={bsStyles.colHead}>
                <span style={bsStyles.colLabel}>INBOX</span>
                <span style={bsStyles.colCount}>{data.inbox.length} NEW</span>
              </div>
              {data.inbox.map((m, i) => (
                <div key={i} style={bsStyles.inboxRow}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={bsStyles.inboxFrom}>{m.from}</div>
                    <div style={bsStyles.inboxSubject}>{m.subject}</div>
                  </div>
                  <span style={bsStyles.mono}>{m.time}</span>
                  <span style={bsStyles.tag}>{m.tag}</span>
                </div>
              ))}
            </div>

            <div style={bsStyles.col}>
              <div style={bsStyles.colHead}>
                <span style={bsStyles.colLabel}>DRAFTED FOR YOU</span>
                <span style={bsStyles.colCount}>{data.drafts.length} READY</span>
              </div>
              {data.drafts.map((d, i) => (
                <div key={i} style={bsStyles.draftRow}>
                  <div style={bsStyles.draftHead}>
                    <span style={bsStyles.draftTo}>To {d.to}</span>
                    <button style={bsStyles.approve}>Approve</button>
                  </div>
                  <div style={bsStyles.draftSubject}>{d.subject}</div>
                  <div style={bsStyles.draftPreview}>{d.preview}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const bsStyles = {
  root: { background: '#fafafa', padding: '120px 32px', borderTop: '1px solid #e5e5e5' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  head: { maxWidth: 720, marginBottom: 48 },
  label: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#00c853' },
  title: { margin: '14px 0 16px', fontSize: 48, fontWeight: 600, letterSpacing: '-0.03em', color: '#0a0a0a', lineHeight: 1.08, textWrap: 'balance' },
  sub: { margin: 0, fontSize: 17, color: '#525252', lineHeight: 1.55, maxWidth: 620 },

  chipRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 },
  chipLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em', color: '#a3a3a3', marginRight: 8 },
  chip: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 500,
    padding: '8px 16px', borderRadius: 999, border: '1px solid',
    cursor: 'pointer', transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
    letterSpacing: '0.02em',
  },

  window: {
    background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: 20, overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(10,10,10,0.04), 0 20px 48px rgba(10,10,10,0.06)',
  },
  windowHead: {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '14px 20px', borderBottom: '1px solid #f0f0f0', background: '#fafafa',
  },
  dots: { display: 'flex', gap: 6 },
  tlDot: { width: 10, height: 10, borderRadius: 999 },
  windowTitle: { fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#525252', flex: 1 },
  windowMeta: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#a3a3a3', letterSpacing: '0.08em' },

  summary: { padding: '24px 28px', borderBottom: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: 8 },
  summaryLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em', color: '#a3a3a3', fontWeight: 500 },
  summaryText: { margin: 0, fontSize: 20, fontWeight: 500, color: '#0a0a0a', letterSpacing: '-0.015em', lineHeight: 1.35 },

  twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  col: { padding: '20px 28px', borderRight: '1px solid #f0f0f0' },
  colHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 },
  colLabel: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em', color: '#0a0a0a', fontWeight: 600 },
  colCount: { fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em', color: '#a3a3a3' },

  inboxRow: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '12px 0', borderBottom: '1px solid #f0f0f0',
  },
  inboxFrom: { fontSize: 13, fontWeight: 500, color: '#0a0a0a' },
  inboxSubject: { fontSize: 12, color: '#525252', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  mono: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3', fontVariantNumeric: 'tabular-nums' },
  tag: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 500,
    letterSpacing: '0.08em', color: '#525252',
    background: '#f5f5f5', borderRadius: 6, padding: '3px 6px',
  },

  draftRow: { padding: '14px 0', borderBottom: '1px solid #f0f0f0' },
  draftHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  draftTo: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#525252' },
  approve: {
    fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
    background: '#00c853', color: '#0a0a0a', border: 'none',
    padding: '4px 10px', borderRadius: 999, cursor: 'pointer',
  },
  draftSubject: { fontSize: 13, fontWeight: 500, color: '#0a0a0a', marginBottom: 4 },
  draftPreview: { fontSize: 12, color: '#525252', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' },
};

window.BriefingSimulator = BriefingSimulator;
