import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
const AlbumArtistCard = ({ queryType, query }) => {

    const [card, setCard] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
            if (response.ok) {
                const data = await response.json()
                setCard(data)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <>
        { card &&
            <Col xs='12' sm='6' md='4' lg='3' xl='2' className="card hp-subhero-card">
                <Link to={queryType === 'artist' ? `/artist/${query}` : `/album/${query}`}>
                    <img src={queryType === 'artist' ? card.picture_xl : card.cover_xl} className="card-img-top pt-2 img-fluid" alt="..." />
                    <div className="card-body">
                        <p className="hp-subhero-title">{queryType === 'artist' ? card.name : card.title}</p>
                    </div>
                </Link>
            </Col>
        }
    </>
    )
}

export default AlbumArtistCard