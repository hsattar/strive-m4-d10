const SongRow = ({ song }) => {
    return (
        <div class="row song-info my-2">

            <div class="col-11">
                <p class="my-0 font-weight-bold">{song.title}</p>
                <p class="mt-0 mb-2 smaller-text light-gray-text">{song.artist.name}</p>
            </div>

            <div class="col-1 light-gray-text">
                <p>{song.duration}</p>
            </div>
        
        </div>
    )
}

export default SongRow