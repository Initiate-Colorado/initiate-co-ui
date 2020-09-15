import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import initiativeStepReducer from '../StepTracker/reducer';
import { Provider } from 'react-redux';


describe('App', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the App component', () => {
    const { getByText } = render(
      <Provider store = { store }>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>);

    const optionText = getByText('What would you like to do?');
    expect(optionText).toBeInTheDocument();
  });
})

