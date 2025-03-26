import { useState, useEffect, useContext } from "react";
import { destinations } from "../assets/data/data.json";
import { StageNavigation, PlanetNavigation } from "../components/Navigations";
import "../assets/scss/Destination.scss";
import "../assets/scss/Animation.scss";
import { Header2 } from "../components/Headers";
import { InnerText, SloganText2 } from "../components/Textfields";
import useFadeToggle from "../hooks/useFadeToggle";
import PlanetCanvas from "../components/Planet";
import TouchContext from "../hooks/touchContent";
import planet1 from "../assets/images/3Dplanets/moon.jpg";
import planet2 from "../assets/images/3Dplanets/mars.jpg";
import planet3 from "../assets/images/3Dplanets/europa.jpg";
import planet4 from "../assets/images/3Dplanets/titan.jpg";





export default function Destination() {

  const planetImages = [
    { planet: planet1,  }, // currentCrew = 0
    { planet: planet2, }, // currentCrew = 1
    { planet: planet3,  }, // currentCrew = 2
    { planet: planet4,  }, // currentCrew = 3
  ];

  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [visible, toggleVisibility] = useFadeToggle();
  const { hasTouch } = useContext(TouchContext);
  const handlePlanetChange = (index) => {
    toggleVisibility(false);
    setTimeout(() => {
      setCurrentPlanet(index);
    }, 1000); // Duration of the fade-out transition
  };

  const { name, description, distance, travel } =
    destinations[currentPlanet];




  const upperName = name.toUpperCase();
  const upperDis = distance.toUpperCase();
  const upperTra = travel.toUpperCase();

  return (
    <div className="destination__bg bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop">
      <StageNavigation />
      <div className={`destination ${hasTouch ? "fade-out" : ""}`}>
        <div
          className={`destination__process mb-6 md:mr-auto md:ml-8 transition `}
        >
          <SloganText2 data={"PICK YOUR DESTINATION"} process={"01"} />
        </div>
        <div className={`destination__main transition `}>
          <figure
            className={`destination__planet mb-8 lg:mr-20 fade-controller ${
              visible ? "" : "fade-out"
            }`}
          >
            <PlanetCanvas planetTexture={planetImages[currentPlanet].planet} />
            <p class="attribution text-white">
              Planet texture by
              <a href="https://www.artstation.com/zeit/store" target="_blank">
                Maxime Galland
              </a>
              .
            </p>
          </figure>
          <div className="destination__textfield">
            <PlanetNavigation
              currentPlanet={currentPlanet}
              setCurrentPlanet={handlePlanetChange}
            />
            <Header2 data={upperName} visible={visible} />
            <InnerText data={description} visible={visible} />
            <hr className="travel-line" />
            <div className="destination__travel">
              <div className="flex flex-col mr-6 text-center">
                <p className="font-barlow_C text-[14px] tracking-wider text-Blue-300 mb-3 font-thin">
                  Avg. distance
                </p>
                <b
                  className={`text-[28px] text-white mb-6 font-thin fade-controller ${
                    visible ? "" : "fade-out"
                  }`}
                >
                  {upperDis}
                </b>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-barlow_C text-[14px] tracking-wider text-Blue-300 mb-3 font-thin">
                  Est. travel time
                </p>
                <b
                  className={`text-[28px] text-white mb-6 font-thin fade-controller ${
                    visible ? "" : "fade-out"
                  }`}
                >
                  {upperTra}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*            <img src={images.webp} alt={name} className="rotate" /> */
