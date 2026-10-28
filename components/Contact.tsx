import { site } from "@/data/site";
import Reveal from "./Reveal";
import Ghost from "./Ghost";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Halo ${site.short}, saya ingin berdiskusi soal project.`)}`;

export default function Contact() {
  return (
    <section id="contact" className="dark contact">
      <div className="wrap">
        <Ghost text="Contact" />
        <Reveal as="p" className="small" style={{ color: "var(--night-muted)" }}>Get in touch</Reveal>
        <Reveal as="h2" plain>
          <span className="mask"><span>Let’s work</span></span>
          <span className="mask"><span style={{ "--d": ".12s" } as React.CSSProperties}>together</span></span>
        </Reveal>
        <Reveal as="a" className="mail" delay={0.1} href={`mailto:${site.email}`}>{site.email}</Reveal>
        <Reveal as="p" className="wa" delay={0.2}><a href={wa} target="_blank" rel="noreferrer">atau chat via WhatsApp ↗</a></Reveal>
        <Reveal as="footer" delay={0.3}>© {new Date().getFullYear()} {site.name}. All rights reserved.</Reveal>
      </div>
    </section>
  );
}
