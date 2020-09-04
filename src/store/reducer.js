import { combineReducers } from 'redux';
import reduxThunkReducer from '../components/ReduxThunk/reducer';

const rootReducer = combineReducers({
  reduxThunk: reduxThunkReducer,
});

export default rootReducer;
