"use client";
import { useEffect, useRef, useState } from "react";
import { reduced, useScroll } from "@/lib/scroll";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Player from "./Player";
import HeroRocket from "./HeroRocket";
import HeroSky from "./HeroSky"

export default function Hero() {
  const [text, setText] = useState("");
  const box = useRef<HTMLDivElement>(null);

  // efek mengetik bergantian untuk setiap peran
  useEffect(() => {
    let r = 0, c = 0, del = false, id = 0;
    const tick = () => {
      const w = site.roles[r];
      setText(w.slice(0, c));
      let ms = 70;
      if (!del && c < w.length) c++;
      else if (!del) { del = true; ms = 1800; }
      else if (c > 0) { c--; ms = 35; }
      else { del = false; r = (r + 1) % site.roles.length; ms = 300; }
      id = window.setTimeout(tick, ms);
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  // konten hero naik pelan dan memudar saat di-scroll
  useScroll(() => {
    const el = box.current;
    if (!el || reduced()) return;
    const y = scrollY;
    el.style.transform = `translateY(${y * 0.18}px)`;
    el.style.opacity = String(1 - Math.min(1, y / innerHeight) * 0.9);
  });

  return (
    <section id="home" className="wrap hero">
      <div ref={box}>
        <Reveal className="socials">
          {site.socials.map((s) => <a key={s.label} href={s.href} {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{s.label}</a>)}
        </Reveal>
        <Reveal as="p" className="small" delay={0.1} style={{ marginBottom: 10 }}>{site.location} — {site.status.toLowerCase()}</Reveal>
        <Reveal as="h1" plain className="serif mask"><span><em>{site.short}.</em></span></Reveal>
        <Reveal as="p" className="role" delay={0.2}><span>{text}</span><span className="caret" /></Reveal>
        <div className="actions">
          <Reveal delay={0.3}><a className="btn" href={site.cv} download>Resume</a></Reveal>
          <Reveal delay={0.4}><Player /></Reveal>
        </div>
      </div>
      <HeroSky />
      <HeroRocket />
    </section>
  );
}
