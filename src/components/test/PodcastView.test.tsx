import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import PodcastView from '../PodcastView';
import { mockCallPodcasts } from './mock';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        podcastId: '1535809341',
    }),
    useRouteMatch: () => ({ url: '/podcast/podcastId/' }), 
}));

jest.mock('../../hooks/useFetch', () => ({
    useFetch: () => {
       return mockCallPodcasts;
    }
}));

test('renders the podcast view', async () => {
    render(<BrowserRouter><PodcastView /></BrowserRouter>);
    let element = await screen.findByTestId('divSiderbar');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divList');
    expect(element).toBeInTheDocument();
});

test('renders the podcast view data', () => {
    render(<BrowserRouter><PodcastView /></BrowserRouter>);
    let element = screen.getByText(/The Joe Budden Podcast/i);
    expect(element).toBeInTheDocument();
    element = screen.getByText(/The Joe Budden Network/i);
    expect(element).toBeInTheDocument();
});