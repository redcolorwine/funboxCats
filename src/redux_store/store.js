import { combineReducers, createStore } from "redux";
import catsReducer from "./catsReducer";

let reducers = combineReducers({
    catsReducer: catsReducer
})

let store = createStore(reducers);

export default store;