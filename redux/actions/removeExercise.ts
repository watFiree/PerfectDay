import { REMOVE_EXERCISE } from './actionTypes';

export const removeExercise = (id: number) => {
  return (dispatch) => dispatch({ type: REMOVE_EXERCISE, payload: id });
};
