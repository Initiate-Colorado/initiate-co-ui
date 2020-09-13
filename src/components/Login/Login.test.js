import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import initiativeStepReducer from '../StepTracker/reducer';
import { Provider } from 'react-redux';


describe('Login', () => {

  let store;

  beforeEach(() => {
        store = createStore(initiativeStepReducer);
  })   

  it('Should render the Login component', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Login');
    expect(optionText).toBeInTheDocument();
  });
})