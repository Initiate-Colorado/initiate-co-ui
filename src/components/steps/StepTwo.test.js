import React from 'react';
import { render } from '@testing-library/react';
import StepTwo from './StepTwo';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTwo', () => {
  const ballotProcess = {
    id: 2,
    title: "Review and Comment",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTwo page', () => {
    const { getAllByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTwo ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getAllByText('Review and Comment', {exact: false});
    const optionTextTest = optionText[0]
    expect(optionTextTest).toBeInTheDocument(1);
  });  
}); 