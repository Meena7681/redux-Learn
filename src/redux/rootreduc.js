import { combineReducers } from "redux";
import BallReducer from "./ballReduce";
import BatReducer from "./batReduce";

const rootReducer = combineReducers({
     bat: BatReducer,
     ball: BallReducer
})

export default rootReducer;
