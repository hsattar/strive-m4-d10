import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import './styles/style.css'
import './styles/search.css'
import './styles/album.css'
import './styles/artist.css'
import storeConfig from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)