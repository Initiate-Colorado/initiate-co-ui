import React from 'react';
import { render } from '@testing-library/react';
import InitiativeContainer from './InitiativeContainer';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import initiativeStepReducer from '../StepTracker/reducer';


describe('InitiativeContainer', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the InitiativeContainer component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <InitiativeContainer />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('This will hold our official initiatives');
    expect(optionText).toBeInTheDocument();
  });  
});