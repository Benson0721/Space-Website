import { StageNavigation } from "../components/Navigations";
import "../css/home.css";
import "../css/Animation.css";
import { SloganText1, InnerTypedText } from "../components/Textfields";
import { Header1 } from "../components/Headers";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home__bg">
        <StageNavigation />
        <div className="home z-0">
          <div className="home__textfield transition">
            <SloganText1 data={"SO, YOU WANT TO TRAVEL TO"} />
            <Header1 data={"SPACE"} />
            <InnerTypedText
              data={
                "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
              }
            />
          </div>
          <button className="home__button z-10">
            <Link to={"/destination"}>
              <p className="text-[18px] md:text-[32px] text-Blue-900">
                EXPLORE
              </p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
