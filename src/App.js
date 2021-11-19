import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Home from './pages/Home'
import Search from './pages/Search'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'
import AlbumDetails from './pages/AlbumDetails'
import ArtistDetails from './pages/ArtistDetails'

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs='12'>
            <Row>
              <Sidebar />
              <Col xs='12' lg='10' className='main-page-content'>
              <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/search' element={ <Search />} />
                <Route path='/albums' element={ <Albums />} />
                <Route path='/album/:albumId' element={ <AlbumDetails />} />
                <Route path='/artists' element={ <Artists />} />
                <Route path='/artist/:artistId' element={ <ArtistDetails />} />
              </Routes>
              </Col>
            </Row>
          </Col>
          <MusicPlayer />
        </Row>
      </Container>
    </Router>
  )
}

export default App
