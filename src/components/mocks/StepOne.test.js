import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  it('Should know the value of an input', () => {
    const { getByPlaceholderText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <StepOne />
        </MemoryRouter>
      </Provider>);
    const proposalInput = getByPlaceholderText('Enter the plain text of your proposal here')
    const nameInput = getByPlaceholderText('Person One Name')
    const phoneInput = getByPlaceholderText('Person One Phone')
    const emailInput = getByPlaceholderText('Person One Email')
    fireEvent.change(proposalInput, { target: { value: 'test proposal'}})
    fireEvent.change(nameInput, { target: { value: 'test name'}})
    fireEvent.change(phoneInput, { target: { value: 'test phone'}})
    fireEvent.change(emailInput, { target: { value: 'test email'}})
    expect(proposalInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
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