import React from 'react'
import {Categories, SortPopUp, PizzaBlock} from "../components";
import {useSelector, useDispatch} from "react-redux";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import Loader from "../components/Loader";

const categoryNames = ['Мясные', "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'Алфавит', type: 'alphabet'}
]


const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    const onSelectCategory = React.useCallback((idx) => {
        dispatch(setCategory(idx))
    }, [])

    const onSelectSortType = React.useCallback((name) => {
        dispatch(setSortBy(name))
    }, [])

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    return (
      <div className="container">
          <div className="content__top">
              <Categories
                activeCategory={category}
                onClickItem={onSelectCategory}
                items={categoryNames}
              />
              <SortPopUp
                activeSortType={sortBy}
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
                        key={pizza.id}
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