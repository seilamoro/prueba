import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
import { Podcast, PodcastData } from "../interfaces/podcast";
import { Episode } from "../interfaces/episode";

export const useFetch = (url: string, key: string) => {
    const cacheProperties = {
        cacheTime: 86400000, // saved for 1 day
        staleTime: 86400000, // refreshes every 1 day
    }

    const query = useQuery({
        queryKey: [key],
        queryFn: async function() {
            const response = await axios.get(url);
            return response;
        },
        ...cacheProperties
    })

    let data: Podcast[] = [];
    let podcastData: PodcastData | null = null;
    let episodeData: Episode[] = [];
    if(query.data !== undefined) {
        if(key === "podcast") {
            query.data.data.feed.entry.forEach((elem: any) => {
                let newPodcast : Podcast = {
                    id: elem.id.attributes?.['im:id'],
                    artist: elem?.['im:artist'].label,
                    name: elem?.['im:name'].label,
                    title: elem.title.label,
                    summary: elem.summary.label,
                    image: elem?.['im:image']?.[elem?.['im:image'].length-1].label
                }
                data.push(newPodcast);
            });
        }
        else {
            const dataAux = JSON.parse(query.data?.data.contents).results;
            dataAux.forEach((elem: any, index: number) => {
                if (index === 0) {
                    let newPodcast : PodcastData = {
                        trackId: elem.trackId,
                        trackName: elem.trackName,
                        artist: elem.artistName,
                        image: elem.artworkUrl600 ? elem.artworkUrl600 : elem.artworkUrl100
                    }
                    podcastData = newPodcast;
                }
                else {
                    let newEpisode: Episode = {
                        trackId: elem.trackId,
                        trackName: elem.trackName,
                        description: elem.description,
                        releaseDate: elem.releaseDate,
                        trackTimeMillis: elem.trackTimeMillis,
                        episodeUrl: elem.episodeUrl,
                        episodeContentType: elem.episodeContentType,
                        episodeFileExtension: elem.episodeFileExtension
                    }
                    episodeData.push(newEpisode);
                }
            });
        }
    }
    let isLoading = query.isLoading;
    let isError = query.isError;
    let error = query.error;

    return { data, podcastData, episodeData, isLoading, isError, error }
}
