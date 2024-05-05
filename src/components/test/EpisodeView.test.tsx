import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import EpisodeView from '../EpisodeView';
import { mockCallPodcasts } from './mock';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        podcastId: '1535809341',
        episodeId: '1000653749842',
    }),
    useRouteMatch: () => ({ url: '/podcast/podcastId/episode/episodeId' }), 
}));

jest.mock('../../hooks/useFetch', () => ({
    useFetch: () => {
       return mockCallPodcasts;
    }
}));

test('renders the episode view', async () => {
    render(<BrowserRouter><EpisodeView /></BrowserRouter>);
    let element = await screen.findByTestId('divSiderbar');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divEpisodeData');
    expect(element).toBeInTheDocument();
});

test('renders the episode view data', async () => {
    render(<BrowserRouter><EpisodeView /></BrowserRouter>);
    let element = screen.getByText(/The Joe Budden Network/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/Description/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/You Know More Words Than Me/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/The latest episode of the JBP/i);
    expect(element).toBeInTheDocument();
});