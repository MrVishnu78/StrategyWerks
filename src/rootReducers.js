import { combineReducers } from 'redux';
import dataReducer from './redux/dataReducers';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
