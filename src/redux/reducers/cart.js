import {act} from "@testing-library/react";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const {id} = action.payload
            const obj = action.payload
            const currentPizzaItems = !state.items[id]
                ? [obj]
                : [...state.items[id].items, obj]
            const newItems = {
                ...state.items,
                [id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }
            const totalCount = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].items.length + sum, 0)
            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: getTotalPrice(allPizzas)
            };


        case "CLEAR_CART":
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {}
            };

        case "REMOVE_CART_ITEM":
            const newObj = {
                ...state.items
            }
            const currentTotalPrice = newObj[action.payload].totalPrice
            const currentTotalCount = newObj[action.payload].items.length
            delete newObj[action.payload]
            return {
                ...state,
                items: newObj,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            };

        case "PLUS_ITEM":
            const itemsPlus = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: itemsPlus,
                        totalPrice: getTotalPrice(itemsPlus)
                    }
                }
            }

        default:
            return state
    }

}

export default cart