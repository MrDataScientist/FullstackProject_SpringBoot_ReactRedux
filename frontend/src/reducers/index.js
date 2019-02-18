import { combineReducers } from "redux";
import capacityReducer from "./capacityReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  capacity: capacityReducer,
  errors: errorReducer
});
