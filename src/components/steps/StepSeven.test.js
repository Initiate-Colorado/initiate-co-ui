import React from 'react';
import { render } from '@testing-library/react';
import StepSeven from './StepSeven';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepSeven', () => {

  const ballotProcess = {
    id: 7,
    title: "Rehearings of Title Board Decisions",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepSeven page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepSeven ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Rehearings of Title Board Decisions', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
}); 