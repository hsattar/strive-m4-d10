import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Col, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import { fetchData } from '../redux/actions'

const mapStateToProps =(state)=>({
    isError:state.songs.isError,
    data:state.songs.data
})

const mapDispatchToProps =(dispatch)=> ({
    fetchData: (queryType, query)=> {
        dispatch(fetchData(queryType, query))
    }
})

const AlbumArtistCard = ({ queryType, query, isError, data, fetchData }) => {


    useEffect(() => {
        fetchData(queryType, query)
        // eslint-disable-next-line
    }, [])
    // isError 
    // ?   <Alert  variant="danger">
    //         Error has occured! {isError}
    //      </Alert>

    return (
        <>
        { 
         data &&
            <Col xs='12' sm='6' md='4' lg='3' xl='2' className="card hp-subhero-card">
                <Link to={queryType === 'artist' ? `/artist/${query}` : `/album/${query}`}>
                    <img src={queryType === 'artist' ? data.picture_xl : data.cover_xl} className="data-img-top pt-2 img-fluid" alt="..." />
                    <div className="card-body">
                        <p className="hp-subhero-title">{queryType === 'artist' ? data.name : data.title}</p>
                    </div>
                </Link>
            </Col>
        }
    </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumArtistCard)