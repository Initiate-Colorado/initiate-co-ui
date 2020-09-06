import { createStore } from 'redux';
import initiativeStepReducer from './components/StepTracker/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   initiativeStepReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());
export const store = createStore(initiativeStepReducer, composeWithDevTools());