"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "@/lib/scroll";
import { experience } from "@/data/experience";
import SectionHead from "./SectionHead";
import Ghost from "./Ghost";

/** Di desktop, section ini "terkunci" dan kartunya bergeser ke samping saat scroll ke bawah. */
export default function Experience() {
  const sec = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(min-width:821px) and (prefers-reduced-motion:no-preference)");
    const m = () => setPinned(mq.matches);
    m();
    mq.addEventListener("change", m);
    return () => mq.removeEventListener("change", m);
  }, []);

  useEffect(() => {
    if (pinned || !sec.current || !track.current) return;
    sec.current.style.height = "";
    track.current.style.transform = "";
    [...track.current.children].forEach((c) => { (c as HTMLElement).style.transform = ""; (c as HTMLElement).style.opacity = ""; });
  }, [pinned]);

  useScroll(() => {
    const s = sec.current, tr = track.current;
    if (!pinned || !s || !tr) return;
    const travel = Math.max(0, tr.scrollWidth - tr.clientWidth);
    s.style.height = `${innerHeight + travel}px`;
    const q = s.getBoundingClientRect();
    const prog = Math.min(1, Math.max(0, -q.top / Math.max(1, q.height - innerHeight)));
    tr.style.transform = `translateX(${-travel * prog}px)`;
    [...tr.children].forEach((c) => {
      const b = c.getBoundingClientRect(), d = Math.min(1, Math.abs(b.left + b.width / 2 - innerWidth / 2) / innerWidth);
      (c as HTMLElement).style.transform = `scale(${1 - d * 0.1})`;
      (c as HTMLElement).style.opacity = String(1 - d * 0.55);
    });
  });

  return (
    <section id="experience" ref={sec} className={`dark sec${pinned ? " pinned" : ""}`}>
      <div className="wrap">
        <Ghost text="Experiences" />
        <SectionHead tag="Career archive" title="Experiences" note={<p className="small">Roles, systems, and the work behind them.</p>} />
        <div className="exp" ref={track}>
          {experience.map((x) => (
            <article className="xcard" key={x.title}>
              <div className="t">
                <h3>{x.title}</h3><p className="org">{x.org}</p><p>{x.desc}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="ph" style={x.image ? { backgroundImage: `linear-gradient(180deg,transparent 45%,rgba(0,0,0,.7)),url('${x.image}')` } : undefined}>{x.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
