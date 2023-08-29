import { combineReducers } from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  // other reducers...
});

export default rootReducer;