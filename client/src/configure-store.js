import { createStore } from 'redux';
import initiativeStepReducer from './components/StepTracker/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//THIS SECTION IS COMMENTED OUT BECAUSE IT BREAKS THE CODE
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   initiativeStepReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

// TO REPLICATE BUG, COMMENT OUT THE LINE BELOW AND UNCOMMENT OUT EVERYTHING ABOVE
export const store = createStore(initiativeStepReducer, composeWithDevTools());