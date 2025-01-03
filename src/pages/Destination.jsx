import { useState, useEffect } from "react";
import { destinations } from "../../data.json";
import { StageNavigation, PlanetNavigation } from "../components/Navigations";
import "../css/Destination.css";
import "../css/Animation.css";
import { Header2 } from "../components/Headers";
import { InnerText, SloganText2 } from "../components/Textfields";
import useFadeToggle from "../hooks/useFadeToggle";

export default function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [visible, toggleVisibility] = useFadeToggle();

  const handlePlanetChange = (index) => {
    toggleVisibility(false);
    setTimeout(() => {
      setCurrentPlanet(index);
    }, 900); // Duration of the fade-out transition
  };

  const { name, images, description, distance, travel } =
    destinations[currentPlanet];

  const upperName = name.toUpperCase();
  const upperDis = distance.toUpperCase();
  const upperTra = travel.toUpperCase();

  return (
    <div className="destination__bg">
      <StageNavigation />
      <div className="destination">
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
            <img src={images.webp} alt={name} className="rotate" />
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
