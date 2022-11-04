import { StyleProduct } from "./style";

const Product = ({ productImage, name, category, price, addToCart, id }) => {
  return (
    <StyleProduct>
      <figure>
        <img src={productImage} alt={name} />
      </figure>
      <div>
        <p className="product__name">{name}</p>
        <p className="product__category">{category}</p>
        <p className="product__price">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => addToCart(id)}>Adicionar</button>
      </div>
    </StyleProduct>
  );
};

export default Product;
