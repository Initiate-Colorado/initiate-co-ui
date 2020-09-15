import React from 'react';
import { render } from '@testing-library/react';
import StepTen from './StepTen';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTen', () => {

  const ballotProcess = {
    id: 10,
    title: "Submission of Petitions to the Secretary of State",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTen page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTen  ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Submission of Petitions to the Secretary of State', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
});  