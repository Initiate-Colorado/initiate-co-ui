import React from 'react';
import { render } from '@testing-library/react';
import BeginInitiative from './BeginInitiative';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import initiativeStepReducer from '../StepTracker/reducer';
import '@testing-library/jest-dom'


describe('BeginInitiative', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })    

  it('Should render the BeginInitiative component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <BeginInitiative />
      </MemoryRouter>
    </Provider>);
    const welcomeMessage = getByText('Congratulations on taking the first step towards proposing a ballot initiative!');
    expect(welcomeMessage).toBeInTheDocument();
  });  

});