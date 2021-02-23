import React from 'react'
import {Route} from "react-router-dom";

import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {

    return (
      <div className="wrapper">
          <Header/>
          <div className="content">

              <Route path='/' exact component={Home}/>
              <Route path='/cart/' component={Cart}/>
          </div>
      </div>
    )
}

//
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
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