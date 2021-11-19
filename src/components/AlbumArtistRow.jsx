import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'

const AlbumArtistRow = ({title, queryType, query}) => {

    const [card, setCard] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
            if (response.ok) {
                const data = await response.json()
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Row id="artist1">
            <Col xs='12' className="hp-sub-hero">

                <div className="d-flex justify-content-between mt-4 mb-3 mx-0">
                    <h4 id="recently-played-h4">{title}</h4>
                    <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                </div>

                <div className="row d-flex justify-content-center" id="artistContainer1">
                </div>

            </Col>
        </Row>
    )
}

export default AlbumArtistRow