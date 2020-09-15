import React from 'react';
import { render } from '@testing-library/react';
import StepFour from './StepFour';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import initiativeStepReducer from '../StepTracker/reducer';


describe('StepFour', () => {

  const ballotProcess = {
    id: 4,
    title: "Filing with Secretary of State",
    dueDate: "April 1"
  }

  let store;

  beforeEach(() => {
    store = createStore(initiativeStepReducer);
  })

  it('Should render the StepFour page', () => {
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <StepFour ballotProcess={ballotProcess}/>
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Filing with Secretary of State', {exact: false});
    expect(optionText).toBeInTheDocument();
  });  
});  