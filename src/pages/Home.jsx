import React from 'react'
import {Categories, SortPopUp, PizzaBlock} from "../components";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../components/Loader";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'}
]


const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: "ADD_PIZZA_CART",
            payload: obj
        })
    }

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((idx) => {
        dispatch(setCategory(idx))
    }, [])

    const onSelectSortType = React.useCallback((name) => {
        dispatch(setSortBy(name))
    }, [])

    return (
      <div className="container">
          <div className="content__top">
              <Categories
                activeCategory={category}
                onClickItem={onSelectCategory}
                items={categoryNames}
              />
              <SortPopUp
                activeSortType={sortBy.type}
                items={sortItems}
                onSelectSortPopup={onSelectSortType}
              />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {isLoaded ?
                items.map((pizza) => {
                    return (
                      <PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        key={pizza.id}
                        addedCount={cartItems[pizza.id]&& cartItems[pizza.id].items.length}
                        {...pizza}
                      />)
                }) : Array(10).fill(0).map((_, idx) => {
                    return <Loader key={idx}/>
                })}

          </div>
      </div>
    )
}


export default Home