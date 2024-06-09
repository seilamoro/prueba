import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import PodcastSidebar from '../PodcastSidebar';
import { mockCallPodcasts } from './mock';

jest.mock('../../hooks/useFetch', () => ({
    useFetch: (url: string, key: string) => {
       return mockCallPodcasts;
    }
}));

test('renders the podcast card', async () => {
    render(<BrowserRouter><PodcastSidebar data={mockCallPodcasts.podcastData} /></BrowserRouter>);
    let element = await screen.findByTestId('divPodcastImg');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastName');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastAuthor');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastDestiptionLabel');
    expect(element).toBeInTheDocument();
    element = await screen.findByTestId('divPodcastDescriptionText');
    expect(element).toBeInTheDocument();
});