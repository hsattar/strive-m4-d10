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
                artists: [...state.artists, action.payload]
            }
        case ACTIONS.ADD_ALBUM_TO_LIKES:
            return {
                ...state,
                albums: [...state.albums, action.payload]
            }




        case ACTIONS.REMOVE_SONG_FROM_LIKES:
            return {
                ...state,
                songs: state.songs.filter(song => song.id  !== action.payload.id)
            }

        case ACTIONS.REMOVE_ARTIST_FROM_LIKES:
            return {
                ...state,
                artists: state.artists.filter((fav, i) => i !== action.payload)
            }

        case ACTIONS.REMOVE_ALBUM_FROM_LIKES:
            return {
                ...state,
                album: state.albums.filter((fav, i) => i !== action.payload)
            }
        default:
            return state
    }
}

export default likesReducer