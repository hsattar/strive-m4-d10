import { initialState } from '../store'

const songsReducer = (state = initialState.songs, action) => {
    switch (action.type) {
        default: return state
    }
}

export default songsReducer