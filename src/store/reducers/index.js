import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
  course: courseReducer,
  user: userReducer,
});
