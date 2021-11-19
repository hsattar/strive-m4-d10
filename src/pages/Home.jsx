import AlbumArtistRow from '../components/AlbumArtistRow'
import GoodMorning from '../components/GoodMorning'

const Home = () => {
    return (
        <>
            <GoodMorning />
            <AlbumArtistRow title='Artists' queryType='artist' query1='1562681' query2='13' query3='12246' query4='246791' query5='564' />
            <AlbumArtistRow title='Albums' queryType='album' query1='86773062' query2='104188' query3='9007781' query4='69319552' query5='119606' />
            <AlbumArtistRow title='Artists' queryType='artist' query1='12178' query2='5306539' query3='4104927' query4='1188' query5='384236' />
            <AlbumArtistRow title='Albums' queryType='album' query1='11848922' query2='8990105' query3='15478674' query4='3791241' query5='13680908' />
            <AlbumArtistRow title='Artists' queryType='artist' query1='9507694' query2='9236850' query3='4794268' query4='8706544' query5='12088868' />
            <AlbumArtistRow title='Albums' queryType='album' query1='14400090' query2='267291462' query3='182811182' query4='119043862' query5='41728321' />
            <AlbumArtistRow title='Artists' queryType='artist' query1='293585' query2='75798' query3='11152580' query4='429675' query5='145' />
            <AlbumArtistRow title='Albums' queryType='album' query1='9188269' query2='746059' query3='244223' query4='739505' query5='231552772' />
        </>
    )
}

export default Home