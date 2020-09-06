import actionTypes from './constants/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USERS_DATA:
      return { ...state, users: action.payload };
    case actionTypes.FETCH_USERS_DATA:
      return { ...state, loading: true };
    case actionTypes.FETCH_USERS_DATA_FAILURE:
      return {
        ...state, loading: false, users: [], error: action.payload,
      };
    default:
      return state;
  }
}
