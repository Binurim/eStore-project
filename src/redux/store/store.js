import rootReducer from "../reducers/rootReducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
// thunk - to handle async calls

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;