import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import PodcastCard from './PodcastCard';
import Loading from './Loading';
import Header from './Header';
import '../CSS/style.css';

const MainView = () => {
    const [value, setValue] = useState('');
    const [podcastList, setPodcastList] = useState([]);

    const  { data, isLoading, isError, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', "podcast");
    if(isError) {
        console.error(error);
    }
    const podcastData = data? data : [];

    const listPodcast = podcastList.map((entry: any, index: number) => {
        return (
            <PodcastCard key={index} data={entry}></PodcastCard>
        )
    })

    useEffect(() => {
        const listPodcast = podcastData.filter((elem: any) => {
            const title = elem.title.label.split(" - ")[0];
            return (title.toLowerCase().includes(value.toLowerCase()) || (elem['im:artist'].label.toLowerCase().includes(value.toLowerCase())));
        });
        setPodcastList(listPodcast);
    }, [value, podcastData]);

    return (
        <div className="main-container">
            <Header></Header>
            <Loading loading={isLoading}></Loading>
            <div className='div-filter'>
                <div data-testid="numPodcasts" className='div-numPodcasts'>{podcastList.length}</div>
                <input onChange={e => setValue(e.target.value.trim())} placeholder='Filter podcast...'></input>
            </div>
            <div className="cards" data-testid='listPodcast'>
                {listPodcast}
            </div>
        </div>
    )
}

export default MainView