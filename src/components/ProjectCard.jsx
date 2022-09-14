import { motion } from "framer-motion";
import React from "react";

const ProjectCard = (props) => {
  return (
    <motion.div transition={{ duration: 0.25 }} key={props.id}>
      <div
        className={`mx-6 card ${
          props.id % 2 === 0
            ? `bg-secondary text-secondary-content`
            : `bg-primary text-primary-content`
        }`}
      >
        <figure className="p-6 flex justify-center items-center">
          <div className="h-48 w-64 active:h-96 active:w-48">
            <img
              src={props.projectImageLogo}
              alt={props.projectName}
              className=" rounded-lg shadow-lg h-full w-full object-cover object-center cursor-pointer active:object-fill"
            />
          </div>
        </figure>
        <div className="max-w-sm card-body">
          <h2 className="card-title ">{props.projectName}</h2>
          <p>{props.projectDescription}</p>
          <div className="flex">
            {props.tech.map((tech) => (
              <div
                className={`my-2 mr-2 badge ${
                  props.id % 2 === 0
                    ? `text-primary-content badge-primary`
                    : `text-secondary-content badge-secondary`
                }`}
              >
                {tech}{" "}
              </div>
            ))}
          </div>
          <div className="card-actions">
            <a href={props.link}>
              <button
                className={`rounded-full btn ${
                  props.id % 2 === 0
                    ? `text-primary-content btn-primary`
                    : `text-secondary-content btn-secondary`
                }`}
              >
                Voir plus
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
