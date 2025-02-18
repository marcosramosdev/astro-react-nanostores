import { atom } from "nanostores";

export const cart = atom([]);

// cart.get() get the hole cart array

export const addToCart = (product) => {
  cart.set([...cart.get(), product]);
};

export const removeFromCart = (id) => {
  cart.set(cart.get().filter((product) => product.id !== id));
};

export const clearCart = () => {
  cart.set([]);
};

export const cartQuantity = () => {
  return cart.get().length;
};
