import { ADD_GOOD_DEED } from './actionTypes';

export const addGoodDeed = (input: string) => {
  return (dispatch) => dispatch({ type: ADD_GOOD_DEED, payload: input });
};
