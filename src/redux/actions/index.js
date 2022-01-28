export const ACTIONS = {
    ADD_SONG_TO_LIKES: 'ADD_TO_LIKES',
    REMOVE_SONG_FROM_LIKES: 'REMOVE_SONG_FROM_LIKES',
    ADD_CURRENTLY_SELECTED_SONG: 'ADD_CURRENTLY_SELECTED_SONG',
    ADD_CURRENTLY_SELECTED_ALBUM: 'ADD_CURRENTLY_SELECTED_ALBUM',
    ADD_CURRENTLY_SELECTED_ARTIIST: 'ADD_CURRENTLY_SELECTED_ARTIIST'

}

export const addSongToLikeSAction = (songs) => ({
    type: ACTIONS.ADD_SONG_TO_LIKES,
    payload: songs,
})

export const addCurrentlySelectedSongAction = song => ({
    type: ACTIONS.ADD_CURRENTLY_SELECTED_SONG,
    payload: song
})

export const addCurrentlySelectedAlbumAction = album => ({
    type: ACTIONS.ADD_CURRENTLY_SELECTED_ALBUM,
    payload: album
})

export const addCurrentlySelectedArtistAction = artist => ({
    type: ACTIONS.ADD_CURRENTLY_SELECTED_ARTIIST,
    payload: artist
})


export const removeFromSongList =(song_index)=> {
    return (dispatch)=> {
        dispatch({
            type: ACTIONS.REMOVE_SONG_FROM_LIKES,
            payload: song_index

        })
    }
}
