import { initialState } from '../store'

const likesReducer = (state = initialState.likes, action) => {
    switch (action.type) {
        default: return state
    }
}

export default likesReducer