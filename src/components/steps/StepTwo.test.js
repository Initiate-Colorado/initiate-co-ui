import React from 'react';
import { render } from '@testing-library/react';
import StepTwo from './StepTwo';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTwo', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTwo page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTwo />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step 0: Review and Comment');
    expect(optionText).toBeInTheDocument();
  });  
}); 