import React from 'react';
import { render } from '@testing-library/react';
import StepOne from './StepOne';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepOne', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepOne page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepOne />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step 0: Submission of a Proposal');
    expect(optionText).toBeInTheDocument();
  });  
});