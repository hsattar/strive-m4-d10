import { initialState } from '../store'
import { ACTIONS } from '../actions'

const songsReducer = (state = initialState.songs, action) => {
    switch (action.type) {
        case ACTIONS.GET_SEARCHED_SONGS:
            return{
                ...state,
                searchedSongs: action.payload
            }
        default: return state
    }
}

export default songsReducer