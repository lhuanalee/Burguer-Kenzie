import InputSearch from "../InputSearch/InputSearch";
import Logo from "../Logo/Logo";
import { StyleHeader } from "./style";

const Header = ({ filteredProduct }) => {
  return (
    <StyleHeader>
      <div>
        <Logo />
        <InputSearch filteredProduct={filteredProduct} />
      </div>
    </StyleHeader>
  );
};

export default Header;
