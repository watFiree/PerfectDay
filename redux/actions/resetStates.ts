import { RESET_STATES } from './actionTypes';

export const resetStates = () => {
  return (dispatch) => dispatch({ type: RESET_STATES, payload: {} });
};
