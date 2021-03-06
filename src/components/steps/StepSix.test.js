import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepSix from './StepSix';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepSix', () => {

  const ballotProcess = {
    id: 6,
    title: "Revision of Proposal after Title Board Meeting",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepSix page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepSix ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Revision of Proposal after Title Board Meeting', {exact: false});
    expect(optionText).toBeInTheDocument();
  });
  
  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepSix ballotProcess={ballotProcess}/>
        </MemoryRouter>
      </Provider>);
    const revisionInput = getByPlaceholderText('Paste your proposal revision here')
    fireEvent.change(revisionInput, { target: { value: 'test revision'}})
    expect(revisionInput).toBeInTheDocument()
  });  
  
  
});  