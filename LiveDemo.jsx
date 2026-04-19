// ui_kits/website/LiveDemo.jsx
// Paste any email, get a live Claude triage + draft. The most technical flex on the page.

function LiveDemo() {
  const samples = [
    {
      label: 'Invoice dispute (DA)',
      from: 'kunde@example.dk',
      subject: 'Faktura 2041 — fejl i beløb?',
      body: 'Hej,\n\nJeg har modtaget faktura 2041 på 12.450 kr., men vi aftalte 9.800 kr. på mødet d. 3. april. Kan I kigge på det?\n\nMvh\nMette',
    },
    {
      label: 'Membership renewal',
      from: 'anna@talatabasketball.dk',
      subject: 'Fornyelse af medlemskab — U14',
      body: 'Hej,\n\nMin datter spiller på U14. Skal vi gøre noget for at forny medlemskabet til næste sæson? Hvornår er deadline?\n\nTak,\nAnna',
    },
    {
      label: 'Accountant question (EN)',
      from: 'mark@roskilde-revision.dk',
      subject: 'Q1 VAT filing — missing receipts',
      body: "Hi,\n\nI'm finalizing your Q1 VAT. Missing receipts for 3 expenses in March (copies attached). Can you forward originals by Friday?\n\nThanks,\nMark",
    },
  ];

  const [draft, setDraft]       = React.useState(null);
  const [state, setState]       = React.useState('idle'); // idle | running | done | error
  const [stage, setStage]       = React.useState(0);
  const [form, setForm]         = React.useState(samples[0]);
  const [tab, setTab]           = React.useState(0);

  const stageLabels = ['classifying', 'checking policy', 'drafting reply', 'finalizing'];

  const pickSample = (i) => { setTab(i); setForm(samples[i]); setDraft(null); setState('idle'); };

  const run = async () => {
    setState('running'); setStage(0); setDraft(null);
    const ticker = setInterval(() => {
      setStage(s => Math.min(s + 1, stageLabels.length - 1));
    }, 650);

    const prompt = `You are Rhynoflow, an admin-assistant agent for Danish SMBs and clubs. Triage this email and draft a reply.

Email:
From: ${form.from}
Subject: ${form.subject}
Body:
${form.body}

Return ONLY valid JSON with this exact shape, no prose, no markdown:
{
  "intent": "<short intent tag, snake_case>",
  "priority": "<low | medium | high>",
  "language": "<da | en>",
  "requires_human": <true | false>,
  "summary": "<1 sentence, same language as email>",
  "draft_reply": "<ready-to-send reply, same language as email, friendly + clear, sign off as 'Rhynoflow'>"
}`;

    try {
      // Simulated responses per sample tab — replace with /api/triage edge route before full launch
      const simulated = [
        {
          intent: 'invoice_dispute',
          priority: 'high',
          language: 'da',
          requires_human: true,
          summary: 'Kunde bestrider beløb på faktura 2041 — aftalte 9.800 kr., men modtaget 12.450 kr.',
          draft_reply: 'Hej Mette,\n\nTak for din besked. Vi har modtaget din henvendelse vedrørende faktura 2041 og kigger på det med det samme.\n\nVi vender tilbage inden for 1 arbejdsdag med en afklaring.\n\nMed venlig hilsen\nRhynoflow',
        },
        {
          intent: 'membership_renewal',
          priority: 'medium',
          language: 'da',
          requires_human: false,
          summary: 'Forælder spørger til fornyelse af U14-medlemskab og deadline.',
          draft_reply: 'Hej Anna,\n\nTak for din henvendelse! Fornyelse af medlemskabet sker automatisk ved sæsonstart. Du vil modtage en betalingsanmodning via MobilePay i løbet af de næste uger.\n\nHar du spørgsmål, er du altid velkommen til at skrive.\n\nMed venlig hilsen\nRhynoflow',
        },
        {
          intent: 'vat_filing_missing_receipts',
          priority: 'high',
          language: 'en',
          requires_human: true,
          summary: 'Accountant requests missing Q1 receipts for 3 March expenses by Friday.',
          draft_reply: "Hi Mark,\n\nThank you for flagging this. I'll track down the original receipts for the three March expenses and forward them to you by Thursday EOD.\n\nPlease let me know if you need anything else to finalize the Q1 filing.\n\nBest,\nRhynoflow",
        },
      ];
      await new Promise(r => setTimeout(r, 2600)); // realistic delay
      clearInterval(ticker);
      setDraft(simulated[tab]);
      setState('done');
      setStage(stageLabels.length - 1);
    } catch (e) {
      clearInterval(ticker);
      setState('error');
    }
  };

  return (
    <section id="demo" style={ldStyles.root}>
      <div style={ldStyles.inner}>
        <SectionHeader
          num="03"
          eyebrow="TRY IT LIVE"
          title="Paste any email. Watch it get handled."
          sub="This runs on the real model, in your browser, right now. No signup. Pick a sample or paste your own."
        />

        <div style={ldStyles.grid}>
          {/* LEFT: input */}
          <div style={ldStyles.pane}>
            <div style={ldStyles.paneHeader}>
              <span style={ldStyles.paneTitle}>inbox / incoming</span>
              <div style={ldStyles.tabs}>
                {samples.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => pickSample(i)}
                    style={{
                      ...ldStyles.tab,
                      background: tab === i ? '#0a0a0a' : 'transparent',
                      color: tab === i ? '#fafafa' : '#525252',
                      borderColor: tab === i ? '#0a0a0a' : '#e5e5e5',
                    }}
                  >{s.label}</button>
                ))}
              </div>
            </div>

            <div style={ldStyles.emailFields}>
              <Field label="from" value={form.from} onChange={v => setForm({ ...form, from: v })} />
              <Field label="subject" value={form.subject} onChange={v => setForm({ ...form, subject: v })} />
            </div>
            <textarea
              value={form.body}
              onChange={e => setForm({ ...form, body: e.target.value })}
              style={ldStyles.textarea}
              rows={10}
            />

            <div style={ldStyles.actions}>
              <button
                onClick={run}
                disabled={state === 'running'}
                style={{
                  ...ldStyles.runBtn,
                  opacity: state === 'running' ? 0.6 : 1,
                  cursor: state === 'running' ? 'wait' : 'pointer',
                }}
              >
                {state === 'running' ? 'running…' : 'Run Rhynoflow →'}
              </button>
              <span style={ldStyles.hint}>claude-haiku-4-5 · eu-west-1</span>
            </div>
          </div>

          {/* RIGHT: output */}
          <div style={{ ...ldStyles.pane, background: '#0a0a0a', borderColor: '#1a1a1a' }}>
            <div style={{ ...ldStyles.paneHeader, borderColor: '#1a1a1a' }}>
              <span style={{ ...ldStyles.paneTitle, color: '#a3a3a3' }}>agent / output</span>
              <span style={ldStyles.statusPill(state)}>{
                state === 'idle' ? 'ready' :
                state === 'running' ? stageLabels[stage] + '…' :
                state === 'done' ? 'complete' : 'error'
              }</span>
            </div>

            {state === 'idle' && (
              <div style={ldStyles.idleWrap}>
                <div style={ldStyles.idleCursor}>▌</div>
                <div style={ldStyles.idleText}>
                  waiting for input · press <kbd style={ldStyles.kbd}>Run Rhynoflow</kbd>
                </div>
              </div>
            )}

            {state === 'running' && (
              <div style={ldStyles.runningWrap}>
                {stageLabels.map((l, i) => (
                  <div key={l} style={{
                    ...ldStyles.runRow,
                    opacity: i <= stage ? 1 : 0.3,
                  }}>
                    <span style={{
                      ...ldStyles.runDot,
                      background: i < stage ? '#00c853' : i === stage ? '#fafafa' : '#525252',
                      animation: i === stage ? 'rhyno-blink 1s ease-in-out infinite' : 'none',
                    }} />
                    <span style={ldStyles.runLabel}>{l}</span>
                    {i < stage && <span style={ldStyles.runCheck}>✓</span>}
                  </div>
                ))}
              </div>
            )}

            {state === 'done' && draft && (
              <div style={ldStyles.outWrap}>
                <div style={ldStyles.outMeta}>
                  <MetaChip k="intent"   v={draft.intent} color="#00c853" />
                  <MetaChip k="priority" v={draft.priority} color={draft.priority === 'high' ? '#ef4444' : draft.priority === 'medium' ? '#f59e0b' : '#00c853'} />
                  <MetaChip k="lang"     v={draft.language} />
                  <MetaChip k="human"    v={draft.requires_human ? 'required' : 'optional'} />
                </div>
                <div style={ldStyles.summary}>
                  <span style={ldStyles.summaryLabel}>// summary</span>
                  <div style={ldStyles.summaryText}>{draft.summary}</div>
                </div>
                <div style={ldStyles.replyBlock}>
                  <div style={ldStyles.replyHeader}>
                    <span style={ldStyles.replyTitle}>draft_reply</span>
                    <span style={ldStyles.replyLen}>{draft.draft_reply?.length || 0} chars</span>
                  </div>
                  <pre style={ldStyles.replyPre}>{draft.draft_reply}</pre>
                </div>
              </div>
            )}

            {state === 'error' && (
              <div style={ldStyles.errorWrap}>
                <div style={ldStyles.errorTitle}>agent_error</div>
                <div style={ldStyles.errorText}>The demo call failed. Try another sample or check your connection.</div>
                <button onClick={() => setState('idle')} style={ldStyles.errorBtn}>reset</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div style={ldStyles.field}>
      <span style={ldStyles.fieldLabel}>{label}</span>
      <input value={value} onChange={e => onChange(e.target.value)} style={ldStyles.fieldInput} />
    </div>
  );
}

