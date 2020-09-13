import React from 'react';
import { render } from '@testing-library/react';
import StepSix from './StepSix';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepSix', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepSix page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepSix />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step 0: Revision of Proposal after Title Board Meeting');
    expect(optionText).toBeInTheDocument();
  });  
});  