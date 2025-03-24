import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/scss/Navigations.scss";
import TouchContext from "../hooks/touchContent";

import logo from "../assets/images/shared/logo.svg";
import hamburger from "../assets/images/shared/icon-hamburger.svg";
import close from "../assets/images/shared/icon-close.svg";

export function StageNavigation() {
  const [currentPage, setCurrentPage] = useState("home");
  const [listOpen, setListOpen] = useState(false);
  const { touchHandler } = useContext(TouchContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (position) => {
    touchHandler();
    setTimeout(() => {
      navigate(position);
    }, 500);
  };

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setCurrentPage("home");
        break;
      case "/destination":
        setCurrentPage("destination");
        break;
      case "/crew":
        setCurrentPage("crew");
        break;
      case "/technology":
        setCurrentPage("technology");
        break;
      default:
        setCurrentPage("home");
    }
  }, [location.pathname]);

  return (
    <div className="navigation">
      <a href="/">
        <img className="navigation__logo" src={logo} alt="logo" />
      </a>
      <hr className="star-line hidden lg:inline-block"></hr>
      <button
        onClick={() => {
          setListOpen(true);
          console.log(listOpen);
        }}
        className={`ml-auto z-30 ${listOpen ? "hidden" : "block"} md:hidden`}
      >
        <img src={hamburger} alt="hamburger-button" />
      </button>
      <nav
        className={`navigation__list ml-auto md:ml-0 z-20 ${
          listOpen ? "visable" : ""
        } `}
      >
        <button
          className="ml-auto mt-8 mb-16 mr-4 md:hidden "
          onClick={() => {
            setListOpen(false);
          }}
        >
          <img src={close} alt="close_nav" />
        </button>
        <ul className="navigation__list__items">
          <li onClick={() => handleNavigation("/")}>
            <p
              className={`navigation__list__item lg:ml-5  ${
                currentPage === "home" ? "active" : ""
              }`}
            >
              <span className="font-bold pr-3 md:hidden lg:inline-block">
                00
              </span>
              HOME
            </p>
          </li>
          <li onClick={() => handleNavigation("/destination")}>
            <p
              className={`navigation__list__item  ${
                currentPage === "destination" ? "active" : ""
              }`}
            >
              <span className="font-bold pr-3">01</span>DESTINATION
            </p>
          </li>
          <li onClick={() => handleNavigation("/crew")}>
            <p
              className={`navigation__list__item  ${
                currentPage === "crew" ? "active" : ""
              }`}
            >
              <span className="font-bold pr-3">02</span>CREW
            </p>
          </li>
          <li onClick={() => handleNavigation("/technology")}>
            <p
              className={`navigation__list__item ${
                currentPage === "technology" ? "active" : ""
              }`}
            >
              <span className="font-bold pr-3">03</span>TECHNOLOGY
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function PlanetNavigation({ currentPlanet, setCurrentPlanet }) {
  return (
    <nav className={`planetNav mb-6 z-10  `}>
      <ul className="planetNav__list">
        <li
          onClick={() => {
            setCurrentPlanet(0);
          }}
        >
          <p
            className={`planetNav__list__item  ${
              currentPlanet === 0 ? "active--planet" : ""
            }`}
          >
            MOON
          </p>
        </li>
        <li
          onClick={() => {
            setCurrentPlanet(1);
          }}
        >
          <p
            className={`planetNav__list__item  ${
              currentPlanet === 1 ? "active--planet" : ""
            }`}
          >
            MARS
          </p>
        </li>
        <li
          onClick={() => {
            setCurrentPlanet(2);
          }}
        >
          <p
            className={`planetNav__list__item  ${
              currentPlanet === 2 ? "active--planet" : ""
            }`}
          >
            EUROPA
          </p>
        </li>
        <li
          onClick={() => {
            setCurrentPlanet(3);
          }}
        >
          <p
            className={`planetNav__list__item ${
              currentPlanet === 3 ? "active--planet" : ""
            }`}
          >
            TITAN
          </p>
        </li>
      </ul>
    </nav>
  );
}

export function CrewNavigation({ currentCrew, setCurrentCrew }) {
  return (
    <nav className="crewNav mt-auto z-10  mb-8">
      <ul className="crewNav__list">
        <li
          className={`crewNav__list__item ${
            currentCrew === 0 ? "before:bg-white" : "before:bg-light-white"
          }  mr-2`}
          onClick={() => {
            setCurrentCrew(0);
          }}
        ></li>
        <li
          className={`crewNav__list__item ${
            currentCrew === 1 ? "before:bg-white" : "before:bg-light-white"
          } mr-2`}
          onClick={() => {
            setCurrentCrew(1);
          }}
        ></li>
        <li
          className={`crewNav__list__item ${
            currentCrew === 2 ? "before:bg-white" : "before:bg-light-white"
          } mr-2`}
          onClick={() => {
            setCurrentCrew(2);
          }}
        ></li>
        <li
          className={`crewNav__list__item ${
            currentCrew === 3 ? "before:bg-white" : "before:bg-light-white"
          } mr-2`}
          onClick={() => {
            setCurrentCrew(3);
          }}
        ></li>
      </ul>
    </nav>
  );
}

export function TechNavigation({ currentTech, setCurrentTech }) {
  return (
    <nav className="TechNav mt-auto z-10  mb-8 lg:mt-0">
      <ol className="TechNav__list">
        <li
          className={`TechNav__list__item ${
            currentTech === 0
              ? "before:bg-white text-black"
              : "before:bg-transparent text-white"
          }  mr-14 md:mr-20 lg:mr-0`}
          onClick={() => {
            setCurrentTech(0);
          }}
        ></li>
        <li
          className={`TechNav__list__item 
             ${
               currentTech === 1
                 ? "before:bg-white text-black"
                 : "before:bg-transparent text-white"
             }
             mr-14 md:mr-20 lg:mr-0 `}
          onClick={() => {
            setCurrentTech(1);
          }}
        ></li>
        <li
          className={`TechNav__list__item ${
            currentTech === 2
              ? "before:bg-white text-black"
              : "before:bg-transparent text-white"
          } mr-14 md:mr-20 lg:mr-0 `}
          onClick={() => {
            setCurrentTech(2);
          }}
        ></li>
      </ol>
    </nav>
  );
}
