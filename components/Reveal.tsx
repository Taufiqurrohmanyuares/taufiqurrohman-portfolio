"use client";
import { createElement, useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType; variant?: "" | "l" | "r" | "s"; delay?: number; plain?: boolean;
  className?: string; style?: CSSProperties; children?: ReactNode; [key: string]: unknown;
};

/** Menambahkan kelas "on" saat elemen masuk layar; animasinya diatur di globals.css (.in / .mask). */
export default function Reveal({ as = "div", variant = "", delay = 0, plain = false, className = "", style, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = [plain ? "" : "in", variant, on ? "on" : "", className].filter(Boolean).join(" ");
  return createElement(as, { ref, className: cls, style: { "--d": `${delay}s`, ...style } as CSSProperties, ...rest }, children);
}
