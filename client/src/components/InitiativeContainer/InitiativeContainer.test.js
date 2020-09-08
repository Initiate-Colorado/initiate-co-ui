import React from 'react';
import { render } from '@testing-library/react';
import InitiativeContainer from './InitiativeContainer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('InitiativeContainer', () => {


    //Need to wrap around provider with store 
  it('Should render the InitiativeContainer component', () => {
    const { getByText } = render(<MemoryRouter><InitiativeContainer /></MemoryRouter>);
    const optionText = getByText('This will hold our initiatives');
    expect(optionText).toBeInTheDocument();
  });  
})