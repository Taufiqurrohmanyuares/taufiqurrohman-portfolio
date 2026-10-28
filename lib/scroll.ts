"use client";
import { useEffect, useRef } from "react";

export const reduced = () => typeof window !== "undefined" && matchMedia("(prefers-reduced-motion:reduce)").matches;

/** Menjalankan fn sekali per frame saat scroll/resize (di-throttle dengan rAF). */
export function useScroll(fn: () => void) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    let t = false;
    const run = () => { t = false; ref.current(); };
    const h = () => { if (!t) { t = true; requestAnimationFrame(run); } };
    addEventListener("scroll", h, { passive: true });
    addEventListener("resize", h);
    addEventListener("load", h);
    ref.current();
    return () => { removeEventListener("scroll", h); removeEventListener("resize", h); removeEventListener("load", h); };
  }, []);
}
