"use client";
import { useRef } from "react";
import { reduced } from "@/lib/scroll";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Ghost from "./Ghost";

export default function About() {
  const img = useRef<HTMLDivElement>(null);
  const tilt = (e: React.MouseEvent) => {
    if (reduced() || !img.current) return;
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    img.current.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  return (
    <section id="about" className="sec" onMouseMove={tilt} onMouseLeave={() => { if (img.current) img.current.style.transform = ""; }}>
      <div className="wrap about">
        <Ghost text="About" />
        <Reveal variant="l" className="portrait">
          <div className="img" ref={img}><img src="/images/profile.webp" alt={site.name} /></div>
          <div className="status"><div><b>{site.handle}</b><br /><span className="small">{site.status}</span></div><span className="dot" /></div>
        </Reveal>
        <Reveal variant="r" className="abt">
          <p className="small">About me</p>
          <h2 className="serif">{site.aboutTitle}</h2>
          {site.about.map((p) => <p key={p}>{p}</p>)}
          <ul className="facts">
            {site.facts.map(([k, v], i) => <Reveal as="li" key={k} delay={i * 0.1}><span className="small">{k}</span><b>{v}</b></Reveal>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
