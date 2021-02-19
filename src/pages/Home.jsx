import React from 'react'
import {Categories, SortPopUp, PizzaBlock} from "../components";
import {useSelector, useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryNames = ['Мясные', "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'Алфавит', type: 'alphabet'}
]


const Home = () => {

    const items = useSelector(({pizzas}) => pizzas.items)

    const dispatch = useDispatch()

    const onSelectCategory = React.useCallback((idx) => {
        dispatch(setCategory(idx))
    }, [])

    return (
      <div className="container">
          <div className="content__top">
              <Categories
                onClickItem={onSelectCategory}
                items={categoryNames}/>

              <SortPopUp items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {items && items.map((pizza) => {
                  return (
                    <PizzaBlock
                      key={pizza.id}
                      {...pizza}
                    />)
              })}
          </div>
      </div>
    )
}


export default Home