import { combineReducers } from 'redux';

import data from './dataReducer';
import tasks from './tasksReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  tasks,
  data,
  user,
});

export default rootReducer;
