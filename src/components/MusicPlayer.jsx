import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {addSongToLikeSAction} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps = state =>({
    likes:state.likes.song
})


const mapDispatchToProps = dispatch  =>({
    addSong: (song) =>dispatch(addSongToLikeSAction(song))
})





const MusicPlayer = ({addSong}) => {

    return (
        <Row className="music-controls">

        <Col xs='10' lg='4'>
            
            <div className="song-info-footer d-flex justify-content-center justify-content-lg-start">
                <img className="d-none d-xl-block" src="../assets/cards/9.jpg" alt="" />
                <div className="d-flex flex-column">
                    <p className="ml-3 mb-0 font-weight-bold">Another One Bites The Dust - Remastered 2011</p>
                    <p className="ml-3 light-gray-text smaller-text mb-0">Queen</p>
                </div>
                <i className="bi bi-heart ml-2" onClick={()=>addSong()}></i>
            </div>

        </Col>

        <Col xs='2' className="d-lg-none">
            <i className="bi bi-play-circle-fill"></i>
        </Col>

        <Col xs='3' className="d-lg-none nav-bar">
            <Link to='/' className="d-flex selected flex-column justify-content-center align-items-center py-2">
                <i className="bi bi-house-door mx-3"></i>
                <p className="d-none d-sm-block mb-0">Home</p>
            </Link> 
        </Col>

        <Col xs='3' className="d-lg-none nav-bar">
            <Link to='/' className="d-flex flex-column justify-content-center align-items-center py-2">
                <i className="bi bi-collection-play mx-3"></i>
                <p className="d-none d-sm-block mb-0">Your Library</p>
            </Link> 
        </Col>

        <Col xs='3' className="d-lg-none nav-bar">
            <Link to='/albums' className="d-flex flex-column justify-content-center align-items-center py-2">
                <i className="bi bi-vinyl mx-3"></i>
                <p className="d-none d-sm-block mb-0">Albums</p>
            </Link> 
        </Col>

        <Col xs='3' className="d-lg-none nav-bar">
            <Link to='/artists' className="d-flex flex-column justify-content-center align-items-center py-2">
                <i className="bi bi-music-note-beamed mx-3"></i>
                <p className="d-none d-sm-block mb-0">Artists</p>
            </Link>
        </Col>


        <Col xs='12' lg='4' className="d-none d-lg-flex flex-column align-items-center">
            <div className="music-controls-section d-flex align-items-center">
                <i className="bi bi-shuffle mx-3 light-gray-text"></i>
                <i className="bi bi-skip-backward-fill mx-3 light-gray-text"></i>
                <i className="bi bi-play-circle-fill mx-3"></i>
                <i className="bi bi-skip-forward-fill mx-3 light-gray-text"></i>
                <i className="bi bi-arrow-repeat mx-3 light-gray-text"></i>
            </div>  
            <div className="track-length d-flex align-items-center">
                <p className="mb-0 mx-3">0:00</p>
                <div className="track-bar"></div>
                <p className="mb-0 mx-3">5:50</p>
            </div>
        </Col>

        <Col xs='12' lg='4' className="d-none d-lg-flex justify-content-end align-items-center">
            <i className="bi bi-laptop mx-2 light-gray-text"></i>
            <i className="bi bi-volume-up mx-2 light-gray-text"></i>
            <div className="volume-bar"></div>
        </Col>

    </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)