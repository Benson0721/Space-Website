import { useContext, useEffect, useState } from "react";
import { technology } from "../assets/data/data.json";
import { StageNavigation, TechNavigation } from "../components/Navigations";
import "../assets/css/Technology.css";
import "../assets/css/Animation.css";
import { Header3, Header4 } from "../components/Headers";
import { InnerText, SloganText2 } from "../components/Textfields";
import useFadeToggle from "../hooks/useFadeToggle";
import TouchContext from "../hooks/touchContent";

export default function Technology() {
  const [currentTech, setCurrentTech] = useState(0);
  const { name, images, description } = technology[currentTech];
  const [visible, toggleVisibility] = useFadeToggle();
  const { hasTouch } = useContext(TouchContext);

  useEffect(() => {
    const id = setInterval(() => {
      handleTechChange((prevIndex) => {
        if (prevIndex === technology.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 8000);
    return () => clearInterval(id);
  }, [currentTech]);

  const handleTechChange = (index) => {
    toggleVisibility(false);
    setTimeout(() => {
      setCurrentTech(index);
    }, 1000); // Duration of the fade-out transition
  };

  const upperName = name.toUpperCase();

  return (
    <>
      <div className="tech__bg bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
        <StageNavigation />
        <div className={`tech ${hasTouch ? "fade-out" : ""}`}>
          <div className="tech__process mb-6 md:mr-auto md:ml-8">
            <SloganText2 data={"SPACE LAUNCH 101"} process={"03"} />
          </div>

          <div className="tech__main transition">
            <picture
              className={`tech__image fade-controller ${
                visible ? "" : "fade-out"
              }`}
            >
              <source media="(min-width: 1440px)" srcSet={images.portrait} />
              <source media="(min-width: 768px)" srcSet={images.landscape} />
              <img src={images.portrait} alt={name} />
            </picture>
            <TechNavigation
              currentTech={currentTech}
              setCurrentTech={handleTechChange}
            />
            <div className="tech__textfield ">
              <Header4 data={"THE TERMINOLOGY…"} visible={visible} />
              <Header3 data={upperName} visible={visible} />
              <InnerText data={description} visible={visible} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
