import { useState } from "react";

const C = {
  bg: "#0F0F0F", surface: "#1A1A1A", surface2: "#222222",
  border: "#2A2A2A", borderLit: "#333333",
  lime: "#C6F135", limeGlow: "rgba(198,241,53,0.1)",
  white: "#FFFFFF", gray: "#888888", grayLight: "#BBBBBB",
};

const EXAMPLE = {
  goal: "Software engineer earning $60k+ remotely",
  field: "Computer Science", country: "Rwanda", stage: "Fresh graduate",
  priority: "Build and ship 2 full-stack projects on GitHub within 60 days — real problems, not tutorials — then apply to Andela, Deel, and Remote.com on day 61.",
};

const Tag = ({ label, active, onClick }) => (
  <span onClick={onClick} style={{
    fontSize: 12, padding: "5px 14px", borderRadius: 20, cursor: "pointer",
    border: `1px solid ${active ? C.lime : C.border}`,
    background: active ? C.limeGlow : "transparent",
    color: active ? C.lime : C.gray,
    transition: "all 0.15s", userSelect: "none", display: "inline-block",
  }}>{label}</span>
);

const TagGroup = ({ tags, active, onSelect }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {tags.map(t => <Tag key={t} label={t} active={active === t} onClick={() => onSelect(t)} />)}
  </div>
);

const iStyle = {
  width: "100%", background: C.surface2, border: `1px solid ${C.border}`,
  borderRadius: 8, color: C.white, fontSize: 14, fontFamily: "inherit",
  padding: "10px 14px", outline: "none", boxSizing: "border-box",
  transition: "border-color 0.15s",
};

const F = ({ label, sub, children }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 7 }}>
      <label style={{ fontSize: 12, color: C.gray, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 500 }}>{label}</label>
      {sub && <span style={{ fontSize: 11, color: "#555" }}>{sub}</span>}
    </div>
    {children}
  </div>
);

const Loader = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "2.5rem 0" }}>
    <div style={{ display: "flex", gap: 8 }}>
      {[0, 0.18, 0.36].map((d, i) => (
        <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: C.lime, animation: `kp 1.2s ease-in-out ${d}s infinite` }} />
      ))}
    </div>
    <div style={{ fontSize: 13, color: C.gray, textAlign: "center", lineHeight: 1.7 }}>
      Building your roadmap…<br /><span style={{ fontSize: 11, color: "#555" }}>Takes 10–20 seconds. Worth the wait.</span>
    </div>
  </div>
);

