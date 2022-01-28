import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Col, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import { fetchData } from '../redux/actions'

const mapStateToProps =(state)=>({
    isError:state.songs.isError
})

const AlbumArtistCard = ({ queryType, query, isError }) => {

    const [card, setCard] = useState([])

    

    useEffect(() => {
        fetchData(queryType, query)
        // eslint-disable-next-line
    }, [])

    return (
        <>
        { 
        isError 
        ? <Alert  variant="danger">
        Error has occured! {isError}
      </Alert>
        :
        card &&
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

export default connect(mapStateToProps)(AlbumArtistCard)