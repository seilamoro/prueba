import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MainView from '../MainView';
import { mockCallPodcasts } from './mock';

jest.mock('../../hooks/useFetch', () => ({
    useFetch: () => {
       return mockCallPodcasts;
    }
}));

test('renders the podcast data', async () => {
    render(<BrowserRouter><MainView /></BrowserRouter>);
    let element = screen.getByText(/The Joe Budden Podcast/i);
    expect(element).toBeInTheDocument();
    const elemntInput = screen.getByPlaceholderText("Filter podcast...");
    expect(elemntInput).toBeInTheDocument();
    const numPodcastsElement = await screen.findByTestId('numPodcasts');
    expect(numPodcastsElement).toBeInTheDocument();
    expect(numPodcastsElement.textContent).toBe("1");
});

test('filter data', async () => {
    render(<BrowserRouter><MainView /></BrowserRouter>);
    const elemntInput = screen.getByPlaceholderText("Filter podcast...");
    expect(elemntInput).toBeInTheDocument();
    const numPodcastsElement = await screen.findByTestId('numPodcasts');
    expect(numPodcastsElement).toBeInTheDocument();
    expect(numPodcastsElement.textContent).toBe("1");
    fireEvent.change(elemntInput, {target: {value: 'aa'}});
    expect(numPodcastsElement.textContent).toBe("0");
    fireEvent.change(elemntInput, {target: {value: 'Budden'}});
    expect(numPodcastsElement.textContent).toBe("1");
});
