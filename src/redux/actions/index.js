export const ACTIONS = {
    ADD_SONG_TO_LIKES: 'ADD_SONG_TO_LIKES',
    ADD_ALBUM_TO_LIKES: 'ADD_ALBUM_TO_LIKES',
    REMOVE_SONG_FROM_LIKES: 'REMOVE_SONG_FROM_LIKES',
    ADD_ARTIST_TO_LIKES: 'ADD_ARTIST_TO_LIKES',
    ADD_CURRENTLY_SELECTED_SONG: 'ADD_CURRENTLY_SELECTED_SONG',
    ADD_CURRENTLY_SELECTED_ALBUM: 'ADD_CURRENTLY_SELECTED_ALBUM',
    ADD_CURRENTLY_SELECTED_ARTIIST: 'ADD_CURRENTLY_SELECTED_ARTIIST',
    GET_ALL_SONGS: 'GET_ALL_SONGS',
    ADD_SONGS_TO_PLAY: 'ADD_SONGS_TO_PLAY' 

}

export const addSongToLikeSAction = (songs) => ({
    type: ACTIONS.ADD_SONG_TO_LIKES,
    payload: songs,
})

export const addArtistToLikeSAction = (artist) => ({
    type: ACTIONS.ADD_ARTIST_TO_LIKES,
    payload: artist,
})

export const addAlbumToLikeSAction = (album) => ({
    type: ACTIONS.ADD_ALBUM_TO_LIKES,
    payload: album,
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

export const addSongsToPlayAction = songs => ({
    type: ACTIONS.ADD_SONGS_TO_PLAY,
    payload: songs
})

export const removeFromSongList =(song_index)=> {
    return (dispatch)=> {
        dispatch({
            type: ACTIONS.REMOVE_SONG_FROM_LIKES,
            payload: song_index

        })
    }
}

export const getAllSongs =(inputValue)=> {
    return async(dispatch)=> {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${inputValue}`);
            if (response.ok) {
                console.log("Response:", response);
              let songs = await response.json();
              console.log("JobsL:", songs);
              dispatch({
                  type: ACTIONS.GET_ALL_SONGS,
                  payload:songs
              })
            }else{
             console.log("error has ocuured");
            }
          } catch (error) {
            console.log(error);
          }
        };
    }
