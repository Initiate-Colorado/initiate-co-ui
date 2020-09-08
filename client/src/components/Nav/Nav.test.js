import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('Nav', () => {

  it('Should render the Nav component', () => {
    const { getByText } = render(<MemoryRouter><Nav /></MemoryRouter>);
    const optionText = getByText('Nav');
    expect(optionText).toBeInTheDocument();
  });  
})
