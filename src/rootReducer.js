import { combineReducers } from 'redux';
import initiativeStepReducer from './components/StepTracker/reducer';

const rootReducer = combineReducers({
  initiativeStepReducer,
});

export default rootReducer;