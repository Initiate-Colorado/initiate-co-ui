import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'


describe('App', () => {

  it('Should render the App component', () => {
    const { getByText } = render(<MemoryRouter><App /></MemoryRouter>);
    const optionText = getByText('What would you like to do?');
    expect(optionText).toBeInTheDocument();
  });
})

