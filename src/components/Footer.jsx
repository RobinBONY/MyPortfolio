import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as FooterDivider } from "../assets/footerdivider.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import FortyTwo from "../assets/42.svg";

const Footer = () => {
  return (
    <>
      <div className="px-0 py-0 mx-0 my-0 antialiased text-center">
        <FooterDivider />
        <div className="flex flex-col pt-3 bg-current md:items-center f-f-l">
          <h1 className="text-4xl font-black text-neutral-content">
            Robin BONY
          </h1>
          <div className="my-3 text-base text-center text-neutral-content ">
            <ul className="items-center md:flex">
              <Link
                key={1}
                activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                to={"home"}
                spy={true}
                smooth={true}
                duration={300}
                className="btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
              >
                Accueil
              </Link>
              <img
                src={Linkedin}
                alt="Linkedin Logo"
                className="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition"
              />
              <Link
                key={2}
                activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                to={"experience"}
                spy={true}
                smooth={true}
                duration={300}
                className="btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
              >
                Experience
              </Link>
              <a href="https://github.com/RobinBONY">
                <img
                  src={Github}
                  alt="Github Logo"
                  className="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition"
                />
              </a>
              <Link
                key={3}
                activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                to={"projects"}
                spy={true}
                smooth={true}
                duration={300}
                className="btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
              >
                Projets
              </Link>
              <img
                src={FortyTwo}
                alt="FortyTwo Logo"
                className="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition"
              />
              <Link
                key={4}
                activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                to={"skills"}
                spy={true}
                smooth={true}
                duration={300}
                className="btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
              >
                Compétences
              </Link>
            </ul>
          </div>
          <div className="mb-3 text-md text-neutral-content">
            <p className="pb-3 self-center justify-center text-center text-xl font-extralight">
              rbony@student.42lyon.fr
            </p>
            {/* <p>
              © {new Date().getFullYear()} {"Robin BONY"}. All rights reserved.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
