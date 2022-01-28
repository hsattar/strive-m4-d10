import { connect } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../styles/likedSongs.css'
const mapStateToProps = (state) => ({
  likedSongs: state.likes.songs,
});

const LikedSongs = ({ likedSongs }) => {
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
                <i class="bi bi-heart"></i>
                <i class="bi bi-three-dots"></i>
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

export default connect(mapStateToProps)(LikedSongs);
