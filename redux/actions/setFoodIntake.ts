import { SET_FOOD_INTAKE } from './actionTypes';

export const setFoodIntake = (input) => {
  return (dispatch) => dispatch({ type: SET_FOOD_INTAKE, payload: input });
};
