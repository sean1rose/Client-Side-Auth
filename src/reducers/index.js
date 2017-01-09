import { combineReducers } from 'redux';
// redeclare reducer variable as 'form' 
import { reducer as form } from 'redux-form';

// 'form' prop of state is going to be the redux-form reducer
const rootReducer = combineReducers({
  form
});

export default rootReducer;
