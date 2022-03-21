import { combineReducers } from 'redux';
import inventory from './inventory/reducer';

const rootReducer = combineReducers({
  inventory: inventory
});

export default rootReducer;