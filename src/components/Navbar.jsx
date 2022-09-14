/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (!scrollState) {
          setScrollState(true);
        }
      } else {
        if (scrollState) {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <>
      <div
        className={`${
          scrollState
            ? `inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out border-b border-transparent bg-primary text-primary-content fixed   navbar`
            : `fixed inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out bg-transparent border-b border-transparent text-primary-content navbar`
        }`}
      >
        <div className=" dropdown dropdown-right lg:hidden">
          <div tabIndex={0} className="btn btn-ghost rounded-btn">
            <MenuIcon className="w-5 h-5" />
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 text-neutral rounded-box w-52"
          >
            <Link
              key={1}
              to={"home"}
              activeClass="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out text-bold"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out"
            >
              Accueil
            </Link>
            <Link
              key={2}
              to={"experience"}
              activeClass="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out text-bold"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out"
            >
              Experience
            </Link>
            <Link
              key={3}
              to={"projects"}
              activeClass="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out text-bold"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out"
            >
              Projets
            </Link>
            <Link
              key={4}
              to={"skills"}
              activeClass="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out text-bold"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out"
            >
              Compétences
            </Link>
          </ul>
        </div>

        <div className="flex-1 px-2 mx-2">
          {scrollState ? (
            <Logo className="w-20 h-12 fill-current" />
          ) : (
            "Robin BONY"
          )}
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu horizontal">
            <Link
              key={1}
              to={"home"}
              activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out py-1"
            >
              Accueil
            </Link>
            <Link
              key={2}
              to={"experience"}
              activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out py-1"
            >
              Experience
            </Link>
            <Link
              key={3}
              to={"projects"}
              activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out py-1"
            >
              Projets
            </Link>
            <Link
              key={4}
              to={"skills"}
              activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out py-1"
            >
              Compétences
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
