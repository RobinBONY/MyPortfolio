import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import HeroDivider from "./HeroDivider";
import Profile from "../assets/rbony.jpg";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
      id="home"
    >
      <HeroDivider />
      <div className="text-justify hero-content text-neutral-content items-center justify-center">
        <img
          className="hidden lg:flex object-cover object-center w-[450px] h-[450px] rounded-lg shadow-2xl shadow-black mx-10"
          src={Profile}
          alt="Profile"
        ></img>
        <div className="max-w-lg mx-10 px-16">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold text-white">Bienvenue</h1>
            <p className="mb-5 text-white">
              Bonjour, je suis Robin BONY, actuellement étudiant à l'école 42 de
              Charbonnières-les-Bains mais aussi développeur front-end freelance
              :D
            </p>
            <Link
              to={"experience"}
              spy={true}
              smooth={true}
              duration={500}
              className="transition rounded-full cursor-pointer btn btn-primary"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
