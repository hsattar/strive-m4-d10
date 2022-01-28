import { initialState } from '../store'
import {ACTIONS} from '../actions'

const songsReducer = (state = initialState.songs, action) => {
    switch (action.type) {
        case ACTIONS.GET_FETCHED_SONGS:
            return{
                ...state,
                data: [...state.songs.data, action.payload]
            }
        case ACTIONS.GET_FETCH_ERROR:
            return{
                ...state,
                isError: action.payload
            }

        default: return state
    }
}

export default songsReducer