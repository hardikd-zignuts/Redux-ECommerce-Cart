import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"

const initialData = {
    cartSize: 20,
    cartData: []
}

// let demoObj = {
//     id: 1,
//     itemQuantity: 90,
//     itemPrice: 99,
//     itemBasePrice: 60,
//     itemTitle: "Cake Ice Cream",
// }

const cartReducer = (state = initialData, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: [action.payLoad, ...state.cartData]
            }
        case REMOVE_FROM_CART:

            return {

            }
        default:
            return state
    }
}

export default cartReducer