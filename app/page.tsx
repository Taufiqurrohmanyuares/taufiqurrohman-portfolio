import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
