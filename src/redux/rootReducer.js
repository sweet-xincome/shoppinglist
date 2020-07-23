import {combineReducers} from "redux";
import cartItems from './cartItemReducer'
import examples from './exampleReducer'

const rootReducer = combineReducers({
  cartItems,
  examples,
});

export default rootReducer
