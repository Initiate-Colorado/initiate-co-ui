import React from 'react';
import { render } from '@testing-library/react';
import StepNine from './StepNine';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepNine', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepNine page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepNine />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Signature Gathering');
    expect(optionText).toBeInTheDocument();
  });  
});  