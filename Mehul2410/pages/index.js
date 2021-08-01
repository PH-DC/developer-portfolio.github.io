import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/heroSection/Hero";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Skill from "../components/skills/Skill";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

const index = () => {
  return (
    <BaseLayout>
      <BasePage>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Resume />
        <Contact />
      </BasePage>
    </BaseLayout>
  );
};

export default index;
