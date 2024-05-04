
interface Podcast {
    id: any,
    title: any,
    'im:name': any;
    'im:artist': any;
    'im:image': Image[];
    summary: any;
}

interface PodcastData {
    trackId: string,
    trackName: string,
    artistName: string;
    artworkUrl100: string;
    artworkUrl600: string;
    feedUrl: string;
}

interface Image {
    label: string;
    attributes: any;
}

export type {Podcast, PodcastData };