import { connect } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../styles/likedSongs.css'
import { removeFromSongList } from "../redux/actions";

const mapStateToProps = (state) => ({
  likedSongs: state.likes.songs,
});

const mapDispatchToProps =(dispatch)=> ({
    removeSongs:(song_index)=> {
        dispatch(removeFromSongList(song_index))
    }
})

const LikedSongs = ({ likedSongs, removeSongs }) => {
  return (
      <>
      {likedSongs &&
        likedSongs.map((fav, i) => (
          <div id="favourite-songs-container" class="bg-wrapper px-4">
            <div class="row my-3">
              <div class="col-12 album-action-icons d-flex align-items-center">
                <i class="bi bi-play-circle-fill">
                  <div class="white-bg"></div>
                </i>
                <i class="bi bi-three-dots"></i>
                <RiDeleteBin6Line className="ml-auto" style={{ background: "#282C34", fontSize:"20px"}} onClick={() => {removeSongs(i)}}/>
              </div>
            </div>

            <div class="row light-gray-text">
              <div class="col-1">
                <p>#</p>
              </div>

              <div class="col-10">
                <p>{fav.title}</p>
              </div>

              <div class="col-1">
                <p>
                  <i class="bi bi-clock"></i>
                </p>
              </div>
            </div>
            <div class="divider"></div>
          </div>
        ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
