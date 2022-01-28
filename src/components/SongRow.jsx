import { connect } from "react-redux"
import { addCurrentlySelectedSongAction } from "../redux/actions"

const mapDispatchToProps = dispatch => ({
    addCurrentlySelectedSong: song => dispatch(addCurrentlySelectedSongAction(song))
})

const SongRow = ({ song, addCurrentlySelectedSong }) => {
    return (
        <div class="row song-info my-2" onClick={() => addCurrentlySelectedSong(song)}>

            <div class="col-11">
                <p class="my-0 font-weight-bold">{song.title}</p>
                <p class="mt-0 mb-2 smaller-text light-gray-text">{song.artist.name}</p>
            </div>

            <div class="col-1 light-gray-text">
                <p>{song.duration}</p>
            </div>
        
        </div>
    )
}

export default connect(state => ({}), mapDispatchToProps)(SongRow)