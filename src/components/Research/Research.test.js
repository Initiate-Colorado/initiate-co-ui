import React from 'react';
import { render } from '@testing-library/react';
import Research from './Research';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import initiativeStepReducer from '../StepTracker/reducer';


describe('Research', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the Research component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Research />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Official Initiatives:');
    expect(optionText).toBeInTheDocument();
  });  
});