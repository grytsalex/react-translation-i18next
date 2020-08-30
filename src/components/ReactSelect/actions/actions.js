import actionTypes from "../constants/actionTypes.js";

export const setIsFocusedState = payload => ({
  type: actionTypes.SET_IS_FOCUSED,
  payload,
});
