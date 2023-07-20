import { FunctionComponent } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Card } from "../components/Card";
export const Socials: FunctionComponent = () => {
  return (
    <div className="socials flex aic flex-gap jcc p-1">
      <Card className="social-card">
        <div className="flex fdc flex-gap aic">
          <div className="icon">
            <Instagram />
          </div>
          <div className="text">
            <div className="title">Instagram</div>
            <div className="username">@i.am.ephra</div>
          </div>
        </div>
      </Card>
      <Card className="social-card">
        <div className="flex fdc flex-gap aic">
          <div className="icon">
            <Facebook />
          </div>
          <div className="text">
            <div className="title">Facebook</div>
            <div className="username">@i.am.ephra</div>
          </div>
        </div>
      </Card>
      <Card className="social-card">
        <div className="flex fdc flex-gap aic">
          <div className="icon">
            <Twitter />
          </div>
          <div className="text">
            <div className="title">Twiter</div>
            <div className="username">@jeansamist</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
