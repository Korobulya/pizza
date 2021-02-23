export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const setLoaded = (bool) => ({
    type: "SET_LOADED",
    payload: bool
})

export const fetchPizzas = () => {
    return (dispatch) => {
        dispatch(setLoaded(false))
        fetch('http://localhost:3001/pizzas')
            .then(res => res.json())
            .then(data => dispatch(setPizzas(data)))
    }
}


