import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/**
 * Kawah Systems Inc. — Federal Capability Statement (single-page)
 * Swiss / International Typographic Style. Slate-blue palette.
 */

const CAPABILITIES = [
  { n: "01", title: "Government Contract Management & Execution", desc: "Cradle-to-close administration of federal awards." },
  { n: "02", title: "Subcontractor & Vendor Quality Oversight", desc: "Specification conformance verified before government acceptance." },
  { n: "03", title: "Federal Procurement Navigation", desc: "FAR-aligned sourcing, compliance, and submission support." },
  { n: "04", title: "Small Business & Non-Profit Entity Stand-Up", desc: "Registration, certification, and operating-structure setup." },
];

const NAICS = [
  { code: "541611", label: "Administrative & General Management Consulting" },
  { code: "541614", label: "Process, Distribution & Logistics Consulting" },
  { code: "541690", label: "Other Scientific & Technical Consulting" },
  { code: "541990", label: "All Other Professional, Scientific & Technical" },
];

const PSC = [
  { code: "R408", label: "Program Management / Support Services" },
  { code: "R425", label: "Engineering & Technical Services" },
  { code: "R499", label: "Other Professional Services" },
];

const MAILTO =
  "mailto:info@kawahsystems.com?subject=Request%20for%20Capability%20Statement%20%E2%80%94%20Kawah%20Systems%20Inc.";

