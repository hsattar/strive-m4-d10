import { initialState } from '../store'
import { ACTIONS } from '../actions'

const currentlySelectedReducer = (state = initialState.currentlySelected, action) => {
    switch (action.type) {
        case ACTIONS.ADD_CURRENTLY_SELECTED_SONG: return {
            ...state,
            song: action.payload
        }
        case ACTIONS.ADD_CURRENTLY_SELECTED_ALBUM: return {
            ...state,
            album: action.payload
        }
        case ACTIONS.ADD_CURRENTLY_SELECTED_ARTIIST: return {
            ...state,
            artist: action.payload
        }
        default: return state
    }
}

export default currentlySelectedReducer