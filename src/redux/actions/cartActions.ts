import {ProductData} from "../type";
const ADD_TO_CART: string = "ADD_TO_CART"
const REMOVE_FROM_CART: string = "REMOVE_FROM_CART";
const addToCart = (product: ProductData) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

const removeFromCart = (product: ProductData) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}


export {
    ADD_TO_CART,
    addToCart,
    REMOVE_FROM_CART,
    removeFromCart
}