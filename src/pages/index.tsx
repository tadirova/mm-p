import Hero from "@/components/Hero/Hero";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Education from "@/components/sections/Education";
import Art from "@/components/sections/Art";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="art">
        <Art />
      </section>
      <section id="career">
        <Career />
      </section>
    </div>
  );
}
