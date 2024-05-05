import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import EpisodeList from '../EpisodeList';
import { mockCallPodcasts } from './mock';

test('renders the episode list', async () => {
    render(<BrowserRouter><EpisodeList data={mockCallPodcasts.episodeData} /></BrowserRouter>);
    let element = await screen.findByTestId('episodeName_1');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('episodeDate_1');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('episodeDuration_1');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('episodesNum');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('episodesTable');
    expect(element).toBeInTheDocument();
});

test('renders the episode list data', () => {
    render(<BrowserRouter><EpisodeList data={mockCallPodcasts.episodeData} /></BrowserRouter>);
    let element = screen.getByText(/You Know More Words Than Me/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/192:00/i);
    expect(element).toBeInTheDocument();
    const elementNum = screen.getByText(/Episodes: 3/i);
    expect(elementNum).toBeInTheDocument();
});