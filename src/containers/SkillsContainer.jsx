import React from "react";
import { ReactComponent as Illustration } from "../assets/42.svg";
import AnimateVisible from "../utils/AnimateVisible";

const SkillsContainer = () => {
  return (
    <div className="pt-16 flex flex-col w-full my-6" id="skills">
      <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr">
        <div className="hidden pt-3 antialiased lg:flex justify-center">
          <Illustration className=" max-h-48 h-48 w-48" />
        </div>
        <div className="pt-10 ml-10 text-7xl md:text-center">Compétences</div>
      </div>
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center auto-rows-fr">
        <AnimateVisible key={1}>
          <div className="p-6 space-y-2 artboard phone card bg-primary text-primary-content">
            <h3>C</h3>
            <progress
              className="progress progress-secondary"
              value={80}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={2}>
          <div className="p-6 space-y-2 artboard phone card bg-secondary text-secondary-content">
            <h3>C++</h3>
            <progress
              className="progress progress-primary"
              value={20}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={3}>
          <div className="p-6 space-y-2 artboard phone card bg-primary text-primary-content">
            <h3>Java</h3>
            <progress
              className="progress progress-secondary"
              value={75}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={4}>
          <div className="p-6 space-y-2 artboard phone card bg-secondary text-secondary-content">
            <h3>Kotlin</h3>
            <progress
              className="progress progress-primary"
              value={55}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={5}>
          <div className="p-6 space-y-2 artboard phone card bg-primary text-primary-content">
            <h3>Android</h3>
            <progress
              className="progress progress-secondary"
              value={70}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={6}>
          <div className="p-6 space-y-2 artboard phone card bg-secondary text-secondary-content">
            <h3>Dart</h3>
            <progress
              className="progress progress-primary"
              value={25}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={7}>
          <div className="p-6 space-y-2 artboard phone card bg-primary text-primary-content">
            <h3>Flutter</h3>
            <progress
              className="progress progress-secondary"
              value={10}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={8}>
          <div className="p-6 space-y-2 artboard phone card bg-secondary text-secondary-content">
            <h3>SQL</h3>
            <progress
              className="progress progress-primary"
              value={80}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={9}>
          <div className="p-6 space-y-2 artboard phone card bg-primary text-primary-content">
            <h3>HTML</h3>
            <progress
              className="progress progress-secondary"
              value={90}
              max="100"
            />
          </div>
        </AnimateVisible>
        <AnimateVisible key={10}>
          <div className="p-6 space-y-2 artboard phone card bg-secondary text-secondary-content">
            <h3>CSS</h3>
            <progress
              className="progress progress-primary"
              value={85}
              max="100"
            />
          </div>
        </AnimateVisible>
      </div>
    </div>
  );
};

export default SkillsContainer;
