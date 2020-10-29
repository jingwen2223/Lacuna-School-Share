import { combineReducers } from "redux";
import itemReducers from "./itemReducers";
import cartReducers from "./cartReducers";


export default combineReducers({
  products: itemReducers,
  cart: cartReducers,
});