function RoadmapCard({ data, form, example }) {
  const phases = [
    { label: "Month 1–2", title: "Foundation", color: "#C6F135" },
    { label: "Month 2–4", title: "Build", color: "#A8D020" },
    { label: "Month 4–6", title: "Launch", color: "#8AB010" },
    { label: "Month 6–9", title: "Grow", color: "#6C9000" },
  ];

  const shareLinkedIn = () => {
    const url = encodeURIComponent("https://kleeonai-roadmap.vercel.app");
    const text = encodeURIComponent(`Just got my 9-month career roadmap from KleeOnAI — built specifically for African students. If you're figuring out your next move, try it:`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, "_blank");
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`Just got my 9-month AI career roadmap from @KleeOnAI — built for African students, actually specific and honest. Try yours:`);
    const url = encodeURIComponent("https://kleeonai-roadmap.vercel.app");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  return (
    <div>
      {example && (
        <div style={{ fontSize: 11, color: C.lime, textAlign: "center", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Example output
        </div>
      )}
      <div id="roadmap-card" style={{
        background: "#111", border: `1px solid ${C.borderLit}`,
        borderRadius: 14, padding: "1.5rem", marginBottom: example ? 0 : "1rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(198,241,53,0.04)", border: "1px solid rgba(198,241,53,0.07)" }} />
        <div style={{ position: "absolute", top: -8, right: -8, width: 70, height: 70, borderRadius: "50%", background: "rgba(198,241,53,0.06)", border: "1px solid rgba(198,241,53,0.1)" }} />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem", position: "relative" }}>
          <div style={{ flex: 1, paddingRight: 12 }}>
            <div style={{ fontSize: 11, color: C.lime, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, marginBottom: 5 }}>KleeOnAI · Career Roadmap</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: C.white, lineHeight: 1.3, marginBottom: 4 }}>{form.goal}</div>
            <div style={{ fontSize: 12, color: C.gray }}>{form.field}{form.field ? " · " : ""}{form.country} · {form.stage}</div>
          </div>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.limeGlow, border: `1px solid ${C.lime}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke={C.lime} strokeWidth="1.2" />
              <circle cx="9" cy="9" r="2.5" stroke={C.lime} strokeWidth="1.2" />
              <line x1="9" y1="2.5" x2="9" y2="15.5" stroke={C.lime} strokeWidth="0.8" strokeDasharray="1.5 2" />
              <line x1="2.5" y1="9" x2="15.5" y2="9" stroke={C.lime} strokeWidth="0.8" strokeDasharray="1.5 2" />
            </svg>
          </div>
        </div>

        <style>{`
          @media(max-width:480px){.phases-grid{grid-template-columns:1fr 1fr!important;gap:6px!important;}}
        `}</style>
        <div className="phases-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: "1.25rem" }}>
          {phases.map((p, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, borderRadius: 10, padding: "9px 10px", borderTop: `2px solid ${p.color}` }}>
              <div style={{ fontSize: 10, color: "#555", marginBottom: 2 }}>{p.label}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: C.white }}>{p.title}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(198,241,53,0.06)", border: "1px solid rgba(198,241,53,0.15)", borderRadius: 10, padding: "11px 13px" }}>
          <div style={{ fontSize: 11, color: C.lime, fontWeight: 500, letterSpacing: "0.05em", marginBottom: 5 }}>90-DAY PRIORITY</div>
          <div style={{ fontSize: 13, color: C.grayLight, lineHeight: 1.65 }}>{data.priority}</div>
        </div>

        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#3A3A3A" }}>kleeonai.com</span>
          <span style={{ fontSize: 11, color: "#3A3A3A" }}>9-month plan · AI-generated</span>
        </div>
      </div>

      {!example && (
        <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
          <button onClick={shareLinkedIn} style={{
            flex: 1, padding: "9px", borderRadius: 8, border: `1px solid ${C.border}`,
            background: "transparent", color: C.grayLight, fontSize: 13, cursor: "pointer",
          }}>Share on LinkedIn</button>
          <button onClick={shareTwitter} style={{
            flex: 1, padding: "9px", borderRadius: 8, border: `1px solid ${C.border}`,
            background: "transparent", color: C.grayLight, fontSize: 13, cursor: "pointer",
          }}>Share on X</button>
        </div>
      )}
    </div>
  );
}

function EmailCapture({ goal }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!email.includes("@")) return;
    setSent(true);
  };

  if (sent) return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1rem", textAlign: "center" }}>
      <div style={{ fontSize: 14, color: C.lime, fontWeight: 500, marginBottom: 4 }}>Roadmap sent</div>
      <div style={{ fontSize: 13, color: C.gray }}>Check your inbox. Welcome to KleeOnAI.</div>
    </div>
  );

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1rem" }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: C.white, marginBottom: 4 }}>Send your roadmap to your inbox</div>
      <div style={{ fontSize: 12, color: C.gray, marginBottom: 12 }}>Stay updated with tools, opportunities, and new KleeOnAI features.</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          onFocus={e => e.target.style.borderColor = C.lime}
          onBlur={e => e.target.style.borderColor = C.border}
          style={{ ...iStyle, flex: 1 }} />
        <button onClick={submit} style={{
          padding: "10px 18px", borderRadius: 8, border: "none",
          background: C.lime, color: C.bg, fontSize: 13, fontWeight: 600, cursor: "pointer", flexShrink: 0,
        }}>Send</button>
      </div>
    </div>
  );
}

function PlanSection({ plan }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", marginBottom: "1rem" }}>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gray, marginBottom: "1.25rem" }}>Full 9-month plan</div>
      <div style={{ fontSize: 14, lineHeight: 1.85, color: C.grayLight, whiteSpace: "pre-wrap" }}>{plan}</div>
    </div>
  );
}

function CrossLink() {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, color: C.white, marginBottom: 2 }}>Now automate your job search</div>
        <div style={{ fontSize: 12, color: C.gray }}>Content pipeline, task automator & more — KleeOnAI tools</div>
      </div>
      <a href="https://kleeonai-applic.vercel.app" target="_blank" rel="noreferrer" style={{
        padding: "8px 16px", borderRadius: 8, background: C.limeGlow,
        border: `1px solid ${C.lime}`, color: C.lime, fontSize: 12, fontWeight: 500,
        textDecoration: "none", flexShrink: 0, marginLeft: 12,
      }}>Open →</a>
    </div>
  );
}

async function callAPI(prompt) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (res.status === 429) throw new Error("Too many requests. Come back in an hour.");
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

export default function App() {
  const [country, setCountry] = useState("");
  const [field, setField] = useState("");
  const [stage, setStage] = useState("Fresh graduate");
  const [goal, setGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("Remote (global)");
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [plan, setPlan] = useState(null);
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);
  const [showExample, setShowExample] = useState(false);

  const generate = async () => {
    if (!country.trim() || !goal.trim()) return;
    setLoading(true); setCardData(null); setPlan(null); setError(null);
    setForm({ country, field, stage, goal, jobType });

    const prompt = `African student profile:
- Country: ${country}
- Field of study: ${field || "not specified"}
- Stage: ${stage}
- Career goal: ${goal}
- Current skills: ${skills || "none mentioned"}
- Job preference: ${jobType}

Generate a detailed 9-month career roadmap. Structure it as:

1. First: PRIORITY_ACTION: [one sentence, max 25 words — their single highest-priority 90-day action]

2. Then the full roadmap:
MONTH 1–2: Foundation
MONTH 2–4: Build
MONTH 4–6: Launch
MONTH 6–9: Grow & Scale
KEY TOOLS & RESOURCES
AFRICAN OPPORTUNITIES TO TARGET
HONEST REALITY CHECK

Be specific. Name real platforms, companies, programs, salaries. Reference the African context — AFCFTA, Andela, local ecosystems, remote work realities, timezone advantages. Don't be generic.`;

    try {
      const raw = await callAPI(prompt);
      const match = raw.match(/PRIORITY_ACTION:\s*(.+)/);
      const priority = match ? match[1].trim() : raw.split("\n")[0];
      const fullPlan = raw.replace(/PRIORITY_ACTION:\s*.+\n?/, "").trim();
      setCardData({ priority });
      setPlan(fullPlan);
    } catch (e) {
      setError(e.message || "Something went wrong. Try again.");
    }
    setLoading(false);
  };

  const canGenerate = country.trim() && goal.trim() && !loading;

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "2rem 1.25rem", fontFamily: "'Inter','DM Sans',system-ui,sans-serif", color: C.white }}>
      <style>{`
        @keyframes kp{0%,80%,100%{opacity:.2}40%{opacity:1}}
        *{box-sizing:border-box;}
        ::placeholder{color:#444!important;}
        input,textarea{color-scheme:dark;}
        :focus{outline:none;}
        input:focus,textarea:focus{border-color:#C6F135!important;}
        @media(max-width:520px){.grid2{grid-template-columns:1fr!important;}}
      `}</style>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.limeGlow, border: `1px solid ${C.lime}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6.5" stroke={C.lime} strokeWidth="1.2" />
                <circle cx="9" cy="9" r="2.5" stroke={C.lime} strokeWidth="1.2" />
                <line x1="9" y1="2.5" x2="9" y2="15.5" stroke={C.lime} strokeWidth="0.8" strokeDasharray="1.5 2" />
                <line x1="2.5" y1="9" x2="15.5" y2="9" stroke={C.lime} strokeWidth="0.8" strokeDasharray="1.5 2" />
              </svg>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>KleeOnAI</span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.25, marginBottom: 10 }}>
            Your 9-month career<br /><span style={{ color: C.lime }}>roadmap starts here.</span>
          </div>
          <div style={{ fontSize: 13, color: C.gray, maxWidth: 400, margin: "0 auto 14px" }}>
            Built for African students. Specific, honest, actionable. Not the generic advice you've heard before.
          </div>
          <button onClick={() => setShowExample(!showExample)} style={{
            background: "transparent", border: `1px solid ${C.border}`, color: C.gray,
            padding: "6px 16px", borderRadius: 20, fontSize: 12, cursor: "pointer",
          }}>{showExample ? "Hide example" : "See example output"}</button>
        </div>

        {showExample && (
          <div style={{ marginBottom: "1.5rem" }}>
            <RoadmapCard data={EXAMPLE} form={EXAMPLE} example={true} />
          </div>
        )}

        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "1.5rem", marginBottom: "1.25rem" }}>
          <div className="grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <F label="Your country">
              <input type="text" value={country} onChange={e => setCountry(e.target.value)}
                placeholder="e.g. Rwanda, Nigeria, Ghana"
                onFocus={e => e.target.style.borderColor = C.lime}
                onBlur={e => e.target.style.borderColor = C.border}
                style={iStyle} />
            </F>
            <F label="Field of study" sub="(optional)">
              <input type="text" value={field} onChange={e => setField(e.target.value)}
                placeholder="e.g. Computer Science, Finance"
                onFocus={e => e.target.style.borderColor = C.lime}
                onBlur={e => e.target.style.borderColor = C.border}
                style={iStyle} />
            </F>
          </div>

          <F label="Your stage">
            <TagGroup tags={["1st–2nd year", "3rd–4th year", "Fresh graduate", "1–3 yrs working"]} active={stage} onSelect={setStage} />
          </F>

          <F label="Dream career goal">
            <input type="text" value={goal} onChange={e => setGoal(e.target.value)}
              placeholder="e.g. Product manager at a tech company, Software engineer earning $60k+"
              onFocus={e => e.target.style.borderColor = C.lime}
              onBlur={e => e.target.style.borderColor = C.border}
              style={iStyle} />
          </F>

          <F label="Skills you already have" sub="(optional)">
            <input type="text" value={skills} onChange={e => setSkills(e.target.value)}
              placeholder="e.g. Python basics, Excel, public speaking"
              onFocus={e => e.target.style.borderColor = C.lime}
              onBlur={e => e.target.style.borderColor = C.border}
              style={iStyle} />
          </F>

          <F label="Job preference">
            <TagGroup tags={["Remote (global)", "Local African market", "Both"]} active={jobType} onSelect={setJobType} />
          </F>

          {error && (
            <div style={{ background: "rgba(226,75,74,0.1)", border: "1px solid rgba(226,75,74,0.3)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#F09595", marginTop: 8, marginBottom: 4 }}>
              {error}
            </div>
          )}

          <button onClick={generate} disabled={!canGenerate} style={{
            width: "100%", padding: "13px", borderRadius: 10, border: "none", marginTop: 8,
            background: canGenerate ? C.lime : C.surface2,
            color: canGenerate ? C.bg : C.gray,
            fontSize: 15, fontWeight: 600,
            cursor: canGenerate ? "pointer" : "not-allowed",
            transition: "all 0.15s",
          }}>
            {loading ? "Building your roadmap…" : "Generate my roadmap →"}
          </button>
        </div>

        {loading && <Loader />}

        {!loading && cardData && form && (
          <>
            <RoadmapCard data={cardData} form={form} example={false} />
            <EmailCapture goal={form.goal} />
            {plan && <PlanSection plan={plan} />}
            <CrossLink />
            <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
              <button onClick={() => { setCardData(null); setPlan(null); setForm(null); }} style={{
                background: "transparent", border: `1px solid ${C.border}`, color: C.gray,
                padding: "8px 20px", borderRadius: 8, fontSize: 13, cursor: "pointer",
              }}>Generate another →</button>
            </div>
          </>
        )}

        <div style={{ textAlign: "center", fontSize: 11, color: "#333", paddingBottom: "1.5rem" }}>
          kleeonai.com · powered by Claude
        </div>
      </div>
    </div>
  );
}
