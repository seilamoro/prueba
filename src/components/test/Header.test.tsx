import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';

test('renders header', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const element = screen.queryByTestId('pageTitle');
    expect(element).toBeInTheDocument();
    const title = screen.getByText(/Podcaster/i);
    expect(title).toBeInTheDocument();
});

