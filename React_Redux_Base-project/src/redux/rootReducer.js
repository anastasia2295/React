import {combineReducers} from "redux"
import { likesReducer } from "./likesReducer"
import { inputReducer } from "./inputReducer"
import { commentsReducer } from "./commentsRedecer"
import { appReducer } from "./appReducer"

export const rootReducer = combineReducers({
 likesReducer,
 inputReducer,
 commentsReducer,
 appReducer
})