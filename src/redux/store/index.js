import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import currentlySelectedReducer from '../reducers/currentlySelectedReducer'
import likesReducer from '../reducers/likesReducer'
import songsReducer from '../reducers/songsReducer'

const composeSafely = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    likes: {
        songs: []
    },
    songs: {
        data: []
    },
    currentlySelected: {
        artist: {},
        album: {},
        song: {}
    }
}

const rootReducer = combineReducers({
    likes: likesReducer,
    songs: songsReducer,
    currentlySelected: currentlySelectedReducer
})

const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))

export default storeConfig