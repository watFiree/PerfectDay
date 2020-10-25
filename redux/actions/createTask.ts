import * as types from './actionTypes';

const createTaskStarted = () => ({
  type: types.CREATE_TASK_STARTED,
});

const createTaskSuccess = (data: any) => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: data,
});

const createTaskFailure = (error: string) => ({
  type: types.CREATE_TASK_FAILURE,
  payload: { error },
});

export const createTask = (input: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(createTaskStarted());
    const id = getState().tasks.data.length;
    const data = Object.assign({}, input, { id });
    console.log(data);
    dispatch(createTaskSuccess(data));
  };
};
