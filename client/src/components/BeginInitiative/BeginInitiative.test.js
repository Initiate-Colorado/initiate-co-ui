import React from 'react';
import { render } from '@testing-library/react';
import BeginInitiative from './BeginInitiative';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('BeginInitiative', () => {


    //Need to wrap around provider with store 
  it('Should render the BeginInitiative component', () => {
    const { getByText } = render(<MemoryRouter><BeginInitiative /></MemoryRouter>);
    const optionText = getByText('What would you like to do?');
    expect(optionText).toBeInTheDocument();
  });  
})