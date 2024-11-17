import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
// Изменить cashReducer 
const rootReducer = combineReducers({
  cashReducer
})
export const store = createStore(rootReducer);
