import React from 'react';
import { render } from '@testing-library/react';
import StepTwelve from './StepTwelve';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepTwelve', () => {

  const ballotProcess = {
    id: 11,
    title: 'Curing an Insufficiency',
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepTwelve page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepTwelve ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Curing an Insufficiency', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
});  