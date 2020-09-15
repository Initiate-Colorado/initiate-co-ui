import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepThree from './StepThree';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepThree', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepThree page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepThree />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Re-Submission of Revised Proposal');
    expect(optionText).toBeInTheDocument();
  }); 
  
  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepThree />
        </MemoryRouter>
      </Provider>);
    const revisionInput = getByPlaceholderText('Enter the revised text of your proposal here')
    fireEvent.change(revisionInput, { target: { value: 'test revision'}})
    expect(revisionInput).toBeInTheDocument()
  }); 

}); 