import actionTypes from './constants/actionTypes';

const initialState = {
  data: [
    { status: 'Canceled' },
    { status: 'Completed' },
    { status: 'Expired' },
  ],
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
