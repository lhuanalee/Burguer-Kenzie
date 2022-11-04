import "./App.css";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import api from "./services/api";

const App = () => {
  const [showProducts, setShowProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchFiltered, setSearchFiltered] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    api.get(`/products`).then((resp) => setShowProducts(resp.data));
  }, [showProducts]);

  const filteredProduct = (search) => {
    let filteredProducts = showProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim()) ||
        product.category
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
    );
    setFiltered(filteredProducts);
    setSearchFiltered(search);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Header filteredProduct={filteredProduct} />
      <div className="container">
        {filtered.length ? (
          <div className="searh__results">
            <h1>
              Resultados para: <span>{searchFiltered}</span>
            </h1>
            <ProductsList
              showProducts={filtered}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </div>
        ) : (
          <>
            <ProductsList
              showProducts={showProducts}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
