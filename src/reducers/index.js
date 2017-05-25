import { combineReducers } from 'redux';
import authenticationReducer from './authentication'

const rootReducer = combineReducers({
  authenticated: authenticationReducer
  // state: (state = {}) => state
});

export default rootReducer;
