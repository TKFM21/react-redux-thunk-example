import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { visibleFilterReducer } from './visibleFilterReducer';
import { quizReducer } from './quizReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  visibleFilter: visibleFilterReducer,
  quizInfo: quizReducer
});

export default rootReducer;