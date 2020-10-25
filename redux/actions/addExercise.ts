import { ADD_EXERCISE } from './actionTypes';

export const addExercise = (name: string, kcalBurnt: number) => {
  return (dispatch, getState) =>
    dispatch({
      type: ADD_EXERCISE,
      payload: { id: getState().data.physical.exercises.length, name, kcalBurnt },
    });
};
