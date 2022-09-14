import { motion } from "framer-motion";
import React from "react";

const TimelineCard = (props) => {
  return (
    <div
      className={`flex items-center justify-between w-full mb-8  ${props.styling}`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">
          {props.num}
        </h1>
      </div>
      <motion.div
        transition={{ duration: 0.25 }}
        whileHover={{ scale: 1.1 }}
        className={
          props.num % 2 === 1
            ? "order-1 w-5/12 shadow-2xl card lg:card-side bg-primary text-primary-content"
            : "order-1 w-5/12 shadow-2xl card lg:card-side bg-secondary text-secondary-content"
        }
      >
        <div className="card-body">
          <img
            src={props.logo}
            alt={props.company}
            className="w-48 contrast-200"
          />
          <span className="py-0 font-bold card-title font-xs card-side">
            {props.position}
          </span>
          <p className="font-light card-side">{props.description}</p>
          <span className="py-0 card-subtitle font-xs card-side">
            {props.company}
          </span>
          <span className="font-bold font-xs">
            {props.start} - {props.end}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
