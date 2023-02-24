import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"

const initialData = {
    cartSize: 200,
    cartData: [
        {
            itemQuantity: 9,
            itemPrice: 54,
            itemBasePrice: 6,
            itemTitle: "Man Duo",
        }
    ]
}


const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {

            }
        case REMOVE_FROM_CART:
            return {

            }
        default:
            return state
    }
}

export default cartReducer