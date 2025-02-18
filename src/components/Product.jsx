import { addToCart } from "../stores/cart";

export const Product = (props) => {
  const { product } = props;

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Preço: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};
