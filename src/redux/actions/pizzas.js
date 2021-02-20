export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const fetchPizzas = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/pizzas')
          .then(res => res.json())
          .then(data => dispatch(setPizzas(data)))
    }
}


