import {combineReducers} from "redux";
import cartItems from './cartItemReducer'

const rootReducer = combineReducers({
  cartItems,
});

export default rootReducer
