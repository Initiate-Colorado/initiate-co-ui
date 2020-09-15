import React from 'react';
import { render } from '@testing-library/react';
import StepEight from './StepEight';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepEight', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepEight page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepEight />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Appeals of Title Board Decisions');
    expect(optionText).toBeInTheDocument();
  });  
});  