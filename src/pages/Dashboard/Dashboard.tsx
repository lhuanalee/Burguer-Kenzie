import { useContext } from "react";
import Cart from "../../components/Dashboard/Cart/Cart";
import Header from "../../components/Dashboard/Header/Header";
import ProductsList from "../../components/Dashboard/ProductList/ProductList";
import { CartContext } from "../../contexts/CartContext/CartContext";

import { DashboardStyle } from "./DashboardStyle";

const Dashboard = () => {
  const { click } = useContext(CartContext);

  return (
    <DashboardStyle>
      <Header />
      {click ? <Cart /> : <ProductsList />}
    </DashboardStyle>
  );
};

export default Dashboard;
