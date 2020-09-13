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
    const { getByText } = render(
    <Provider store = { store }>
      <MemoryRouter>
        <Info />
      </MemoryRouter>
    </Provider>);
    const optionText = getByText('Congratulations on taking the first step towards proposing a ballot initiative!');
    expect(optionText).toBeInTheDocument();
  });
})