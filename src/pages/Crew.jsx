import { useContext, useEffect, useState } from "react";
import { crew } from "../assets/data/data.json";
import { StageNavigation, CrewNavigation } from "../components/Navigations";
import "../assets/scss/Crew.scss";
import "../assets/scss/Animation.scss";
import { Header3, Header4 } from "../components/Headers";
import { InnerText, SloganText2 } from "../components/Textfields";
import useFadeToggle from "../hooks/useFadeToggle";
import TouchContext from "../hooks/touchContent";
import crew1 from "../assets/images/crew/image-anousheh-ansari.png";
import crew2 from "../assets/images/crew/image-douglas-hurley.png";
import crew3 from "../assets/images/crew/image-mark-shuttleworth.png";
import crew4 from "../assets/images/crew/image-victor-glover.png";

export default function Crew() {
  const [currentCrew, setCurrentCrew] = useState(0);
  const [visible, toggleVisibility] = useFadeToggle();
  const { hasTouch } = useContext(TouchContext);

  const crewImages = [
    { crew: crew1,  }, // currentCrew = 0
    { crew: crew2, }, // currentCrew = 1
    { crew: crew3,  }, // currentCrew = 2
    { crew: crew4,  }, // currentCrew = 3
  ];


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

  const { name, role, bio } = crew[currentCrew];
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
              <img src={crewImages[currentCrew].crew} alt={name} />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
