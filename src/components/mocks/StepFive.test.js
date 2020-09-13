import React from 'react';
import { render } from '@testing-library/react';
import StepFive from './StepFive';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepFive', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepFive page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepFive />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step 0: Title Setting');
    expect(optionText).toBeInTheDocument();
  });  
});  