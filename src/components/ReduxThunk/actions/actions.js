import actionTypes from '../constants/actionTypes';

export const setStatusData = (payload) => ({
  type: actionTypes.CHANGE_DATA,
  payload,
});
