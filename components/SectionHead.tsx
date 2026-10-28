import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHead({ tag, title, note }: { tag: string; title: string; note: ReactNode }) {
  return (
    <Reveal className="sec-head">
      <div><p className="small">{tag}</p><h2><span className="mask"><span>{title}</span></span></h2></div>
      {note}
    </Reveal>
  );
}
