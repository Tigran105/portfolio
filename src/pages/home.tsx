import Hero from "../components/sections/hero.tsx";
import WhatIDo from "../components/sections/what-i-do.tsx";
import Skills from "../components/sections/skills.tsx";
import Experience from "../components/sections/experience.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Skills />
      <Experience />
    </>
  );
}
