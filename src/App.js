import React from 'react'
import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";


const App = () => {

    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
          .then(res => res.json())
          .then(data => setPizzas(data.pizzas))
    }, [])



    return (
      <div className="wrapper">
          <Header/>
          <div className="content">
              <Route
                path='/'
                exact
                render={() =>
                  <Home items={pizzas}/>
                }/>
              <Route path='/cart/' component={Cart}/>
          </div>
      </div>
    )
}

export default App;
