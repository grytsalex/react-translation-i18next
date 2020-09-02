import actionTypes from "../constants/actionTypes.js";

export const setStatusData = (payload) => ({
  type: actionTypes.CHANGE_DATA,
  payload,
});
