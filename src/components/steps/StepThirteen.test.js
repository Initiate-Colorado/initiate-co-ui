import React from 'react';
import { render } from '@testing-library/react';
import StepThirteen from './StepThirteen';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepThirteen', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepThirteen page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepThirteen />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText("Step : Protesting the Secretary of State's Determination");
    expect(optionText).toBeInTheDocument();
  });  
});  