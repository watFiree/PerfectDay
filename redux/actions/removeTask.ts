import * as types from './actionTypes';

const removeTaskStarted = () => ({
  type: types.REMOVE_TASK_STARTED,
});

const removeTaskSuccess = (id: number) => ({
  type: types.REMOVE_TASK_SUCCESS,
  payload: id,
});

const removeTaskFailure = (error: string) => ({
  type: types.REMOVE_TASK_FAILURE,
  payload: { error },
});

export const removeTask = (id: number) => {
  return (dispatch: any, getState: any) => {
    dispatch(removeTaskStarted());
    const exists = getState().tasks.data.find((task) => task.id === id);
    if (exists) {
      return dispatch(removeTaskSuccess(id));
    }
    return dispatch(removeTaskFailure('Nie znaleziono zadnia'));
  };
};
