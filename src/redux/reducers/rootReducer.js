import { combineReducers } from "redux";
import { topMenu } from "./topMenu/menuReducer";

const rootReducer = combineReducers({
    topMenu
})

export default rootReducer;