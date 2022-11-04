import Product from "../Product/Product";
import { StyleProductList } from "./style";

const ProductsList = ({ showProducts, setCurrentSale, currentSale }) => {
  const addToCart = (id) => {
    const idFound = currentSale.find((product) => product.id === id);
    if (idFound) {
      const productFound = currentSale.map((product) =>
        product.id === id
          ? { ...product, quantidade: product.quantidade + 1 }
          : product
      );
      setCurrentSale(productFound);
    } else {
      const productFound = showProducts.find((product) => product.id === id);
      setCurrentSale([...currentSale, { ...productFound, quantidade: 1 }]);
    }
  };
  return (
    <StyleProductList>
      {showProducts.map((products) => (
        <Product
          addToCart={addToCart}
          id={products.id}
          key={products.id}
          productImage={products.img}
          name={products.name}
          category={products.category}
          price={products.price}
        />
      ))}
    </StyleProductList>
  );
};

export default ProductsList;