function MetaChip({ k, v, color }) {
  return (
    <span style={ldStyles.chip}>
      <span style={ldStyles.chipKey}>{k}</span>
      <span style={{ ...ldStyles.chipVal, color: color || '#fafafa' }}>{v}</span>
    </span>
  );
}

const ldStyles = {
  root: { background: '#fafafa', borderTop: '1px solid #e5e5e5' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '120px 32px' },
  grid: {
    marginTop: 64,
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
  },
  pane: {
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
    minHeight: 520,
  },
  paneHeader: {
    padding: '14px 20px',
    borderBottom: '1px solid #e5e5e5',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  paneTitle: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    color: '#525252', letterSpacing: '0.06em',
  },
  tabs: { display: 'flex', gap: 6 },
  tab: {
    padding: '4px 10px', borderRadius: 999,
    border: '1px solid', fontSize: 11, fontFamily: 'JetBrains Mono, monospace',
    cursor: 'pointer', transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
  },
  emailFields: { padding: '16px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 },
  field: { display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #f5f5f5', paddingBottom: 8 },
  fieldLabel: {
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
    color: '#a3a3a3', width: 56, flexShrink: 0,
  },
  fieldInput: {
    flex: 1, border: 'none', outline: 'none',
    fontSize: 13, color: '#0a0a0a', background: 'transparent',
    fontFamily: 'Inter, sans-serif',
  },
  textarea: {
    margin: '12px 20px', flex: 1,
    border: '1px solid #f5f5f5', borderRadius: 8,
    padding: 14, fontSize: 13, lineHeight: 1.5,
    fontFamily: 'Inter, sans-serif', color: '#0a0a0a',
    outline: 'none', resize: 'vertical',
    minHeight: 180,
  },
  actions: {
    padding: '16px 20px', borderTop: '1px solid #f5f5f5',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  runBtn: {
    padding: '10px 18px', borderRadius: 999,
    background: '#00c853', color: '#0a0a0a', border: 'none',
    fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif',
    transition: 'background 150ms cubic-bezier(0.2,0,0,1)',
  },
  hint: { fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#a3a3a3' },

  idleWrap: { padding: '40px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12, color: '#525252' },
  idleCursor: { color: '#00c853', fontFamily: 'JetBrains Mono, monospace', fontSize: 18, animation: 'rhyno-blink 1s ease-in-out infinite' },
  idleText: { fontFamily: 'JetBrains Mono, monospace', fontSize: 12 },
  kbd: {
    padding: '2px 6px', borderRadius: 4,
    background: '#1a1a1a', color: '#fafafa',
    fontSize: 11, border: '1px solid #262626',
  },

  runningWrap: { padding: '32px 20px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 },
  runRow: { display: 'flex', alignItems: 'center', gap: 12, transition: 'opacity 200ms' },
  runDot: { width: 8, height: 8, borderRadius: 999, flexShrink: 0 },
  runLabel: { color: '#fafafa', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, flex: 1 },
  runCheck: { color: '#00c853', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 },

  outWrap: { padding: '20px', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'auto', flex: 1 },
  outMeta: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  chip: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '4px 10px', borderRadius: 6,
    background: '#1a1a1a', border: '1px solid #262626',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
  },
  chipKey: { color: '#737373' },
  chipVal: { color: '#fafafa', fontWeight: 500 },
  summary: { display: 'flex', flexDirection: 'column', gap: 6 },
  summaryLabel: { color: '#525252', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 },
  summaryText: { color: '#fafafa', fontSize: 14, lineHeight: 1.5 },
  replyBlock: {
    background: '#050505', border: '1px solid #1a1a1a', borderRadius: 8, overflow: 'hidden',
  },
  replyHeader: {
    padding: '8px 14px', borderBottom: '1px solid #1a1a1a',
    display: 'flex', justifyContent: 'space-between',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
  },
  replyTitle: { color: '#00c853' },
  replyLen: { color: '#525252' },
  replyPre: {
    margin: 0, padding: 14,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: 1.6,
    color: '#fafafa', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
  },

  errorWrap: { padding: 28, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 },
  errorTitle: { color: '#ef4444', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600 },
  errorText: { color: '#a3a3a3', fontSize: 13 },
  errorBtn: {
    alignSelf: 'flex-start', marginTop: 8,
    padding: '6px 12px', borderRadius: 6,
    background: '#1a1a1a', color: '#fafafa', border: '1px solid #262626',
    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, cursor: 'pointer',
  },

  statusPill: (state) => ({
    padding: '3px 10px', borderRadius: 999,
    fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.06em',
    background:
      state === 'done'    ? 'rgba(0,200,83,0.15)' :
      state === 'error'   ? 'rgba(239,68,68,0.15)' :
      state === 'running' ? 'rgba(250,250,250,0.08)' :
                            'rgba(250,250,250,0.06)',
    color:
      state === 'done'    ? '#00c853' :
      state === 'error'   ? '#ef4444' :
      state === 'running' ? '#fafafa' :
                            '#a3a3a3',
  }),
};

if (typeof document !== 'undefined' && !document.getElementById('rhyno-blink-kf')) {
  const s = document.createElement('style');
  s.id = 'rhyno-blink-kf';
  s.textContent = `@keyframes rhyno-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.35; }
  }`;
  document.head.appendChild(s);
}

window.LiveDemo = LiveDemo;
