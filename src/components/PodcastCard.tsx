import { Link } from 'react-router-dom';
import { Podcast, PropsPodcast } from '../interfaces/podcast';

const PodcastCard = (props: PropsPodcast) => {
    const podcastData: Podcast = props.data;
    const title: string = podcastData.title.split(" - ")[0];

    return (
        <div className='link-card'><div className='podcart-card1 shadow-div'></div>
            <Link key={podcastData.id} to={`/podcast/${podcastData.id}`} className='link-notUnderLine'>
                <div className='podcart-card'>
                    <div data-testid='divPodcastImg'><img src={podcastData.image} alt="imagen podcast" className='circular--square'></img></div>
                    <div data-testid='divPodcastTitle'><strong>{title}</strong></div>
                    <div data-testid='divPodcastAuthor'>Author: {podcastData.artist}</div>
                </div>
            </Link>
        </div>
    )
}

export default PodcastCard;