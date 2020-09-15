import React from 'react';
import { render } from '@testing-library/react';
import StepEleven from './StepEleven';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepEleven', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepEleven page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepEleven />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Verification of Signatures');
    expect(optionText).toBeInTheDocument();
  });  
});  