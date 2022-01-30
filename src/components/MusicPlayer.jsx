import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { addSongToLikeSAction } from '../redux/actions'
import { removeFromSongList } from '../redux/actions'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const mapStateToProps = state => ({
    likes: state.likes.songs,
    selectedSong: state.currentlySelected.song,

})

const mapDispatchToProps = dispatch => ({
    addSong: (song) => dispatch(addSongToLikeSAction(song)),
    removeSongfromLikes: (song) => dispatch(removeFromSongList(song))
})


const MusicPlayer = ({ selectedSong, addSong, removeSongfromLikes, likes }) => {

    const isLike = likes.findIndex((song) => song.id === selectedSong.id)

    const [audio, setAudio] = useState(null)
    const [playing, setPlaying] = useState(false)
    const [time, setTime] = useState(0)
    let musicInterval

    useEffect(() => {
        playing ? audio?.play() : audio?.pause()
    }, [playing])

    useEffect(() => {
        setTime(0)
        audio?.pause()
        setPlaying(false)
        const newAudio = new Audio(selectedSong?.preview)
        setAudio(newAudio)
        newAudio?.play()
        setPlaying(true)
        musicInterval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)

        return () => clearInterval(musicInterval)
    }, [selectedSong])

    useEffect(() => {
       
        time === 30 && clearInterval(musicInterval)
    }, [time])

    return (
        <>
            {
                selectedSong &&
                <Row className="music-controls">

                    <Col xs='10' lg='4'>

                        <div className="song-info-footer d-flex justify-content-center justify-content-lg-start">
                            <img className="d-none d-xl-block" src="../assets/cards/9.jpg" alt="" />
                            <div className="d-flex flex-column">
                                <p className="ml-3 mb-0 font-weight-bold">{selectedSong.title_short}</p>
                                <p className="ml-3 light-gray-text smaller-text mb-0">{selectedSong.artist.name}</p>
                            </div>
                            {isLike === -1 ? <i
                                className="bi bi-heart ml-2" onClick={() => addSong(selectedSong)}></i> :
                                <i className="bi bi-heart-fill ml-2" onClick={() => removeSongfromLikes(selectedSong)}></i>

                            }
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
                            {!playing ? <i className="bi bi-play-circle-fill mx-3" onClick={() => setPlaying(!playing)}></i> :
                                <i className="bi bi-pause-circle-fill mx-3" onClick={() => setPlaying(!playing)}></i>}
                            <i className="bi bi-skip-forward-fill mx-3 light-gray-text"></i>
                            <i className="bi bi-arrow-repeat mx-3 light-gray-text"></i>
                        </div>
                        <div className="track-length d-flex align-items-center">
                            <p className="mb-0 mx-3">{time < 10 ? `0:0${time}` : `0:${time}`}</p>
                            <div className="track-bar"></div>
                            <p className="mb-0 mx-3">0:30</p>
                        </div>
                    </Col>

                    <Col xs='12' lg='4' className="d-none d-lg-flex justify-content-end align-items-center">
                        <i className="bi bi-laptop mx-2 light-gray-text"></i>
                        <i className="bi bi-volume-up mx-2 light-gray-text"></i>
                        <div className="volume-bar"></div>
                    </Col>

                </Row>
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)