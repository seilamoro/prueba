import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import EpisodeCard from '../EpisodeCard';
import { mockCallPodcasts } from './mock';

test('renders the episode card', async () => {
    render(<BrowserRouter><EpisodeCard episodeList={mockCallPodcasts.episodeData} episodeId="1000653749842" /></BrowserRouter>);
    let element = await screen.findByTestId('trackName');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('trackDescription');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('trackAudio');
    expect(element).toBeInTheDocument();
});

test('renders the episode list data', () => {
    render(<BrowserRouter><EpisodeCard episodeList={mockCallPodcasts.episodeData} episodeId="1000653749842" /></BrowserRouter>);
    let element = screen.getByText(/You Know More Words Than Me/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/The latest episode of the JBP/i);
    expect(element).toBeInTheDocument();
});