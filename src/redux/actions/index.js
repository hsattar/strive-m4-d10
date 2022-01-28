export const ACTIONS = {
    ADD_SONG_TO_LIKES: 'ADD_TO_LIKES',
    REMOVE_SONG_FROM_LIKES: 'REMOVE_SONG_FROM_LIKES'
}



export const addSongToLikeSAction = (songs) => ({
    type: ACTIONS.ADD_SONG_TO_LIKES,
    payload: songs,
})




// export const addToCartActionWithThunk = (book) => {
//     return async(dispatch, getState) => {

//         console.log("here's my state currently", getState())

//         if (getState()) {

//             setTimeout(() => {
//                 dispatch({
//                     type: ADD_SONG_TO_LIKES,
//                     payload: song,
//                 })
//             }, 500)
//         } else {

//             dispatch({
//                 type: ADD_SONG_TO_LIKES_ERROR,
//             })
//         }
//     }
// }