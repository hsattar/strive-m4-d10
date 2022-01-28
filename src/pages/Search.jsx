import { Row, Col } from "react-bootstrap";
import { useState } from "react";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
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
      </Col>
    </Row>
  );
};

export default Search;
