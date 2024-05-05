import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

test('renders show loading', () => {
    render(<Loading loading={true} />);
    const element = screen.queryByTestId('divLoading');
    expect(element).toBeInTheDocument();
});

test('renders hide loading', () => {
    render(<Loading loading={false} />);
    const element = screen.queryByTestId('divLoading');
    expect(element).not.toBeInTheDocument();
});