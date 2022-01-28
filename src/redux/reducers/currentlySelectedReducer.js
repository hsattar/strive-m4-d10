import { initialState } from '../store'
import { ACTIONS } from '../actions'

const currentlySelectedReducer = (state = initialState.currentlySelected, action) => {
    switch (action.type) {
        case ACTIONS.ADD_CURRENTLY_SELECTED_SONG: return {
            ...state,
            song: action.payload
        }
        default: return state
    }
}

export default currentlySelectedReducer