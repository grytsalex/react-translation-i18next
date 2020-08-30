import actionTypes from "./constants/actionTypes.js";

const initialState = {
  isFocused: false,
};

export default function reactSelectReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_IS_FOCUSED:
      return {
        ...state,
        isFocused: action.payload,
      };
    default:
      return state;
  }
}
