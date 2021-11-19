import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Sidebar = () => {

    return (
        <Col lg='2' className="d-none d-lg-block">
        <Row>
            <Col xs='12' className="side-bar px-0">
                {/* <img className="spotify-logo" src="../assets/spotify-logo.png" alt="sidebar-logo" /> */}
                <Link to='/'><img className="spotify-logo" src="../assets/spotify-logo.png" alt="sidebar-logo" /></Link>
                
                <Link to='/' className="d-flex selected py-2">
                    <i className="bi bi-house-door mx-3"></i>
                    <p>Home</p>
                </Link> 

                <Link to='/search' className="d-flex  py-2">
                    <i className="mx-3 bi bi-search"></i>
                    <p>Search</p>
                </Link> 
                
                <Link to='/' className="d-flex py-2">
                    <i className="bi bi-collection-play mx-3"></i>
                    <p>Your Library</p>
                </Link> 

                <Link to='/albums' className="d-flex py-2">
                    <i className="bi bi-vinyl mx-3"></i>
                    <p>Albums</p>
                </Link> 

                <Link to='/artists' className="d-flex py-2">
                    <i className="bi bi-music-note-beamed mx-3"></i>
                    <p>Artists</p>
                </Link> 

                <Link to='/' className="d-flex py-2">
                    <i className="bi bi-heart-fill mx-3"></i>
                    <p>Liked Songs</p>
                </Link> 

                <Link to='/' className="d-flex py-2">
                    <i className="bi bi-person-circle mx-3"></i>
                    <p>Account</p>
                </Link> 

                <hr className="border-secondary d-none d-xl-block" />
                <div className="other-links d-none d-xl-flex flex-column">
                    <Link to='/'>Good Morning</Link>
                    <Link to='/'>Recently Played</Link>
                    <Link to='/'>Shows To Try</Link>
                    <Link to='/'>More Of What You Like</Link>
                    <Link to='/'>Hits</Link>
                    <Link to='/'>The Best of 2020</Link>
                    <Link to='/'>Jump Back In</Link>
                    <Link to='/'>For Fans Of Sanah</Link>
                    <Link to='/'>Your Top songs 2020</Link>
                    <Link to='/'>In Love With You-Erykah B..</Link>
                    <Link to='/'>FRANCHISE ft.Young Thig...</Link>
                    <Link to='/'>This is road Stewart</Link>
                    <Link to='/'>Your Top Songs 2019</Link>
                    <Link to='/'>Metal Ballades</Link>
                    <Link to='/'>Jazz ClassNameics Blue Note...</Link>
                    <Link to='/' className="light-gray-text"><i className="bi bi-arrow-down-circle"> </i>Install app</Link>
                </div>
            </Col>
        </Row>
    </Col>
    )
}

export default Sidebar