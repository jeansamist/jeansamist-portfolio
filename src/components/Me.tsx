import { FunctionComponent } from "react";
import me from "./../assets/images/me.png";
export const Me: FunctionComponent = () => {
  return (
    <div className="me">
      <div className="image">
        <div className="img">
          <img src={me} alt="baha ephraim" />
        </div>
      </div>
    </div>
  );
};
