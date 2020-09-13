import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import Signup from './Signup';
import { MemoryRouter } from 'react-router-dom';
import initiativeStepReducer from '../StepTracker/reducer';
import { Provider } from 'react-redux';


describe('Signup', () => {

  let store;

  beforeEach(() => {
        store = createStore(initiativeStepReducer);
  })   

  it('Should render the Signup component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Signup');
    expect(optionText).toBeInTheDocument();
  });
})