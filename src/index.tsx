import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainView from './components/MainView';
import PodcastView from './components/PodcastView';
import EpisodeView from './components/EpisodeView';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView/>,
  },
  {
    path: "/podcast/:podcastId",
    element: <PodcastView/>,
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <EpisodeView/>,
  },
])

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
        <main>
          <RouterProvider router={router} />
        </main>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
