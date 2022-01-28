export const ACTIONS = {
    ADD_SONG_TO_LIKES: 'ADD_TO_LIKES',
    REMOVE_SONG_FROM_LIKES: 'REMOVE_SONG_FROM_LIKES',
    GET_FETCHED_SONGS: 'GET_FETCHED_SONGS',
    GET_FETCH_ERROR: 'GET_FETCH_ERROR'
}




export const fetchData =(queryType, query)=> {
    return async(dispatch)=> {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
            if (response.ok) {
                const data = await response.json()
                console.log("Data:", data);
                dispatch({
                    type:ACTIONS.GET_FETCHED_SONGS,
                    payload:data
                })
            } else {
                dispatch({
                    type:ACTIONS.GET_FETCH_ERROR,
                    payload: response.status
                })
            }
        } catch (error) {
            console.error(error)
        }
    }
}







