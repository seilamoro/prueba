import { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import PodcastCard from './PodcastCard';
import Loading from './Loading';
import Header from './Header';
import { Podcast } from '../interfaces/podcast';
import '../CSS/style.css';

const MainView = () => {
    const [podcastList, setPodcastList] = useState<Podcast[]>([]);
    const [value, setValue] = useState('');

    const  { data, isLoading, isError, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', "podcast");
    if(isError) {
        console.error(error);
    }
    const podcastData: Podcast[] | null = data;

    const listPodcastInit: JSX.Element[] | null = podcastData.length !== 0? podcastData.map((entry: Podcast, index: number) => {
        return (
            <PodcastCard key={index} data={entry}></PodcastCard>
        )
    }): null;

    const listPodcastFilter: JSX.Element[] | null = podcastList.length !== 0? podcastList.map((entry: Podcast, index: number) => {
        return (
            <PodcastCard key={index} data={entry}></PodcastCard>
        )
    }): null;

    const listPodcast: JSX.Element[] | null = listPodcastFilter === null && value === "" ? listPodcastInit : listPodcastFilter;

    const listPodcastCount: number = listPodcastFilter === null && value === "" ? podcastData.length : podcastList.length;

    const applyFilter = (event: { target: { value: string; }; }) => {
        let value: string = event.target.value.trim();
        setValue(value);
        const listPodcastAux: Podcast[] | null = podcastData?.filter((elem: Podcast) => {
            const title = (elem.title).split(" - ")[0];
            return (title.toLowerCase().includes(value.toLowerCase()) || (elem.artist.toLowerCase().includes(value.toLowerCase())));
        });
        if(listPodcastAux !== null) {
            setPodcastList(listPodcastAux);
        }
    }

    return (
        <div className="main-container">
            <Header></Header>
            <Loading loading={isLoading}></Loading>
            <div className='div-filter'>
                <div data-testid="numPodcasts" className='div-numPodcasts'>{listPodcastCount}</div>
                <input onChange={applyFilter} placeholder='Filter podcast...' type='search'></input>
            </div>
            <div className="cards" data-testid='listPodcast'>
                {listPodcast}
            </div>
        </div>
    )
}

export default MainView