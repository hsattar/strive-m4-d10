import { initialState } from '../store'

const currentlySelectedReducer = (state = initialState.currentlySelected, action) => {
    switch (action.type) {
        default: return state
    }
}

export default currentlySelectedReducer