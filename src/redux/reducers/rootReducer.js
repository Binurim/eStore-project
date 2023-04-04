import { combineReducers } from "redux";
import { topMenu } from "./topMenu/menuReducer";
import { product } from "./product/productReducer";

const rootReducer = combineReducers({
    topMenu,
    product
})

export default rootReducer;