import { connect } from "react-redux"
import { addCurrentlySelectedSongAction } from "../redux/actions"

const mapStateToProps = state => ({
    currentSong: state.currentlySelected.song
})

const mapDispatchToProps = dispatch => ({
    addCurrentlySelectedSong: song => dispatch(addCurrentlySelectedSongAction(song))
})

const SongRow = ({ song, addCurrentlySelectedSong, currentSong }) => {

    const isCurrentSong = currentSong?.id === song.id

    return (
        <div class={isCurrentSong ? "row song-info light-green-text my-2" : "row song-info my-2"} onClick={() => addCurrentlySelectedSong(song)}>

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

export default connect(mapStateToProps, mapDispatchToProps)(SongRow)