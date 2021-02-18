import filters from "./filters";
import pizzas from "./pizzas";
import  {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters,
    pizzas
})

export  default  rootReducer