"use client";
import { Fragment, useRef, useState } from "react";
import { useScroll } from "@/lib/scroll";
import { site } from "@/data/site";
import Reveal from "./Reveal";

const parts = site.statement as [string, boolean][];
const TOTAL = parts.reduce((n, [t]) => n + t.split(/\s+/).filter(Boolean).length, 0);

/** Kalimat pernyataan: kata-katanya menyala satu per satu mengikuti scroll. */
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [n, setN] = useState(0);
  useScroll(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
    setN(Math.round(p * TOTAL));
  });
  let k = 0;
  return (
    <section className="dark statement">
      <div className="wrap">
        <p ref={ref}>
          {parts.map(([t, bold], pi) => {
            const words = t.split(/(\s+)/).map((w, wi) => {
              if (!w.trim()) return w;
              const idx = k++;
              return <span key={wi} className={`w${idx < n ? " lit" : ""}`}>{w}</span>;
            });
            return bold ? <b key={pi}>{words}</b> : <Fragment key={pi}>{words}</Fragment>;
          })}
        </p>
      </div>
      <Reveal className="marquee" aria-hidden="true">
        <div className="track">{[...site.skills, ...site.skills].map((s, i) => <span key={i}>{s}</span>)}</div>
      </Reveal>
    </section>
  );
}
