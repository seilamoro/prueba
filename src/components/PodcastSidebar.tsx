import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Podcast, PodcastData, PropsPodcastData } from '../interfaces/podcast';

const PodcastSidebar = (props: PropsPodcastData) => {
    const podcastData: PodcastData | null = props.data;
    const  { data, isError, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', "podcast");
    if(isError) {
        console.error(error);
    }

    if(!podcastData) {
        return (
            <div className='siderbar-content'>
                <div className="sidebar-content-div shadow-div"></div>
                <div className='siderbar-text'>
                    <div className='siderbar-skeleton-img'>&nbsp;</div>
                </div>
                <hr className='siderbar-hr'></hr>
                <div className='siderbar-text'>
                    <div className='siderbar-skeleton-text1'>&nbsp;</div>
                </div>
                <hr className='siderbar-hr'></hr>
                <div className='siderbar-text'>
                    <div className='siderbar-skeleton-text2'>&nbsp;</div>
                </div>
            </div>
        )
    }

    const podcastDescriptionData: Podcast[] = data? data : [];
    let podcastDescription: string = "";

    if(podcastData) {
        if(podcastDescriptionData.length !== 0) {
            const element: Podcast | null | undefined = podcastDescriptionData.find((elem: Podcast) => elem.id === (podcastData.trackId+''));
            if(element) {
                podcastDescription = element.summary;
            }
        }
    }


    return (
        <div className='siderbar-content'>
            <div className="sidebar-content-div shadow-div"></div>
            <Link to={`/podcast/${podcastData.trackId}`} className='link-notUnderLine'>
                <div className='siderbar-text' data-testid='divPodcastImg'>
                    <img className='siderbar-img' src={podcastData.image} alt="imagen podcast"></img>
                </div>
                <hr className='siderbar-hr'></hr>

                <div className='siderbar-text'>
                    <div data-testid='divPodcastName'><strong>{podcastData.trackName}</strong></div>
                    <div data-testid='divPodcastAuthor'>by {podcastData.artist}</div>
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

export default PodcastSidebar;