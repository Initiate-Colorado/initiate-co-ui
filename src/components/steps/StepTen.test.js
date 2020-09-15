import React from 'react';
import { render } from '@testing-library/react';
import StepTen from './StepTen';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTen', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTen page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTen />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Submission of Petitions to the Secretary of State');
    expect(optionText).toBeInTheDocument();
  });  
});  