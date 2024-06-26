import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import PodcastSidebar from './PodcastSidebar';
import EpisodeCard from './EpisodeCard';
import Loading from './Loading';
import Header from './Header';
import { PodcastData } from "../interfaces/podcast";
import { Episode } from "../interfaces/episode";

const EpisodeView = () => {
    let { podcastId } = useParams();
    let { episodeId } = useParams();
    
    const url: string = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
    const  { podcastData, episodeData, isLoading, isError, error }  = useFetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`, `episode_${podcastId}`);
    if(isError) {
        console.error(error);
    }
    const podcastDataAux: PodcastData | null = podcastData? podcastData : null;
    const episodeList: Episode[] = episodeData? episodeData: [];

    return (
        <div className="main-container">
            <Header></Header>
            <Loading loading={isLoading}></Loading>
            <div className="div-container">
                <div className="leftContent" data-testid='divSiderbar'>
                    <PodcastSidebar data={podcastDataAux}></PodcastSidebar>
                </div>
                <div className="centerContent" data-testid='divEpisodeData'>
                    <div className="episode-content-div shadow-div"></div>
                    <EpisodeCard episodeList={episodeList} episodeId={episodeId}></EpisodeCard>
                </div>
            </div>
        </div>
    )
}

export default EpisodeView