import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GoodMorning = () => {
    return (   
        <Row>
        <Col xs='12' className="hp-hero pt-2">
            <div className="d-none d-md-flex justify-content-between">
                <div className="d-flex mb-3">
                    <div className="d-flex hp-hero-top circle-top mr-3">
                        <div className="triangle-top-l"></div>
                    </div>
                    <div className="d-flex hp-hero-top circle-top">
                        <div className="triangle-top-r"></div>
                    </div>
                </div>

               

                <div className="account">
                    <div className="btn-group">
                        <button className="btn btn-sm bg-black dropdown-toggle rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg> Your Name
                        </button>
                        <div className="dropdown-menu">
                            <p id="toggle-theme" className="mb-0">Change Theme</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 id="good-morning-h3"><strong>Good morning</strong></h3>

            <div className="good-morning-container row">

            </div>
        
        </Col>
    </Row>
    )
}

export default GoodMorning