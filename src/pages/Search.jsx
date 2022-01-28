import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllSongs } from "../redux/actions";

const mapStateToProps = (state) => ({
  searchedSongs: state.songs.searchedSongs,
});

const mapDispatchToProps = (dispatch) => ({
  searchArtist: (inputValue) => {
    dispatch(getAllSongs(inputValue));
  },
});
const Search = ({ searchArtist, searchedSongs }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    searchArtist(inputValue);
  }, [inputValue]);

  return (
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={4} lg={6}>
        <div className="search-bar">
          <div className="input-group my-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark" id="basic-addon1">
                <i className="bi bi-search text-white"></i>
              </span>
            </div>
            <input
              type="text"
              name="q"
              className="form-control bg-dark text-white"
              placeholder="Songs, Artists, Albums"
              id="song-search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>

        {
        searchedSongs &&
        searchedSongs
        .filter((song) => song.artist.name.toLowerCase().includes(inputValue))
            .map((song) => (
              <Col xs={3} key={song.artist.id}>
                <img
                  src={song.album.cover_small}
                  class="card-img-top pt-2 img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <div class="buttoncard"></div>
                  <p class="hp-subhero-title">Song - {song.title}</p>
                  <p>Album - {song.album.title}</p>
                  <p class="hp-subhero-subtitle mb-0">{song.artist.name}</p>
                </div>
              </Col>
            ))
        }
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
