import React from "react";
import LibrarySong from "./LibrarySong";

export default function Library({songs}){
    return(
        <div>
            <h1>Library</h1>
            
            <div className="library-songs">
                {songs.map((song) => (
                    console.log("here"),
                <LibrarySong song={song}/>
                ))}
            {/* <LibrarySong /> */}
            </div>
        </div>
    )
}