import React from 'react';
import { render } from '@testing-library/react';
import Proposed from './Proposed';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('Proposed', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the Proposed component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Proposed />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('This will hold our proposed initiatives');
    expect(optionText).toBeInTheDocument();
  });  
});