import type { CSSProperties } from "react";

// [kiri %, atas %, ukuran px, delay detik, durasi detik]
const stars: [number, number, number, number, number][] = [
  [4, 12, 3, 0, 4], [19, 8, 2, 1.2, 5], [27, 14, 2, 2.4, 3.6], [35, 6, 3, 0.6, 4.4], [52, 5, 2, 1.8, 5.2], [66, 10, 3, 3, 4],
  [78, 7, 2, 0.3, 3.8], [93, 12, 3, 2, 4.8], [3, 34, 2, 1, 4.2], [14, 42, 3, 2.6, 3.8], [8, 66, 2, 0.4, 5], [20, 80, 3, 1.5, 4.4],
  [30, 92, 2, 3.2, 3.6], [48, 95, 3, 0.9, 4.8], [62, 91, 2, 2.2, 4], [78, 86, 3, 1.1, 5], [95, 74, 2, 2.8, 4.2], [88, 48, 2, 0.7, 3.6],
  [96, 40, 3, 1.9, 4.6], [72, 20, 2, 3.4, 4.2],
];
// kilau 4 sudut: [kiri %, atas %, ukuran px, hijau?, delay, durasi]
const sparks: [number, number, number, boolean, number, number][] = [[24, 26, 14, false, 0, 5], [81, 40, 12, true, 1.4, 4.6], [60, 86, 10, false, 2.2, 5.4]];
const rocks = [
  { left: 84, top: 62, size: 34, shape: 0, t: 19, d: 0, r: 28, dx: 26, dy: -18 },
  { left: 7, top: 52, size: 24, shape: 1, t: 15, d: 2, r: 36, dx: -14, dy: 20 },
  { left: 90, top: 30, size: 18, shape: 1, t: 22, d: 4, r: 22, dx: 12, dy: 16 },
];
const shapes = ["M8 12 18 4l13 4 6 12-7 13-14 3L5 26Z", "M6 18 14 6l14-1 8 11-4 14-14 5-8-5Z"];
const css = (o: Record<string, string | number>) => o as CSSProperties;

/** Hiasan langit hero: bintang berkelip, bulan sabit, dan asteroid yang melayang pelan. Murni CSS. */
export default function HeroSky() {
  return (
    <div className="cs" aria-hidden="true">
      {stars.map(([x, y, s, d, t], i) => (
        <span key={i} className="cs-star" style={css({ left: `${x}%`, top: `${y}%`, width: s, height: s, "--d": `${d}s`, "--t": `${t}s` })} />
      ))}
      {sparks.map(([x, y, s, g, d, t], i) => (
        <span key={i} className={`cs-spark${g ? " g" : ""}`} style={css({ left: `${x}%`, top: `${y}%`, width: s, height: s, "--d": `${d}s`, "--t": `${t}s` })}>
          <svg viewBox="0 0 24 24"><path d="M12 0l2 10 10 2-10 2-2 10-2-10L0 12l10-2Z" /></svg>
        </span>
      ))}
      <svg className="cs-moon" viewBox="0 0 48 48">
        <defs><mask id="moon-cut"><rect width="48" height="48" fill="#fff" /><circle cx="34" cy="19" r="17" fill="#000" /></mask></defs>
        <circle cx="22" cy="26" r="19" mask="url(#moon-cut)" />
      </svg>
      {rocks.map((k, i) => (
        <span key={i} className="cs-rock" style={css({ left: `${k.left}%`, top: `${k.top}%`, width: k.size, height: k.size, "--t": `${k.t}s`, "--d": `${k.d}s`, "--r": `${k.r}s`, "--dx": `${k.dx}px`, "--dy": `${k.dy}px` })}>
          <svg viewBox="0 0 40 40">
            <path className="a" d={shapes[k.shape]} />
            <circle className="c" cx="16" cy="16" r="3" /><circle className="c" cx="27" cy="24" r="2.2" /><circle className="c" cx="14" cy="28" r="1.6" />
          </svg>
        </span>
      ))}
    </div>
  );
}