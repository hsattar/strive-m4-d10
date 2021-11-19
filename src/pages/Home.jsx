import AlbumArtistRow from '../components/AlbumArtistRow'
import GoodMorning from '../components/GoodMorning'

const Home = () => {
    return (
        <>
            <GoodMorning />
            <AlbumArtistRow title='Artists' queryType='artist' query1='1562681' query2='13' query3='12246' query4='246791' query5='564' />
            <AlbumArtistRow title='Albums' />
        </>
    )
}

export default Home