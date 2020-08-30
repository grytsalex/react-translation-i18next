import { combineReducers } from "redux";
import reactSelectReducer from "../components/ReactSelect/reducer";
import reduxThunkReducer from "../components/ReduxThunk/reducer";

const rootReducer = combineReducers({
  reactSelect: reactSelectReducer,
  reduxThunk: reduxThunkReducer,
});

export default rootReducer;
