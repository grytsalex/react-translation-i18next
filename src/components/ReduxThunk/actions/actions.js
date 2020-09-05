import actionTypes from '../constants/actionTypes';

// export const setUserData = (payload) => ({
//   type: actionTypes.SET_USERS_DATA,
//   payload,
// });

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
  };
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error,
  };
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount,
  };
}


store.dispatch(withdrawMoney(100));