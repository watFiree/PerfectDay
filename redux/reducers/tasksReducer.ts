import * as types from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

interface ActionType {
  type: string;
  payload?: any;
}

const tasksReducer = (state = initialState, action: ActionType) => {
  console.log('action', action.payload);
  switch (action.type) {
    case types.RESET_STATES:
      return state;
    case types.CREATE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case types.CREATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };
    case types.REMOVE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter((task) => task.id !== action.payload)],
        loading: false,
      };
    case types.REMOVE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };
    case types.SET_TASK_STATUS:
      return {
        ...state,
        data: [
          ...state.data.map((task) =>
            task.id === action.payload.id
              ? { ...(task as object), status: action.payload.status }
              : task
          ),
        ],
      };
    default:
      return state;
  }
};

export default tasksReducer;
