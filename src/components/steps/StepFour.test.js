import React from 'react';
import { render } from '@testing-library/react';
import StepFour from './StepFour';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepFour', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepFour page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepFour />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Filing with Secretary of State');
    expect(optionText).toBeInTheDocument();
  });  
});  