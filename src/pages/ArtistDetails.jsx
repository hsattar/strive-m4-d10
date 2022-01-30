import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import SongRow from '../components/SongRow'
import { addCurrentlySelectedArtistAction } from '../redux/actions'
import { addArtistToLikeSAction } from '../redux/actions'
import { removeFromArtistList } from '../redux/actions'

const mapStateToProps = state =>({
    likes: state.likes.artists,
    selectedArtist: state.currentlySelected.artist,
    
})



const mapDispatchToProps = dispatch => ({
    addCurrentlySelectedArtist: artist => dispatch(addCurrentlySelectedArtistAction(artist)),
    addArtist: artist =>dispatch(addArtistToLikeSAction(artist)),
    removeArtist: artist=>dispatch(removeFromArtistList(artist))
})


const ArtistDetails = ({ addCurrentlySelectedArtist, addArtist, selectedArtist, removeArtist, likes }) => {
console.log("this is like/artists state ", likes.artists)
    const isLike = likes.findIndex((artist) => artist.id === selectedArtist.id)

    const params = useParams()
    const artistId = params.artistId

    const [artist, setArtist] = useState(null)
    const [artistSongs, setArtistSongs] = useState(null)

    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
            if (response.ok) {
                const data = await response.json()
                setArtist(data)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchSongs = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`)
            if (response.ok) {
                const data = await response.json()
                setArtistSongs(data)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchDetails()
        fetchSongs()
    }, [])

    return (
        <>
        {
            artist && 
            <>
                <div id="album-header-container">

                <div className="d-flex px-4 justify-content-end">

                    <div className="account">
                        <div className="btn-group">
                            <button className="btn btn-sm bg-black dropdown-toggle rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg> Your Name
                            </button>
                            <div className="dropdown-menu">
                                ...
                            </div>
                        </div>
                    </div>

                </div>

                <div className="album-content row pl-4 mx-0">

                    <div className="d-flex">

                        <img className="ml-5 d-none d-sm-block album-cover" src={artist.picture_xl} alt="" />
                        <div className="d-flex flex-column justify-content-end album-content-text ml-4">
                            <h3 className="album-title">{artist.name}</h3>
                            {/* <div className="text-white d-flex mt-2">
                                <p className="mx-1 album-artist">{album.artist.name}</p>
                                <p className="mx-1 album-year">{album.release_date}</p>
                                <p className="mx-1 album-length">{album.nb_tracks} Songs</p>
                                <p className="mx-1 album-duration">{album.duration}</p>
                            </div> */}
                        </div>
                        
                    </div>

                </div>
                </div>

                <div id="album-songs-container" className="bg-wrapper px-4">
                <div className="row my-3 album-controls">
                <div className="col-12 album-action-icons d-flex align-items-center">
                    <i className="bi bi-play-circle-fill" onClick={() => addCurrentlySelectedArtist(artist)}><div className="white-bg"></div></i>
                    
               
                  {
                      isLike === -1 ? <i className="bi bi-heart ml-2" onClick={()=>addArtist(selectedArtist)}></i> : <i className="bi bi-heart-fill ml-2" onClick={()=>removeArtist(selectedArtist)}></i>
                  }
                  
                   
                   
                   
                   
                   
                    <i className="bi bi-three-dots"></i>
                </div>
                </div>

                <div className="row light-gray-text">

                <div className="col-11">
                    <p>Title</p>
                </div>

                <div className="col-1">
                    <i className="bi bi-clock"></i>
                </div>

                </div>

                <div className="divider"></div>

                <div id="albumSongsList">
                    {   artistSongs &&
                        artistSongs.data.map(song => <SongRow song={song} />)
                    }
                </div>

                </div>   
            </>
        }
    </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetails)