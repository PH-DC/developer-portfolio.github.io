import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/heroSection/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import BaseLayout from "../Layout/BaseLayout";
import BasePage from "../Layout/BasePage";

const index = () => {
  return (
    <BaseLayout>
      <BasePage>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      </BasePage>
    </BaseLayout>
  );
};

export default index;
