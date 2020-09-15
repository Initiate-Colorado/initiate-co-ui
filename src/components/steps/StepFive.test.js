import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    const optionText = getByText('Step : Title Setting');
    expect(optionText).toBeInTheDocument();
  }); 
  
  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepFive />
        </MemoryRouter>
      </Provider>);
    const fiscalInput = getByPlaceholderText('Paste the fiscal impact abstract here')
    const titleInput = getByPlaceholderText('Your Ballot Initiative Title')
    fireEvent.change(fiscalInput, { target: { value: 'test revision'}})
    fireEvent.change(titleInput, { target: { value: 'test revision'}})
    expect(fiscalInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
  });  
  
  
});  