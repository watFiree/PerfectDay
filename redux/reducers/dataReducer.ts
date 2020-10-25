import * as types from '../actions/actionTypes';

const initialState = {
  sleep: {
    score: 0,
  },
  food: {
    firstMeal: 0,
    secondMeal: 0,
    thirdMeal: 0,
    fourthMeal: 0,
    fifthMeal: 0,
  },
  sanity: {
    goodDeeds: [],
    completedTasks: 0,
  },
  physical: {
    exercises: [],
  },
};

const dataRouter = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STATES:
      return state;
    case types.SET_SLEEP_TIME:
      return {
        ...state,
        sleep: {
          ...state.sleep,
          score: action.payload,
        },
      };
    case types.SET_FOOD_INTAKE:
      return {
        ...state,
        food: {
          ...action.payload,
        },
      };
    case types.ADD_GOOD_DEED:
      return {
        ...state,
        sanity: {
          ...state.sanity,
          goodDeeds: [...state.sanity.goodDeeds, action.payload],
        },
      };
    case types.REMOVE_GOOD_DEED:
      return {
        ...state,
        sanity: {
          ...state.sanity,
          goodDeeds: [...state.sanity.goodDeeds.filter((deed, index) => index !== action.payload)],
        },
      };
    case types.ADD_EXERCISE:
      return {
        ...state,
        physical: {
          ...state.physical,
          exercises: [...state.physical.exercises, action.payload],
        },
      };
    case types.REMOVE_EXERCISE:
      return {
        ...state,
        physical: {
          ...state.physical,
          exercises: [
            ...state.physical.exercises.filter((exercise) => exercise.id !== action.payload),
          ],
        },
      };
    case types.INCREASE_COMPLETED_TASK:
      return {
        ...state,
        sanity: {
          ...state.sanity,
          completedTasks: state.sanity.completedTasks + 1,
        },
      };
    case types.DECREASE_COMPLETED_TASK:
      return {
        ...state,
        sanity: {
          ...state.sanity,
          completedTasks: state.sanity.completedTasks - 1,
        },
      };
    default:
      return state;
  }
};

export default dataRouter;
