export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToAdd.id && item.size === cartItemToAdd.size
  );

  if (existingCartItem && existingCartItem.quantity > 9) {
    return [...cartItems];
  }

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id && item.size === cartItemToAdd.size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    item =>
      item.id === cartItemToRemove.id && item.size === cartItemToRemove.size
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      item =>
        item.id !== cartItemToRemove.id || item.size !== cartItemToRemove.size
    );
  }

  return cartItems.map(item =>
    item.id === cartItemToRemove.id && item.size === cartItemToRemove.size
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
