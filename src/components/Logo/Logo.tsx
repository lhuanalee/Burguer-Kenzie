import Bag from "../../assets/Bag.png";
import BurguerKenzie from "../../assets/Burguer Kenzie.svg";

import { LogoStyle } from "./LogoStyle";

const Logo = () => {
  return (
    <LogoStyle>
      <img src={BurguerKenzie} alt="Logo Burguer Kenzie" />
      <div className="slogan">
        <figure>
          <img src={Bag} alt="Sacola" />
        </figure>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
    </LogoStyle>
  );
};

export default Logo;
