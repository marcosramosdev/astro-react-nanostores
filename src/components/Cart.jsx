import { useStore } from "@nanostores/react";
import { cart } from "../stores/cart";
import { cartQuantity, clearCart, removeFromCart } from "../stores/cart.js";

export const Cart = () => {
  const cartItem = useStore(cart);

  const totalAmount = cartItem.reduce((acc, cur) => (cur = acc + cur.price), 0);

  return (
    <div>
      <h2>shopping cart 🛒</h2>
      {cartItem.length > 0 && (
        <div>
          <ul>
            {cartItem.map((product, i) => (
              <li>
                <p>
                  {product.name} <span>{product.price}</span>
                </p>
                <button onClick={() => removeFromCart(product.id)}>
                  Delete item
                </button>
              </li>
            ))}
          </ul>
          <p>number of items: {cartQuantity()}</p>
          <p>
            total price:{" "}
            {totalAmount.toLocaleString("pt-BR", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <button onClick={() => clearCart()}>clear cart</button>
        </div>
      )}

      {cartItem.length === 0 && <p>cart is empty! add a product</p>}
    </div>
  );
};
