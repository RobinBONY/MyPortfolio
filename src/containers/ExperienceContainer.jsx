import React from "react";
import { ReactComponent as Illustration } from "../assets/linkedin.svg";
import TimelineCard from "../components/TimelineCard";
import AnimateVisible from "../utils/AnimateVisible";

const ExperienceContainer = () => {
  return (
    <div className="bg-base-100 pt-16 mx-3 lg:mx-12" id="experience">
      <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr ">
        <div className="hidden pt-3 antialiased lg:flex justify-center">
          <Illustration className="max-h-48 h-48 w-48" />
        </div>
        <div className="pt-10 ml-10 text-7xl md:text-center">Experience</div>
      </div>
      <div className="relative h-full p-10 overflow-hidden wrap">
        <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 "></div>
        <AnimateVisible key={1}>
          <TimelineCard
            styling="flex-row-reverse  left-timeline"
            key={1}
            num={1}
            logo={
              "https://lyc-louis-armand-villefranche.ent.auvergnerhonealpes.fr/images/portails/logo_region.svg"
            }
            start={2015}
            end={2018}
            position={"Bac STI2D"}
            description={"option SIN"}
            company={"Lycée Louis Armand"}
          />
        </AnimateVisible>
        <AnimateVisible key={2}>
          <TimelineCard
            styling="right-timeline"
            key={2}
            logo={"https://www.univ-lyon1.fr/images/www/logo-lyon1.png"}
            num={2}
            start={2018}
            end={2020}
            position={"DUT Informatique"}
            description={""}
            company={"Université Claude Bernard Lyon 1"}
          />
        </AnimateVisible>
        <AnimateVisible key={3}>
          <TimelineCard
            styling="flex-row-reverse  left-timeline"
            key={3}
            num={3}
            logo={"https://www.univ-lyon1.fr/images/www/logo-lyon1.png"}
            start={2020}
            end={2021}
            position={"Licence professionnelle"}
            description={"Informatique Et Mobilité"}
            company={"Université Claude Bernard Lyon 1"}
          />
        </AnimateVisible>
        <AnimateVisible key={4}>
          <TimelineCard
            styling="right-timeline"
            key={4}
            logo={
              "https://www.agirc-arrco.fr/wp-content/uploads/2021/11/Agirc-Arrco_2021_cmjn.svg"
            }
            num={4}
            start={2020}
            end={2021}
            position={"Alternant"}
            description={""}
            company={"Agirc-Arrco"}
          />
        </AnimateVisible>
        <AnimateVisible key={5}>
          <TimelineCard
            styling="flex-row-reverse  left-timeline"
            key={5}
            num={5}
            logo={"https://42lyon.fr/wp-content/uploads/2022/04/Artboard-1.svg"}
            start={2021}
            end={"En cours"}
            position={"Architecte en technologies du numérique"}
            description={""}
            company={"Ecole 42 Lyon"}
          />
        </AnimateVisible>
      </div>
    </div>
  );
};

export default ExperienceContainer;
