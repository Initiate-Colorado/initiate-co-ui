import React from 'react';
import { render } from '@testing-library/react';
import Official from './Official';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import initiativeStepReducer from '../StepTracker/reducer';


describe('Official', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the Official component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Official />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Official Initiatives:');
    expect(optionText).toBeInTheDocument();
  });  
});