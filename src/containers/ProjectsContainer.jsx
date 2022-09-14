import React from "react";
import { ReactComponent as Illustration } from "../assets/github.svg";
import ProjectCard from "../components/ProjectCard";

const ProjectsContainer = () => {
  return (
    <div className="pt-16 flex flex-col w-full my-6" id="projects">
      <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr ">
        <div className="pt-10 ml-10 text-7xl md:text-center">Projets</div>
        <div className="hidden pt-3 antialiased lg:flex justify-center">
          <a href="https://github.com/RobinBONY">
            <Illustration
              className="max-h-48 h-48 w-48"
              href="https://github.com/RobinBONY"
            />
          </a>
        </div>
      </div>
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center md:grid-cols-1 auto-rows-fr">
        <ProjectCard
          id={1}
          key={1}
          projectDescription={
            "Une application mobile Android utilisant l'api Vélo'v JCDecaux pour afficher la position et les informations de chaque stations dans les villes ou sont deployés des vélos en libre-service."
          }
          projectImageLogo={
            "https://user-images.githubusercontent.com/57664687/190129245-c9058c4b-97c6-4100-9b52-bad095d0a302.jpg"
          }
          projectName={"Velov"}
          tech={["Android", "Java"]}
          link={"https://github.com/RobinBONY/Velov"}
          buttonText={"Voir le projet"}
        />
        <ProjectCard
          id={2}
          key={2}
          projectDescription={
            "Un Jeux communautaire mobile Android utilisant l'api Rick et Morty, le but est de collectionner des personnages de la série Rick & Morty en scannant des QR codes dispersés par les joueurs."
          }
          projectImageLogo={
            "https://user-images.githubusercontent.com/57664687/190142384-e12917b4-99f3-4692-9f3c-03e33c83767c.jpg"
          }
          projectName={"RickAndMortyGo"}
          tech={["Android", "Kotlin"]}
          link={"https://github.com/RobinBONY/RickAndMortyGo"}
          buttonText={"Voir le projet"}
        />
      </div>
    </div>
  );
};

export default ProjectsContainer;
