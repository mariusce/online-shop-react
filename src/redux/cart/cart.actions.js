import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const decreaseItemQuantity = (item) => ({
    type: CartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});