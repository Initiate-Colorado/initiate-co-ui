import { createStore } from 'redux';
import initiativeStepReducer from './components/StepTracker/reducer';
import loggedInReducer from './components/Nav/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  initiativeStepReducer,
  loggedInReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
