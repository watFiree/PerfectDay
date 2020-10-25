import * as types from '../actions/actionTypes';

const initialState = {
  configured: false,
  name: '',
  age: 0,
  weight: 0,
  kcalGoal: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STATES:
      return state;
    case types.SET_USER_DATA:
      return {
        configured: true,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
