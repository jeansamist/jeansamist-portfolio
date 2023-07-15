import { FunctionComponent } from "react";
import triangle from "./../assets/images/triangle.svg";
import { Button } from "../components/Button";
import { Me } from "../components/Me";
import { Socials } from "./Socials";
export const Hero: FunctionComponent = () => {
  return (
    <div className="hero">
      <div className="inner flex aic flex-gap fdc">
        <Me />
        <div className="text flex fdc flex-gap">
          <div className="title">I am BAHA Ephraim</div>
          <div className="description">
            I am Ephraim, professional web developer with long time experiance
            in this field
          </div>
          <div className="buttons w100 flex jcc">
            <Button type="white">Conatact me</Button>
          </div>
        </div>
      </div>
      <Socials />
      <div className="triangle">
        <img src={triangle} alt="Triangle" />
      </div>
    </div>
  );
};
