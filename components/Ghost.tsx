"use client";
import { useRef } from "react";
import { useScroll } from "@/lib/scroll";

/** Judul raksasa transparan di belakang section yang bergeser saat scroll. */
export default function Ghost({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useScroll(() => {
    const el = ref.current, sec = el?.closest("section");
    if (!el || !sec) return;
    const q = sec.getBoundingClientRect(), vh = innerHeight;
    const k = Math.min(1, Math.max(0, (vh - q.top) / (vh + q.height)));
    el.style.setProperty("--gx", `${(0.5 - k) * innerWidth * 0.5}px`);
  });
  return <div className="ghost" ref={ref} aria-hidden="true">{text}</div>;
}
