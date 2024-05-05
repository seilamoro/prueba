import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import PodcastSidebar from './PodcastSidebar';
import EpisodeList from './EpisodeList';
import Loading from './Loading';
import Header from './Header';

const PodcastView = () => {
    let { podcastId } = useParams();
    
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
    const  { episodeData, isLoading }  = useFetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`, `episode_${podcastId}`);
    const podcastData = episodeData? episodeData[0] : null;
    const episodeList = episodeData? episodeData: [];

    const podcastSidebar = podcastData ? <PodcastSidebar data={podcastData}></PodcastSidebar> : <div className='cards'></div>
  
    return (
        <div className="main-container">
            <Header></Header>
            <Loading loading={isLoading}></Loading>
            <div className="div-container">
                <div className="leftContent" data-testid='divSiderbar'>
                    {podcastSidebar}
                </div>
                <div className="centerContent" data-testid='divList'>
                    <EpisodeList data={episodeList} podcastId={podcastId}></EpisodeList>
                </div>
            </div>
        </div>
    )
}

export default PodcastView