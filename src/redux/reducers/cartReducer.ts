import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions.ts";
import {cartItemsData, CartReducerParams} from "../type";

const cartItems:cartItemsData[] = []

const initialState = {
    cartItems: cartItems
}

const cartReducers = (state = initialState, {type, payload}: CartReducerParams) => {
    let product: cartItemsData | undefined;

    switch (type) {
        case ADD_TO_CART:
            product = state.cartItems.find(item => item.product.id === payload.id);

            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {quantity: 1, product: payload}]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.product.id !== payload.id)
            }
        default:
            return state;
    }
}

export default cartReducers