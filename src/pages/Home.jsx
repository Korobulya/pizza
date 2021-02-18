import React from 'react'
import {Categories, SortPopUp, PizzaBlock} from "../components";


const Home = ({items}) => {
    return (
      <div className="container">
          <div className="content__top">
              <Categories
                items={['Мясные', "Вегетарианские", "Гриль", "Острые", "Закрытые"]}/>

              <SortPopUp items={[
                  {name: 'популярности', type: 'popular'},
                  {name: 'цене', type: 'price'},
                  {name: 'Алфавит', type: 'alphabet'}
              ]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {items.map((pizza) => {
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