import AlbumArtistRow from '../components/AlbumArtistRow'
import GoodMorning from '../components/GoodMorning'

const Home = () => {
    return (
        <>
            <GoodMorning />
            <AlbumArtistRow 
                title='Artist'
                queryType='artist'
                query='13'
            />
        </>
    )
}

export default Home