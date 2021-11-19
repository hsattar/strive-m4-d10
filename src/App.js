import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/search' element={ <Search />} />
        <Route path='/albums' element={ <Albums />} />
        <Route path='/artists' element={ <Artists />} />
      </Routes>
      <MusicPlayer />
    </Router>
  )
}

export default App
