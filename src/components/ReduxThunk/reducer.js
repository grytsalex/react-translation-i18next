import actionTypes from './constants/actionTypes';

const initialState = {
  users: {},
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USERS_DATA:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
