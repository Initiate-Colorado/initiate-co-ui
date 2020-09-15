import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepFive from './StepFive';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepFive', () => {

  const ballotProcess = {
    id: 5,
    title: "Title Setting",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepFive page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepFive ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Title Setting', {exact: false});
    expect(optionText).toBeInTheDocument();
  }); 
  
  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepFive ballotProcess={ballotProcess}/>
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