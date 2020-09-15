import React from 'react';
import { render } from '@testing-library/react';
import StepEight from './StepEight';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepEight', () => {

  const ballotProcess = {
    id: 8,
    title: "Appeals of Title Board Decisions",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepEight page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepEight ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Appeals of Title Board Decisions', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
});  