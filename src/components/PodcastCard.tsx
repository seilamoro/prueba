import { Link } from 'react-router-dom';
import { Podcast } from '../interfaces/podcast';

const PodcastCard = (props: any) => {
    const podcastData: Podcast = props.data;
    const img = podcastData?.['im:image'][podcastData?.['im:image'].length-1].label;
    const title = podcastData.title.label.split(" - ")[0];

    return (
        <div className='link-card'><div className='podcart-card1 shadow-div'></div>
            <Link key={podcastData.id.label} to={`/podcast/${podcastData.id.attributes?.['im:id']}`} className='link-notUnderLine'>
                <div className='podcart-card'>
                    <div data-testid='divPodcastImg'><img src={img} alt="imagen podcast" className='circular--square'></img></div>
                    <div data-testid='divPodcastTitle'><strong>{title}</strong></div>
                    <div data-testid='divPodcastAuthor'>Author: {podcastData['im:artist'].label}</div>
                </div>
            </Link>
        </div>
    )
}

export default PodcastCard;