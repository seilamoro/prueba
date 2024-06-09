interface EpisodeList {
    results: Episode[];
}

interface Episode {
    trackId: number,
    trackName: string,
    description: string,
    releaseDate: string,
    trackTimeMillis: string,
    episodeUrl: string,
    episodeContentType: string,
    episodeFileExtension: string,
}

interface PropsEpisode {
    episodeId?: string | null;
    podcastId?: string | null;
    episodeList?: Episode[] | null;
}

interface PropsEpisodeList {
    podcastId: string | undefined;
    episodeList: Episode[];
}

export type {EpisodeList, Episode, PropsEpisode, PropsEpisodeList};