import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import initiativeStepReducer from '../StepTracker/reducer';
import '@testing-library/jest-dom'


describe('Nav', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the Nav component', () => {
    const { getByTestId } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    </Provider>);
    const optionText = getByTestId('logo');
    expect(optionText).toBeInTheDocument();
  });  
})
