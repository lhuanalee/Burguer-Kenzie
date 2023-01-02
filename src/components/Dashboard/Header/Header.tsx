import { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext/CartContext";
import { UserContext } from "../../../contexts/UserContext/UserContext";

import Button from "../../Button/Button";

import Search from "../../../assets/Search.svg";
import Logout from "../../../assets/Logout.svg";
import Shopping from "../../../assets/Shopping.svg";
import BurguerKenzie from "../../../assets/Burguer Kenzie.svg";

import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
  const { setClick } = useContext(CartContext);
  const { userLogout } = useContext(UserContext);

  return (
    <HeaderStyle>
      <div className="header">
        <img src={BurguerKenzie} className="logo" alt="" />
        <div>
          <Button>
            <img src={Search} className="imgSearch" alt="" />
          </Button>
          <Button onClick={() => setClick(true)}>
            <img src={Shopping} alt="" />
          </Button>
          <Button onClick={userLogout}>
            <img src={Logout} alt="" />
          </Button>
          {/* <input placeholder="Digitar pesquisa" /> */}
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
