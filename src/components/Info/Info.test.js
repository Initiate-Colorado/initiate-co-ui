import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import Info from './Info';
import { MemoryRouter } from 'react-router-dom';
import initiativeStepReducer from '../StepTracker/reducer';
import { Provider } from 'react-redux';


describe('Info', () => {

  let store;

  beforeEach(() => {
        store = createStore(initiativeStepReducer);
  })   

  it('Should render the Info component', () => {
    const { getByTestId } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Info />
      </MemoryRouter>
    </Provider>);
    const optionText = getByTestId('info-section');
    expect(optionText).toBeInTheDocument();
  });
})