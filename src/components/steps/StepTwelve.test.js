import React from 'react';
import { render } from '@testing-library/react';
import StepTwelve from './StepTwelve';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTwelve', () => {

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTwelve page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTwelve />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Step : Curing an Insufficiency');
    expect(optionText).toBeInTheDocument();
  });  
});  