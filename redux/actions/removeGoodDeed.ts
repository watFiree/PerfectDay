import { REMOVE_GOOD_DEED } from './actionTypes';

export const removeGoodDeed = (id: number) => {
  return (dispatch) => dispatch({ type: REMOVE_GOOD_DEED, payload: id });
};
