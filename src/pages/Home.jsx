import { StageNavigation } from "../components/Navigations";
import "../assets/scss/home.scss";
import "../assets/scss/Animation.scss";
import { SloganText1, InnerTypedText } from "../components/Textfields";
import { Header1 } from "../components/Headers";
import { useNavigate } from "react-router-dom";
import TouchContext from "../hooks/touchContent";
import { useContext } from "react";

export default function Home() {
  const { hasTouch, touchHandler } = useContext(TouchContext);
  const navigate = useNavigate();
  const handleNavigation = (position) => {
    touchHandler();
    setTimeout(() => {
      navigate(position);
    }, 500);
  };
  return (
    <>
      <div className="home__bg bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
        <StageNavigation />
        <div className={`home z-0  ${hasTouch ? "fade-out" : ""}`}>
          <div className="home__main transition">
            <div className="home__textfield ">
              <SloganText1 data={"SO, YOU WANT TO TRAVEL TO"} />
              <Header1 data={"SPACE"} />
              <InnerTypedText
                data={
                  "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
                }
              />
            </div>
            <button
              className="home__button z-10 "
              onClick={() => handleNavigation("/destination")}
            >
              <p className="text-[18px] md:text-[32px] text-Blue-900">
                EXPLORE
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
