import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Albums from '../pages/Albums'
import Artists from '../pages/Artists'

const MainContent = () => {
    return (   
        <div class="row">
        <div class="col-12 hp-hero pt-2">
            <div class="d-none d-md-flex justify-content-between">
                <div class="d-flex mb-3">
                    <div class="d-flex hp-hero-top circle-top mr-3">
                        <div class="triangle-top-l"></div>
                    </div>
                    <div class="d-flex hp-hero-top circle-top">
                        <div class="triangle-top-r"></div>
                    </div>
                </div>

                <div class="search-bar">
                    <div class="input-group my-3 ">
                        <div class="input-group-prepend">
                          <span class="input-group-text bg-dark" id="basic-addon1"><i class="bi bi-search text-white"></i></span>
                        </div>
                        <input type="text" name="q" class="form-control bg-dark text-white" placeholder="Songs, Artists, Albums" id="song-search" />
                      </div>
                </div>

                <div class="account">
                    <div class="btn-group">
                        <button class="btn btn-sm bg-black dropdown-toggle rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg> Your Name
                        </button>
                        <div class="dropdown-menu">
                            <p id="toggle-theme" class="mb-0">Change Theme</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 id="good-morning-h3"><strong>Good morning</strong></h3>

            <div class="good-morning-container row">

            </div>
        
        </div>
    </div>
    )
}

export default MainContent