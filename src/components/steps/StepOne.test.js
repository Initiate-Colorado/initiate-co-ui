import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepOne from './StepOne';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepOne', () => {

  const ballotProcess = {
    id: 1,
    title: "test title",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepOne page', () => {
    const { getByText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepOne ballotProcess={ballotProcess}/>
        </MemoryRouter>
      </Provider>);
    const optionText = getByText('test title', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  

  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
        <StepOne ballotProcess={ballotProcess}/>
        </MemoryRouter>
      </Provider>);
    const proposalInput = getByPlaceholderText('Enter the plain text of your proposal here')
    const nameInput = getByPlaceholderText('Person One Name')
    fireEvent.change(proposalInput, { target: { value: 'test proposal'}})
    fireEvent.change(nameInput, { target: { value: 'test name'}})
    expect(proposalInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
  });
  

  // Need to mock out resolved value of the button being clicked
  it.skip('Should fire the submitProgress function when the save button is clicked', () => {
    let submitProgress = jest.fn()
    submitProgress.mockResolvedValue() 
    const { getByTestId } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepOne />
        </MemoryRouter>
      </Provider>);
    const submitProposalButton = getByTestId('submit progress button')
    expect(submitProgress).toHaveBeenCalledTimes(0)
    fireEvent.click(submitProposalButton)
    expect(submitProgress).toHaveBeenCalledTimes(1)
  })

  it.skip('Should fire the submitNextStep function when the save button is clicked', () => {
    let submitNextStep = jest.fn()
    submitNextStep.mockResolvedValue()
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <StepOne />
        </MemoryRouter>
      </Provider>);
    const submitProposalButton = getByTestId('research-button')
    expect(submitNextStep).toHaveBeenCalledTimes(0)
    fireEvent.click(submitProposalButton)
    expect(submitProposalButton).toHaveBeenCalledTimes(1)
    });  
});