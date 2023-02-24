import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"


export const addToCart = () => {
    return {
        type: ADD_TO_CART,
        payLoad: []
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART,
        payLoad: []
    }
}