import { initialState } from '../store'
import { ACTIONS } from '../actions'

const likesReducer = (state = initialState.likes, action) => {
    switch (action.type) {
        case ACTIONS.ADD_SONG_TO_LIKES:
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
        case ACTIONS.ADD_ARTIST_TO_LIKES:
            return {
                ...state,
                artist: [...state.artists, action.payload]
            }
        case ACTIONS.ADD_ALBUM_TO_LIKES:
            return {
                ...state,
                album: [...state.albums, action.payload]
            }




        default:
            return state
    }
}

export default likesReducer