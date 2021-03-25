import { combineReducers } from 'redux';
import cards from './cards';
// import basket from './basket';
// import selected from './selected';
// import comparison from './comparison';
import filter from './filter';

const rootReducer = combineReducers({
  cards,
  // basket,
  // selected,
  // comparison,
  filter,
});

export default rootReducer;
