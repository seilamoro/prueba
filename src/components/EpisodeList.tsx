import { Link } from 'react-router-dom';
import { Episode, PropsEpisodeList } from '../interfaces/episode';

const EpisodeList = (props: PropsEpisodeList) => {
    function millisToMinutesAndSeconds(millis: number) {
        let minutes: number = Math.floor(millis / 60000);
        let seconds: number = parseInt(((millis % 60000) / 1000).toFixed(0));
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const episodeListData = props.episodeList.map((entry: Episode, index: number) => {
        if(index === 0) {
            return null;
        }
        let dateObject: Date = new Date(entry.releaseDate);
        let date: string = (dateObject.getDate()+'').length < 2 ? "0"+dateObject.getDate() : dateObject.getDate()+"";
        let mount: string = ((dateObject.getMonth()+1)+'').length < 2 ? "0"+(dateObject.getMonth()+1) : (dateObject.getMonth()+1)+"";
        let dateString: string = date + "/" + mount + "/" + dateObject.getFullYear();
        const duration: string = entry.trackTimeMillis? millisToMinutesAndSeconds(parseInt(entry.trackTimeMillis)) : "";

        return (
            <tr key={index}>
                <td data-testid={`episodeName_${index}`}>
                    <Link className= "link-notUnderLineWC" key={entry.trackId} to={`/podcast/${props.podcastId}/episode/${entry.trackId}`}>
                        {entry.trackName}
                    </Link>
                </td>
                <td data-testid={`episodeDate_${index}`}>{dateString}</td>
                <td className='text-center' data-testid={`episodeDuration_${index}`}>{duration}</td>
            </tr>
            
        )
    })

    const episodeListSkeleton: JSX.Element = (
            <><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></>
        )

    const episodeList: JSX.Element | (JSX.Element | null)[] = props.episodeList.length !== 0 ? episodeListData : episodeListSkeleton;

    const numEpisodes: number | JSX.Element = props.episodeList.length !== 0? props.episodeList.length-1 : (<span className='siderbar-skeleton-episodesNum'>&nbsp;&nbsp;</span>);

    return (
        <div>
            <div className='table-content shadow-div'>
                <div data-testid='episodesNum'><strong>Episodes: {numEpisodes}</strong></div>
            </div>
            <div className='table-content shadow-div'>
                <table className="episodes-table" data-testid='episodesTable'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodeList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EpisodeList;