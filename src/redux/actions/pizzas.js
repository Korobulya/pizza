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

export const fetchPizzas = (sortBy, category) => {
    return (dispatch) => {
        dispatch(setLoaded(false))
        fetch(`/pizzas?${
             category !==null  ? `category=${category}`:''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`)
            .then(res => res.json())
            .then(data => dispatch(setPizzas(data)))
    }
}


