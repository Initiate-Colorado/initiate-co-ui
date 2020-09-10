import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import WelcomePage from './WelcomePage';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('WelcomePage', () => {

  it('Should render the WelcomePage component', () => {
    const { getByText } = render(<MemoryRouter><WelcomePage /></MemoryRouter>);
    const optionText = getByText('What would you like to do?');
    expect(optionText).toBeInTheDocument();
  });

  it.skip('Should route to the proposal page when the appropriate button is clicked', () => {
    const { getByTestId } = render(<MemoryRouter><WelcomePage /></MemoryRouter>); 
    const proposalButton = getByTestId('proposal-button');
    expect(proposalButton).toBeInTheDocument(); 
    fireEvent.click(proposalButton);
    expect(proposalButton).toHaveBeenCalledTimes(1)
  })
  
})