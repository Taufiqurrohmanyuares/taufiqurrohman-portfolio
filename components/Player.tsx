"use client";
import { useEffect, useRef, useState } from "react";
import { tracks } from "@/data/tracks";

const Play = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>;
const Pause = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>;

/** Pemutar mini: piringan (klik = lagu berikutnya), judul, play/pause, dan garis progres di dasar kapsul (klik untuk maju/mundur). */
export default function Player() {
  const au = useRef<HTMLAudioElement>(null), bar = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0), [playing, setPlaying] = useState(false), [t, setT] = useState(0), [d, setD] = useState(0);
  const tr = tracks[i], dur = d || tr.dur;

  useEffect(() => {
    const a = au.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false)); else a.pause();
  }, [playing, i]);

  const next = () => { setI((x) => (x + 1) % tracks.length); setT(0); setD(0); };
  const seekTo = (v: number) => { const a = au.current; if (a) a.currentTime = v; setT(v); };
  const seekX = (x: number) => { const r = bar.current!.getBoundingClientRect(); seekTo(Math.min(1, Math.max(0, (x - r.left) / r.width)) * dur); };

  return (
    <div className={`mini${playing ? " playing" : ""}`} aria-label="Pemutar musik">
      <audio ref={au} src={tr.src} preload="none" onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setD(e.currentTarget.duration)} onEnded={next} />
      <button className="mvinyl" aria-label="Lagu berikutnya" title="Lagu berikutnya" onClick={next}><span className="vinyl" /></button>
      <div className="mtext"><p className="ptitle">{tr.title}</p><p className="partist">{tr.artist}</p></div>
      <button className="pplay" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play />}</button>
      <div className="mbar" ref={bar} role="slider" tabIndex={0} aria-label="Posisi lagu" aria-valuemin={0} aria-valuemax={Math.round(dur)} aria-valuenow={Math.round(t)}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); seekX(e.clientX); }}
        onPointerMove={(e) => { if (e.buttons) seekX(e.clientX); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); seekTo(Math.min(dur, Math.max(0, t + (e.key === "ArrowRight" ? 5 : -5)))); } }}>
        <i style={{ width: `${Math.min(1, t / dur) * 100}%` }} />
      </div>
    </div>
  );
}