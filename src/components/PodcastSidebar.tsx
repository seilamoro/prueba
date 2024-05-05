import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { PodcastData } from '../interfaces/podcast';

const PodcastSidebar = (props: any) => {
    const podcastData: PodcastData = props.data;

    const  { data, isError, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', "podcast");
    if(isError) {
        console.error(error);
    }
    const podcastDescriptionData = data? data : [];
    let img = "";
    let podcastDescription = "";

    if(podcastData) {
        img = podcastData.artworkUrl600? podcastData.artworkUrl600 : podcastData.artworkUrl100;
        
        if(podcastDescriptionData.length !== 0) {
            const element = podcastDescriptionData.find((elem: any) => elem.id.attributes?.['im:id'] === (podcastData.trackId+''));
            if(element) {
                podcastDescription = element.summary.label;
            }
        }
    }

    if(podcastData) {
        return (
            <div className='siderbar-content'>
                <div className="sidebar-content-div shadow-div"></div>
                <Link to={`/podcast/${podcastData.trackId}`} className='link-notUnderLine'>
                    <div className='siderbar-text' data-testid='divPodcastImg'>
                        <img className='siderbar-img' src={img} alt="imagen podcast"></img>
                    </div>
                    <hr className='siderbar-hr'></hr>

                    <div className='siderbar-text'>
                        <div data-testid='divPodcastName'><strong>{podcastData.trackName}</strong></div>
                        <div data-testid='divPodcastAuthor'>by {podcastData.artistName}</div>
                    </div>
                </Link>
                <hr className='siderbar-hr'></hr>
                <div className='siderbar-text'>
                    <div data-testid='divPodcastDestiptionLabel'><strong>Description:</strong></div>
                    <div data-testid='divPodcastDescriptionText' dangerouslySetInnerHTML={{__html: `${podcastDescription}`}} />
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default PodcastSidebar;