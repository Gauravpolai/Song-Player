import React from "react";

export default function LibrarySong({song}){
    return(
        <div className="library-song">
            {/* <h1>sedfs</h1>  */}
            <img src={song.cover } alt="COVER" />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    );
}