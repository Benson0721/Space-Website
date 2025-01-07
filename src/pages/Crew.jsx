import { useContext, useEffect, useState } from "react";
import { crew } from "../assets/data/data.json";
import { StageNavigation, CrewNavigation } from "../components/Navigations";
import "../assets/css/Crew.css";
import "../assets/css/Animation.css";
import { Header3, Header4 } from "../components/Headers";
import { InnerText, SloganText2 } from "../components/Textfields";
import useFadeToggle from "../hooks/useFadeToggle";
import TouchContext from "../hooks/touchContent";

export default function Crew() {
  const [currentCrew, setCurrentCrew] = useState(0);
  const [visible, toggleVisibility] = useFadeToggle();
  const { hasTouch } = useContext(TouchContext);

  useEffect(() => {
    const id = setInterval(() => {
      handleCrewChange((prevIndex) => {
        if (prevIndex === crew.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 8000);
    return () => clearInterval(id);
  }, [currentCrew]);

  const handleCrewChange = (index) => {
    toggleVisibility(false);
    setTimeout(() => {
      setCurrentCrew(index);
    }, 1000); // Duration of the fade-out transition
  };

  const { name, images, role, bio } = crew[currentCrew];
  const upperName = name.toUpperCase();
  const upperRole = role.toUpperCase();
  return (
    <>
      <div className="crew__bg bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop">
        <StageNavigation />
        <div className={`crew ${hasTouch ? "fade-out" : ""}`}>
          <div className="crew__process mb-6 md:mr-auto md:ml-8">
            <SloganText2 data={"MEET YOUR CREW"} process={"02"} />
          </div>
          <div className="crew__main transition">
            <div className="crew__textfield">
              <Header4 data={upperRole} visible={visible} />
              <Header3 data={upperName} visible={visible} />
              <InnerText data={bio} visible={visible} />
              <CrewNavigation
                currentCrew={currentCrew}
                setCurrentCrew={handleCrewChange}
              />
            </div>
            <figure
              className={`crew__person mb-8 lg:mr-10 fade-controller ${
                visible ? "" : "fade-out"
              }`}
            >
              <img src={images.webp} alt={name} />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
