
interface Podcast {
    id: string,
    title: string,
    name: string;
    artist: string;
    image: string;
    summary: string;
}

interface PodcastData {
    trackId: string,
    trackName: string,
    artist: string;
    image: string;
}

interface PropsPodcast {
    data: Podcast;
}

interface PropsPodcastData {
    data: PodcastData | null;
}  

export type {Podcast, PodcastData, PropsPodcast, PropsPodcastData };