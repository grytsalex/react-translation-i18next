import actionTypes from "../constants/actionTypes.js";

export const setStatuData = (payload) => ({
  type: actionTypes.CHANGE_DATA,
  payload,
});
