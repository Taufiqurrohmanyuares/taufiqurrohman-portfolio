"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Ghost from "./Ghost";

export default function Projects() {
  const [cur, setCur] = useState(0), [open, setOpen] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null), trigger = useRef<HTMLElement | null>(null);
  const p = projects[cur];
  const btns = [p.repo !== "#" && { cls: "src", href: p.repo, label: "‹/› View Source Code" }, p.demo !== "#" && { cls: "live", href: p.demo, label: "Live Demo ↗" }].filter(Boolean) as { cls: string; href: string; label: string }[];

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.current?.focus({ preventScroll: true }); else trigger.current?.focus({ preventScroll: true });
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open]);

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <Ghost text="Projects" />
        <SectionHead tag="Portfolio showcase" title="Selected projects"
          note={<a className="small" href="https://github.com/Taufiqurrohmanyuares" target="_blank" rel="noreferrer">View all on GitHub</a>} />
        <Reveal className="projects">
          <div className="tabs" role="tablist">
            {projects.map((x, i) => (
              <Reveal as="button" key={x.title} delay={i * 0.1} role="tab" aria-selected={i === cur} onClick={() => setCur(i)}>{x.title}</Reveal>
            ))}
          </div>
          <div className="pbody sw" key={cur}>
            <div className="shot" style={{ background: "#1b1b1b" }}><img src={p.image} alt={p.title} style={{ objectFit: p.fit }} /></div>
            <div>
              <p className="small">{p.category}</p><h3>{p.title}</h3><p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <a className="btn" href="#" onClick={(e) => { e.preventDefault(); trigger.current = e.currentTarget; setOpen(true); }}>View project</a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={`scrim${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Detail project" aria-hidden={!open}>
        <button className="dclose" ref={closeBtn} aria-label="Tutup" onClick={() => setOpen(false)}>×</button>
        <div className="dscroll" key={cur}>
          <div className="dhead" style={{ background: `linear-gradient(180deg,rgba(0,0,0,.3),var(--night) 96%),url('${p.image}') center top/cover` }}>
            <div className="pills" style={{ "--k": 0 } as React.CSSProperties}>{p.tags.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
            <h2 style={{ "--k": 1 } as React.CSSProperties}>{p.title}</h2>
          </div>
          <div className="dbody">
            <h3 style={{ "--k": 2 } as React.CSSProperties}>Project Overview</h3>
            <p style={{ "--k": 3 } as React.CSSProperties}>{p.overview}</p>
            <div className="dcards">
              <div className="dc pr" style={{ "--k": 4 } as React.CSSProperties}><b>Problem</b>{p.problem}</div>
              <div className="dc so" style={{ "--k": 5 } as React.CSSProperties}><b>Solution &amp; Impact</b>{p.impact}</div>
            </div>
            {btns.length > 0 && <div className="dbtns" style={{ "--k": 6 } as React.CSSProperties}>{btns.map((b) => <a key={b.cls} className={b.cls} href={b.href} target="_blank" rel="noreferrer">{b.label}</a>)}</div>}
          </div>
        </div>
      </aside>
    </section>
  );
}
