import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import currentlySelectedReducer from '../reducers/currentlySelectedReducer'
import likesReducer from '../reducers/likesReducer'
import songsReducer from '../reducers/songsReducer'

const composeSafely = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    likes: {
        songs: [],
        artists: [],
        albums: []
    },
    songs: {
        data: []
    },
    currentlySelected: {
        artist: {},
        album: {},
        song: {
            id: 568120952,
            readable: true,
            title: "Keep Yourself Alive (Live At The Rainbow)",
            title_short: "Keep Yourself Alive",
            title_version: "(Live At The Rainbow)",
            link: "http://www.deezer.com/track/568120952",
            duration: 236,
            rank: 655827,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "http://cdns-preview-7.dzcdn.net/stream/c-7dcc9a004604ea2039cc484def2b27f5-9.mp3",
            md5_image: "8b8fc5d117f9357b79f0a0a410a170e8",
            artist: {
                id: 412,
                name: "Queen",
                tracklist: "http://api.deezer.com/artist/412/top?limit=50",
                type: "artist"
            },
            type: "track"
        }
    }
}

const rootReducer = combineReducers({
    likes: likesReducer,
    songs: songsReducer,
    currentlySelected: currentlySelectedReducer
})

const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))

export default storeConfig