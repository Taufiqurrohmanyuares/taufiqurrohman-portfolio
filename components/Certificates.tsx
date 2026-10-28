"use client";
import { useEffect, useState, type CSSProperties } from "react";
import { certificates } from "@/data/certificates";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Ghost from "./Ghost";

const VISIBLE = 3;

/** Menampilkan 3 sertifikat dulu; sisanya muncul lewat tombol "Show all". Klik gambar untuk memperbesar. */
export default function Certificates() {
  const [all, setAll] = useState(false), [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setLb(null); };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);

  return (
    <section id="certificates" className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Ghost text="Certificates" />
        <SectionHead tag="Credentials" title="Certificates" note={<p className="small">Courses and certifications I’ve completed.</p>} />
        <div className={`certs${all ? " all" : ""}`}>
          {certificates.map((c, i) => {
            const extra = i >= VISIBLE;
            return (
              <Reveal as="article" key={c.key} plain={extra} variant="s" delay={extra ? 0 : i * 0.1}
                className={`cert${extra ? " extra" : ""}`} style={extra ? ({ "--j": (i - VISIBLE) % 3 } as CSSProperties) : undefined}>
                <div className="cimg" role="button" tabIndex={0} aria-label={`Lihat sertifikat: ${c.title}`} onClick={() => setLb(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLb(i); } }}>
                  <img loading="lazy" src={c.image} alt={c.title} />
                </div>
                <div className="cbody">
                  <p className="small">{c.date}</p><h3>{c.title}</h3><p className="issuer">{c.issuer}</p>
                  {c.link !== "#" ? <a href={c.link} target="_blank" rel="noreferrer">View credential</a> : <p className="small">ID: {c.credentialId}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
        {certificates.length > VISIBLE && (
          <button className="more" aria-expanded={all} onClick={() => { setAll(!all); if (all) document.getElementById("certificates")?.scrollIntoView(); }}>
            {all ? "Show less" : `Show all certificates (${certificates.length})`}
          </button>
        )}
      </div>
      <div className={`lb${lb !== null ? " open" : ""}`} onClick={() => setLb(null)}>
        {lb !== null && <img src={certificates[lb].image} alt={certificates[lb].title} />}
      </div>
    </section>
  );
}
