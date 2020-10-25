import { SET_SLEEP_TIME } from '../actions/actionTypes';

export const setSleepTime = (time: number) => {
  return (dispatch) => dispatch({ type: SET_SLEEP_TIME, payload: time });
};
