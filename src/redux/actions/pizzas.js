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

export const fetchPizzas = (sortBy,category) => {
    console.log(sortBy,category)
    return (dispatch) => {
        dispatch(setLoaded(false))
        fetch(`http://localhost:3001/pizzas?category=${category}&`)
            .then(res => res.json())
            .then(data => dispatch(setPizzas(data)))
    }
}