function Logo({ animate = false }) {
  const letters = "SYSTEMS".split("");
  return (
    <a href="#top" className={"ks-logo" + (animate ? " ks-logo--anim" : "")} aria-label="Kawah Systems — home">
      <span className="ks-logo-top">KAWAH</span>
      <span className="ks-logo-rule" aria-hidden="true" />
      <span className="ks-logo-bottom" aria-hidden="true">
        {letters.map((ch, i) => (
          <span key={i} style={{ animationDelay: `${0.42 + i * 0.045}s` }}>{ch}</span>
        ))}
      </span>
    </a>
  );
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ks-reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useUtcClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const p = (n) => String(n).padStart(2, "0");
      setT(`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function KawahSystems() {
  useReveal();
  const utc = useUtcClock();

  return (
    <div className="ks-root" id="top">
      <style>{CSS}</style>

      {/* ─────────────── UTILITY / STATUS BAR ─────────────── */}
      <div className="ks-utility">
        <div className="ks-shell ks-utility-inner">
          <span className="ks-util-left">
            KSI <i>·</i> Federal Capability Statement <i>·</i> Doc&nbsp;Ref&nbsp;KS-CAP-2026
          </span>
          <span className="ks-util-right">
            <span className="ks-status">
              <span className="ks-status-dot" aria-hidden="true" />
              System Active
            </span>
            <span className="ks-util-sep" aria-hidden="true" />
            <span className="ks-clock">{utc} UTC</span>
          </span>
        </div>
      </div>

      {/* ─────────────── HEADER ─────────────── */}
      <header className="ks-header">
        <div className="ks-shell ks-header-inner">
          <Logo animate />
          <nav className="ks-nav" aria-label="Primary">
            <a href="#capabilities" className="ks-nav-link">Capabilities</a>
            <a href="#performance" className="ks-nav-link">Performance</a>
            <a href="#teaming" className="ks-nav-link">Teaming</a>
            <a href="#codes" className="ks-nav-link">Codes</a>
            <a href={MAILTO} className="ks-cta">
              Request Capability Statement
              <ArrowUpRight className="ks-cta-icon" size={15} strokeWidth={2.25} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ─────────────── HERO ─────────────── */}
        <section className="ks-hero-band">
          <div className="ks-grid-bg" aria-hidden="true" />
          <span className="ks-cross ks-cross--tl" aria-hidden="true" />
          <span className="ks-cross ks-cross--tr" aria-hidden="true" />
          <span className="ks-coord ks-coord--tl" aria-hidden="true">X 00.0</span>
          <span className="ks-coord ks-coord--tr" aria-hidden="true">Y 00.0</span>

          <div className="ks-shell ks-hero">
            <div className="ks-hero-main ks-reveal">
              <p className="ks-eyebrow">
                Capability Statement <span className="ks-eyebrow-sep">/</span> Kawah Systems Inc.
              </p>
              <h1 className="ks-h1">
                Agile Procurement &amp; Subcontractor Oversight for Federal Missions.
              </h1>
              <p className="ks-lede">
                A Woman-Owned Small Business (WOSB) delivering top-tier goods, services,
                and compliance navigation with zero bureaucratic drag.
              </p>
              <a href={MAILTO} className="ks-hero-cta">
                Request capability statement
                <ArrowRight size={16} strokeWidth={2.25} />
              </a>
            </div>

            <aside className="ks-register ks-reveal" aria-label="Entity registration">
              <RegRow label="Entity" value="Kawah Systems Inc." />
              <RegRow label="UEI" value="GMU2TGGHJD23" mono />
              <RegRow label="CAGE" value="6GXK0" mono />
              <RegRow label="Status" value="SAM.gov Active" />
              <RegRow label="Class" value="WOSB" />
              <RegRow label="Past Perf." value="U.S. Navy / DOD" />
            </aside>
          </div>
        </section>

        {/* trust strip */}
        <div className="ks-trust">
          <div className="ks-shell ks-trust-inner">
            <span>Woman-Owned Small Business</span><Dot />
            <span>UEI&nbsp;GMU2TGGHJD23</span><Dot />
            <span>CAGE&nbsp;6GXK0</span><Dot />
            <span>SAM.gov Active</span><Dot />
            <span>DOD Past Performance (U.S. Navy)</span>
          </div>
        </div>

        {/* ─────────────── CAPABILITIES INDEX ─────────────── */}
        <section className="ks-band" id="capabilities">
          <div className="ks-shell">
            <header className="ks-section-head ks-reveal">
              <p className="ks-eyebrow">
                Core Capabilities <span className="ks-eyebrow-sep">/</span> Index
              </p>
              <span className="ks-section-count">04 lines</span>
            </header>
            <ul className="ks-ledger">
              {CAPABILITIES.map((c, i) => (
                <li key={c.n} className="ks-row ks-reveal" tabIndex={0} style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="ks-row-num">{c.n}</span>
                  <span className="ks-row-title">{c.title}</span>
                  <span className="ks-row-desc">{c.desc}</span>
                  <ArrowUpRight className="ks-row-arrow" size={20} strokeWidth={2} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────────── PROVEN PERFORMANCE (DARK BAND) ─────────────── */}
        <section className="ks-band ks-band--dark" id="performance">
          <div className="ks-shell">
            <header className="ks-section-head ks-section-head--dark ks-reveal">
              <p className="ks-eyebrow ks-eyebrow--dark">
                Proven Performance <span className="ks-eyebrow-sep">/</span> Past Performance Record
              </p>
              <span className="ks-section-count ks-section-count--dark">Anchor reference</span>
            </header>

            <div className="ks-proof ks-reveal">
              <div className="ks-proof-body">
                <p className="ks-proof-kicker">Case Vignette</p>
                <p className="ks-proof-text">
                  As prime contractor on Purchase Order N4215824PS067, Kawah Systems delivered
                  self-contained sanitation stations supporting Norfolk Naval Shipyard personnel
                  at Naval Station Norfolk — managing the full firm-fixed-price lifecycle from
                  quote and technical certification through OPSEC-compliant delivery, scheduled
                  servicing, and WAWF invoicing.
                </p>
                <p className="ks-proof-text">
                  The engagement closed on schedule and in full compliance. It is the firm&apos;s
                  anchor federal past-performance reference: prime-level execution, exacting
                  standards, and accountability end to end.
                </p>
              </div>
              <dl className="ks-proof-ledger">
                <ProofRow label="Client" value="Norfolk Naval Shipyard — U.S. Navy" />
                <ProofRow label="Contract" value="N4215824PS067 · Firm-Fixed-Price" />
                <ProofRow label="Scope" value="Prime — sanitation stations supporting NNSY personnel, Naval Station Norfolk" />
                <ProofRow label="Period" value="30 May – 29 Nov 2024" />
                <ProofRow label="Record" value="Delivered on schedule, in full, fully compliant" />
              </dl>
            </div>
          </div>
        </section>

        {/* ─────────────── TEAMING ─────────────── */}
        <section className="ks-band ks-teaming" id="teaming">
          <div className="ks-shell ks-teaming-inner">
            <div className="ks-teaming-main ks-reveal">
              <p className="ks-eyebrow">
                Teaming <span className="ks-eyebrow-sep">/</span> For Prime Contractors
              </p>
              <p className="ks-teaming-text">
                Kawah Systems partners with prime contractors as a Woman-Owned Small Business
                teaming partner — supporting small-business subcontracting goals on federal work
                with direct principal accountability and zero bureaucratic drag.
              </p>
            </div>
            <a href={MAILTO} className="ks-teaming-cta ks-reveal">
              Discuss a teaming arrangement
              <ArrowRight size={16} strokeWidth={2.25} />
            </a>
          </div>
        </section>

        {/* ─────────────── FOOTER ─────────────── */}
        <footer className="ks-footer" id="codes">
          <div className="ks-shell">
            <div className="ks-footer-grid">
              <div className="ks-foot-col">
                <p className="ks-foot-label">Location</p>
                <p className="ks-foot-value">Levittown, Pennsylvania<br />United States</p>
              </div>
              <div className="ks-foot-col">
                <p className="ks-foot-label">Direct</p>
                <p className="ks-foot-value">
                  Jebeh Kawah<br />
                  <span className="ks-foot-role">Founder &amp; Principal</span>
                </p>
                <p className="ks-foot-value ks-foot-contact">
                  <a href="tel:+12672814571" className="ks-foot-link ks-mono">+1 267 281 4571</a><br />
                  <a href={MAILTO} className="ks-foot-link">info@kawahsystems.com</a>
                </p>
              </div>
              <div className="ks-foot-col">
                <p className="ks-foot-label">NAICS</p>
                <ul className="ks-code-list">
                  {NAICS.map((x) => (
                    <li key={x.code} className="ks-code-row">
                      <span className="ks-mono ks-code">{x.code}</span>
                      <span className="ks-code-label">{x.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ks-foot-col">
                <p className="ks-foot-label">PSC</p>
                <ul className="ks-code-list">
                  {PSC.map((x) => (
                    <li key={x.code} className="ks-code-row">
                      <span className="ks-mono ks-code">{x.code}</span>
                      <span className="ks-code-label">{x.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="ks-foot-ids">
                  <div><p className="ks-foot-label ks-foot-label--tight">UEI</p><p className="ks-mono ks-code">GMU2TGGHJD23</p></div>
                  <div><p className="ks-foot-label ks-foot-label--tight">CAGE</p><p className="ks-mono ks-code">6GXK0</p></div>
                </div>
              </div>
            </div>
            <div className="ks-footer-base">
              <Logo />
              <p className="ks-foot-fine ks-mono">
                © {new Date().getFullYear()} Kawah Systems Inc. · Woman-Owned Small Business · Built lean.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function RegRow({ label, value, mono }) {
  return (
    <div className="ks-reg-row">
      <span className="ks-reg-label">{label}</span>
      <span className={"ks-reg-value" + (mono ? " ks-mono" : "")}>{value}</span>
    </div>
  );
}
function ProofRow({ label, value, muted }) {
  return (
    <div className="ks-proof-row">
      <dt className="ks-proof-dt">{label}</dt>
      <dd className={"ks-proof-dd" + (muted ? " ks-proof-dd-muted" : "")}>{value}</dd>
    </div>
  );
}
function Dot() { return <span className="ks-dot" aria-hidden="true">•</span>; }

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

.ks-root {
  /* light context */
  --paper:#F8FAFC; --white:#FFFFFF;
  --ink:#2B3856;         /* dark slate blue — primary structure + text */
  --ink-deep:#222C42;    /* utility bar — deepest anchor */
  --slate:#566D7E;       /* marble blue — secondary text */
  --line:#DCE3EC;        /* hairline (blue-tinted) on light */
  --cobalt:#2563EB;      /* accent — interactive only */
  /* dark context (on slate-blue band) */
  --line-dark:#3F4E6B;   /* hairline on dark */
  --ink-muted:#94A8BD;   /* muted marble text on dark */
  --ink-soft:#E7ECF3;    /* body text on dark */
  --accent-dark:#7FA8FF; /* brighter cobalt for legibility on dark */
  --sans:'Inter',system-ui,-apple-system,'Helvetica Neue',Arial,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;
  --shell:1240px;
  background:var(--paper); color:var(--ink); font-family:var(--sans);
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; line-height:1.5;
}
.ks-root *,.ks-root *::before,.ks-root *::after{box-sizing:border-box;margin:0;padding:0;}
.ks-root a{color:inherit;text-decoration:none;}
.ks-root ul{list-style:none;}
.ks-shell{max-width:var(--shell);margin:0 auto;padding-left:32px;padding-right:32px;}
.ks-mono{font-family:var(--mono);font-feature-settings:"tnum" 1;}
.ks-root a:focus-visible,.ks-root .ks-row:focus-visible{outline:2px solid var(--cobalt);outline-offset:3px;}

/* logo lockup — SYSTEMS spans KAWAH edge-to-edge */
.ks-logo{display:inline-flex;flex-direction:column;align-items:stretch;}
.ks-logo-top{font-weight:900;font-size:20px;letter-spacing:-0.04em;line-height:0.9;color:var(--ink);}
.ks-logo-rule{height:1px;background:var(--ink);margin:3px 0;transform-origin:left center;}
.ks-logo-bottom{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;text-transform:uppercase;color:var(--ink);}
.ks-logo-bottom span{display:inline-block;}
.ks-logo--anim .ks-logo-rule{animation:ks-draw 560ms cubic-bezier(.7,0,.2,1) 120ms both;}
.ks-logo--anim .ks-logo-bottom span{opacity:0;animation:ks-fade 360ms ease both;}
@keyframes ks-draw{from{transform:scaleX(0);}to{transform:scaleX(1);}}
@keyframes ks-fade{to{opacity:1;}}

/* utility / status bar */
.ks-utility{background:var(--ink-deep);color:var(--paper);}
.ks-utility-inner{display:flex;align-items:center;justify-content:space-between;height:34px;font-family:var(--mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;}
.ks-util-left{color:var(--ink-muted);}
.ks-util-left i{color:var(--line-dark);font-style:normal;padding:0 2px;}
.ks-util-right{display:flex;align-items:center;gap:14px;}
.ks-status{display:inline-flex;align-items:center;gap:7px;color:var(--paper);}
.ks-status-dot{width:6px;height:6px;border-radius:50%;background:var(--accent-dark);box-shadow:0 0 0 0 rgba(127,168,255,.6);animation:ks-pulse 2s ease-out infinite;}
@keyframes ks-pulse{0%{box-shadow:0 0 0 0 rgba(127,168,255,.55);}70%{box-shadow:0 0 0 7px rgba(127,168,255,0);}100%{box-shadow:0 0 0 0 rgba(127,168,255,0);}}
.ks-util-sep{width:1px;height:11px;background:var(--line-dark);}
.ks-clock{color:var(--ink-muted);letter-spacing:0.16em;}

/* header */
.ks-header{position:sticky;top:0;z-index:50;background:rgba(248,250,252,0.85);backdrop-filter:saturate(180%) blur(8px);border-bottom:1px solid var(--line);}
.ks-header-inner{display:flex;align-items:center;justify-content:space-between;height:76px;}
.ks-nav{display:flex;align-items:center;gap:34px;}
.ks-nav-link{font-size:13px;font-weight:500;color:var(--slate);transition:color 120ms ease;}
.ks-nav-link:hover{color:var(--cobalt);}
.ks-cta{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:var(--paper);font-size:13px;font-weight:600;padding:12px 18px;border:1px solid var(--ink);transition:background 130ms ease,border-color 130ms ease;}
.ks-cta:hover{background:var(--cobalt);border-color:var(--cobalt);}
.ks-cta-icon{transition:transform 130ms ease;}
.ks-cta:hover .ks-cta-icon{transform:translate(1px,-1px);}

/* shared */
.ks-eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:var(--slate);}
.ks-eyebrow--dark{color:var(--ink-muted);}
.ks-eyebrow-sep{color:var(--line);padding:0 4px;}
.ks-eyebrow--dark .ks-eyebrow-sep{color:var(--line-dark);}
.ks-band{padding-top:96px;padding-bottom:96px;border-top:1px solid var(--line);}
.ks-band--dark{background:var(--ink);color:var(--paper);border-top:none;}
.ks-section-head{display:flex;align-items:baseline;justify-content:space-between;padding-bottom:40px;gap:16px;}
.ks-section-count{font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--slate);}
.ks-section-count--dark{color:var(--ink-muted);}

/* reveal */
.ks-reveal{opacity:0;transform:translateY(16px);transition:opacity 620ms cubic-bezier(.2,.7,.2,1),transform 620ms cubic-bezier(.2,.7,.2,1);}
.ks-reveal.is-revealed{opacity:1;transform:none;}

/* hero */
.ks-hero-band{position:relative;overflow:hidden;background:var(--paper);}
.ks-grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:88px 88px;-webkit-mask-image:radial-gradient(120% 90% at 18% 8%,#000 0%,transparent 72%);mask-image:radial-gradient(120% 90% at 18% 8%,#000 0%,transparent 72%);opacity:0.6;pointer-events:none;}
.ks-cross{position:absolute;width:11px;height:11px;pointer-events:none;}
.ks-cross::before,.ks-cross::after{content:"";position:absolute;background:var(--slate);opacity:.5;}
.ks-cross::before{left:50%;top:0;width:1px;height:100%;transform:translateX(-.5px);}
.ks-cross::after{top:50%;left:0;height:1px;width:100%;transform:translateY(-.5px);}
.ks-cross--tl{top:30px;left:30px;}
.ks-cross--tr{top:30px;right:30px;}
.ks-coord{position:absolute;top:26px;font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--slate);opacity:.62;}
.ks-coord--tl{left:48px;}
.ks-coord--tr{right:48px;}
.ks-hero{position:relative;display:grid;grid-template-columns:repeat(12,1fr);padding-top:104px;padding-bottom:88px;}
.ks-hero-main{grid-column:1 / 9;padding-right:56px;}
.ks-hero-main .ks-eyebrow{margin-bottom:28px;}
.ks-h1{font-weight:800;font-size:clamp(2.6rem,5.4vw,4.6rem);line-height:0.99;letter-spacing:-0.035em;color:var(--ink);max-width:16ch;}
.ks-lede{margin-top:30px;font-size:clamp(1rem,1.4vw,1.18rem);line-height:1.6;color:var(--slate);max-width:52ch;}
.ks-hero-cta{display:inline-flex;align-items:center;gap:10px;margin-top:40px;font-size:14px;font-weight:600;color:var(--ink);border-bottom:1px solid var(--ink);padding-bottom:4px;transition:color 130ms ease,border-color 130ms ease,gap 130ms ease;}
.ks-hero-cta:hover{color:var(--cobalt);border-color:var(--cobalt);gap:14px;}
.ks-register{grid-column:9 / 13;border-left:1px solid var(--line);align-self:start;background:var(--paper);}
.ks-reg-row{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:14px 0 14px 28px;border-bottom:1px solid var(--line);}
.ks-reg-row:first-child{padding-top:4px;}
.ks-reg-label{font-family:var(--mono);font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:var(--slate);}
.ks-reg-value{font-size:13px;font-weight:600;color:var(--ink);text-align:right;}

/* trust */
.ks-trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--white);}
.ks-trust-inner{display:flex;align-items:center;flex-wrap:wrap;gap:14px;padding-top:18px;padding-bottom:18px;font-family:var(--mono);font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--ink);}
.ks-dot{color:var(--cobalt);}

/* teaming */
.ks-teaming-inner{display:flex;align-items:center;justify-content:space-between;gap:48px;}
.ks-teaming-main{max-width:64ch;}
.ks-teaming-main .ks-eyebrow{margin-bottom:20px;}
.ks-teaming-text{font-size:clamp(1.05rem,1.7vw,1.35rem);line-height:1.5;letter-spacing:-0.01em;color:var(--ink);font-weight:500;}
.ks-teaming-cta{display:inline-flex;align-items:center;gap:10px;flex-shrink:0;background:var(--ink);color:var(--paper);font-size:14px;font-weight:600;padding:16px 22px;border:1px solid var(--ink);transition:background 130ms ease,border-color 130ms ease,gap 130ms ease;}
.ks-teaming-cta:hover{background:var(--cobalt);border-color:var(--cobalt);gap:14px;}

/* footer role + contact spacing */
.ks-foot-role{color:var(--slate);font-weight:500;}
.ks-foot-contact{margin-top:14px;}

/* ledger */
.ks-ledger{border-top:1px solid var(--line);}
.ks-row{position:relative;display:grid;grid-template-columns:64px minmax(0,1fr) 30ch 28px;align-items:center;gap:24px;padding:30px 22px;border-bottom:1px solid var(--line);cursor:default;}
.ks-row.ks-reveal{transition:opacity 620ms cubic-bezier(.2,.7,.2,1),transform 620ms cubic-bezier(.2,.7,.2,1),background 110ms ease,color 110ms ease;}
.ks-row:hover,.ks-row:focus-visible{background:var(--ink);color:var(--paper);}
.ks-row-num{font-family:var(--mono);font-size:13px;font-weight:500;letter-spacing:0.08em;color:var(--slate);transition:color 110ms ease;}
.ks-row:hover .ks-row-num,.ks-row:focus-visible .ks-row-num{color:var(--accent-dark);}
.ks-row-title{font-size:clamp(1.05rem,1.9vw,1.5rem);font-weight:600;letter-spacing:-0.02em;line-height:1.1;}
.ks-row-desc{font-size:13px;color:var(--slate);line-height:1.45;transition:color 110ms ease;}
.ks-row:hover .ks-row-desc,.ks-row:focus-visible .ks-row-desc{color:var(--ink-muted);}
.ks-row-arrow{opacity:0;justify-self:end;color:var(--accent-dark);transition:opacity 110ms ease,transform 110ms ease;}
.ks-row:hover .ks-row-arrow,.ks-row:focus-visible .ks-row-arrow{opacity:1;transform:translate(2px,-2px);}

/* proof (dark) */
.ks-proof{display:grid;grid-template-columns:1.4fr 1fr;border:1px solid var(--line-dark);}
.ks-proof-body{padding:44px;border-right:1px solid var(--line-dark);}
.ks-proof-kicker{font-family:var(--mono);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent-dark);margin-bottom:22px;}
.ks-proof-text{font-size:1.05rem;line-height:1.62;color:var(--ink-soft);max-width:54ch;}
.ks-proof-text + .ks-proof-text{margin-top:18px;color:var(--ink-muted);}
.ks-proof-ledger{display:flex;flex-direction:column;}
.ks-proof-row{padding:22px 32px;border-bottom:1px solid var(--line-dark);}
.ks-proof-row:last-child{border-bottom:0;}
.ks-proof-dt{font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;}
.ks-proof-dd{font-size:14px;font-weight:600;color:var(--paper);line-height:1.4;}
.ks-proof-dd-muted{color:var(--ink-muted);font-weight:500;}

/* footer */
.ks-footer{border-top:1px solid var(--ink);background:var(--white);padding-top:72px;padding-bottom:40px;}
.ks-footer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding-bottom:64px;border-bottom:1px solid var(--line);}
.ks-foot-label{font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--slate);margin-bottom:16px;}
.ks-foot-label--tight{margin-bottom:6px;}
.ks-foot-value{font-size:14px;font-weight:500;color:var(--ink);line-height:1.6;}
.ks-foot-link{transition:color 120ms ease;border-bottom:1px solid transparent;}
.ks-foot-link:hover{color:var(--cobalt);border-color:var(--cobalt);}
.ks-code-list{display:flex;flex-direction:column;gap:12px;}
.ks-code-row{display:flex;flex-direction:column;gap:3px;}
.ks-code{font-size:13px;font-weight:600;color:var(--ink);letter-spacing:0.04em;}
.ks-code-label{font-size:11px;color:var(--slate);line-height:1.35;}
.ks-foot-ids{display:flex;gap:28px;margin-top:24px;}
.ks-footer-base{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:32px;}
.ks-foot-fine{font-size:11px;letter-spacing:0.04em;color:var(--slate);text-align:right;}

/* responsive */
@media (max-width:1024px){
  .ks-row{grid-template-columns:56px minmax(0,1fr) 28px;}
  .ks-row-desc{display:none;}
  .ks-proof{grid-template-columns:1fr;}
  .ks-proof-body{border-right:0;border-bottom:1px solid var(--line-dark);}
}
@media (max-width:860px){
  .ks-hero{grid-template-columns:1fr;}
  .ks-hero-main{grid-column:auto;padding-right:0;}
  .ks-register{grid-column:auto;border-left:0;border-top:1px solid var(--line);margin-top:56px;padding-top:8px;}
  .ks-reg-row{padding-left:0;}
  .ks-footer-grid{grid-template-columns:repeat(2,1fr);gap:36px;}
  .ks-coord{display:none;}
}
@media (max-width:720px){
  .ks-shell{padding-left:20px;padding-right:20px;}
  .ks-nav{gap:0;}
  .ks-nav-link{display:none;}
  .ks-header-inner{height:66px;}
  .ks-util-left{display:none;}
  .ks-utility-inner{justify-content:flex-end;}
  .ks-band{padding-top:64px;padding-bottom:64px;}
  .ks-teaming-inner{flex-direction:column;align-items:flex-start;gap:28px;}
  .ks-hero{padding-top:64px;padding-bottom:56px;}
  .ks-proof-body{padding:28px;}
  .ks-footer-base{flex-direction:column;align-items:flex-start;gap:20px;}
  .ks-foot-fine{text-align:left;}
}
@media (max-width:460px){
  .ks-cta{padding:10px 12px;font-size:12px;gap:6px;}
  .ks-footer-grid{grid-template-columns:1fr;}
}
@media (prefers-reduced-motion:reduce){
  .ks-root *,.ks-root *::before,.ks-root *::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}
  .ks-reveal{opacity:1!important;transform:none!important;}
}
`;
