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
            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)
            }


        case "CLEAR_CART":
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {}
            }


        default:
            return state
    }

}

export default cart