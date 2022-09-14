import React from "react";
import Hero from "../components/Hero";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";
import Footer from "../components/Footer";

const HomeContainer = () => {
  return (
    <div className="antialiased bg-primary-content text-primary">
      <Hero />
      <ExperienceContainer />
      <div className="px-12 divider" />
      <ProjectsContainer />
      <div className="px-12 divider" />
      <SkillsContainer />
      <Footer />
    </div>
  );
};

export default HomeContainer;
