interface EpisodeList {
    results: Episode[];
}

type Episode = {
    trackId: number,
    trackName: string,
    description: string,
    releaseDate: string,
    trackTimeMillis: string,
    episodeUrl: string,
    episodeContentType: string,
    episodeFileExtension: string,
}

export type {EpisodeList, Episode};