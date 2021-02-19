import React from 'react'
import {Route} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {setPizzas} from './redux/actions/pizzas'

const App = () => {

    const dispatch = useDispatch();
    const items = useSelector()
    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
          .then(res => res.json())
          .then(data => dispatch(setPizzas(data.pizzas)))
    }, [])

    return (
      <div className="wrapper">
          <Header/>
          <div className="content">
              <Route
                path='/'
                exact
                render={() =>
                  <Home items={[]}/>
                }/>
              <Route path='/cart/' component={Cart}/>
          </div>
      </div>
    )
}

//
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
//          filter: state.filters
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items)=>dispatch(setPizzasAction(items))
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);


export default App