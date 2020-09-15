import React from 'react';
import { render } from '@testing-library/react';
import StepFourteen from './StepFourteen';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepFourteen', () => {

  const ballotProcess = {
    id: 14,
    title: "Placement on Ballot",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepFourteen page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepFourteen ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Placement on Ballot', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
});  