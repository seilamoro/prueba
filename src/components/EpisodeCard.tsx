import { Episode, PropsEpisode } from '../interfaces/episode';

const EpisodeCard = (props: PropsEpisode) => {
    const episodeId: string | null | undefined = props.episodeId;
    const episodeIdAux: number = episodeId? parseInt(episodeId) : 0;
    const episodeData: Episode | null | undefined = props.episodeList?.find((entry: Episode, index: number) => index !== 0 && entry.trackId === episodeIdAux);

    if(episodeData) {
        const sourceType: string = episodeData.episodeContentType + "/" + episodeData.episodeFileExtension;
        return (
            <div className="episodeCard-div">
                <div><h2 data-testid='trackName'>{episodeData.trackName}</h2></div>
                <div data-testid='trackDescription' dangerouslySetInnerHTML={{__html: `${episodeData.description}`}} />
                <div className='trackAudio-div' data-testid='trackAudio'>
                    <audio controls className='trackAudio-control'>
                        <source src={episodeData.episodeUrl} type={sourceType} />
                    </audio>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default EpisodeCard;