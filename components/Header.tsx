"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useScroll } from "@/lib/scroll";
import { site } from "@/data/site";

const links = [["Home", "#home"], ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Certificates", "#certificates"], ["Contact", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const hd = useRef<HTMLElement>(null), bar = useRef<HTMLDivElement>(null);
  const last = useRef(0), openRef = useRef(false);
  openRef.current = open;

  useScroll(() => {
    const y = scrollY;
    if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - innerHeight))})`;
    hd.current?.classList.toggle("hide", y > last.current && y > 200 && !openRef.current);
    last.current = y;
  });
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);

  return (
    <>
      <div className="bar" ref={bar} />
      <header ref={hd}>
        <a className="logo" href="#home"><i>{site.initial}</i><span>{site.short.toUpperCase()} / PORTFOLIO</span></a>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(true)}>Menu +</button>
      </header>
      <nav className={`overlay${open ? " open" : ""}`} aria-label="Main">
        <button className="close" onClick={() => setOpen(false)}>Close ×</button>
        {links.map(([n, h], i) => <a key={h} href={h} style={{ "--i": i } as CSSProperties} onClick={() => setOpen(false)}>{n}</a>)}
      </nav>
    </>
  );
}
