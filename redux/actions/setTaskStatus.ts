import { SET_TASK_STATUS, INCREASE_COMPLETED_TASK, DECREASE_COMPLETED_TASK } from './actionTypes';

export const setTaskStatus = (id: number, status: boolean) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_TASK_STATUS, payload: { id, status } });
    if (status) {
      dispatch({ type: INCREASE_COMPLETED_TASK, payload: {} });
    } else if (!(getState().data.sanity.completedTasks <= 0)) {
      dispatch({ type: DECREASE_COMPLETED_TASK, payload: {} });
    }
  };
};
