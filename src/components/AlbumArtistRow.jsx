import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AlbumArtistCard from './AlbumArtistCard'

const AlbumArtistRow = ({ title, queryType, query1, query2, query3, query4, query5 }) => {

    return (
        <Row id="artist1">
            <Col xs='12' className="hp-sub-hero">

                <div className="d-flex justify-content-between mt-4 mb-3 mx-0">
                    <h4>{title}</h4>
                    <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                </div>

                <Row className="justify-content-center">
                    <AlbumArtistCard queryType={queryType} query={query1}/> 
                    <AlbumArtistCard queryType={queryType} query={query2}/> 
                    <AlbumArtistCard queryType={queryType} query={query3}/> 
                    <AlbumArtistCard queryType={queryType} query={query4}/> 
                    <AlbumArtistCard queryType={queryType} query={query5}/> 
                </Row>

            </Col>
        </Row>
    )
}

export default AlbumArtistRow