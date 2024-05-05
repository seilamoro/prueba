import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import PodcastCard from '../PodcastCard';
import { mockCallPodcasts } from './mock';

test('renders the podcast card', async () => {
    render(<BrowserRouter><PodcastCard data={mockCallPodcasts.data[0]} /></BrowserRouter>);
    let element = await screen.findByTestId('divPodcastImg');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastTitle');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastAuthor');
    expect(element).toBeInTheDocument();
});

test('renders the podcast data', () => {
    render(<BrowserRouter><PodcastCard data={mockCallPodcasts.data[0]} /></BrowserRouter>);
    let element = screen.getByText(/The Joe Budden Podcast/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/The Joe Budden Network/i);
    expect(element).toBeInTheDocument();
});