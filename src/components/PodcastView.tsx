import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import PodcastSidebar from './PodcastSidebar';
import EpisodeList from './EpisodeList';
import Loading from './Loading';
import Header from './Header';
import { Episode } from "../interfaces/episode";

const PodcastView = () => {
    let { podcastId } = useParams();
    
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
    const  { podcastData, episodeData, isLoading, isError, error }  = useFetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`, `episode_${podcastId}`);
    if(isError) {
        console.error(error);
    }
    const podcastDataAux: null = podcastData? podcastData : null;
    const episodeList: Episode[] = episodeData? episodeData: [];
  
    return (
        <div className="main-container">
            <Header></Header>
            <Loading loading={isLoading}></Loading>
            <div className="div-container">
                <div className="leftContent" data-testid='divSiderbar'>
                    <PodcastSidebar data={podcastDataAux}></PodcastSidebar>
                </div>
                <div className="centerContent" data-testid='divList'>
                    <EpisodeList episodeList={episodeList} podcastId={podcastId}></EpisodeList>
                </div>
            </div>
        </div>
    )
}

export default PodcastView