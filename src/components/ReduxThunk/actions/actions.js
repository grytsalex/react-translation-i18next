import actionTypes from '../constants/actionTypes';
import { fetchForThunk } from '../helpers/utils';

const setUsersData = users => ({
  type: actionTypes.SET_USERS_DATA,
  payload: users,
});

const fetchUsersData = () => ({
  type: actionTypes.FETCH_USERS_DATA,
});

const fetchUsersDataFailure = error => ({
  type: actionTypes.FETCH_USERS_DATA_FAILURE,
  payload: error,
});

export const thunkAsyncDataFetch = () => function (dispatch) {
  dispatch(fetchUsersData());
  fetchForThunk().then(response => {
    const users = response.data.map(user => user.id);
    dispatch(setUsersData(users));
  })
    .catch(error => {
      dispatch(fetchUsersDataFailure(error.message));
    });
};
