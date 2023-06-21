import React from "react";
import LibrarySong from "./LibrarySong";

export default function Library({songs, setcurrentsong, id, key,audioref,isplaying,setsongs, librarystatus}){
    return(
        <div className={`library ${librarystatus ? 'active-library': ''}`}>
            <h1>Library</h1>
            
            <div className="library-songs">
                {songs.map((song) => (
                <LibrarySong 
                song={song} 
                setcurrentsong={setcurrentsong} 
                id={song.id}
                songs={songs}
                key={song.id}
                audioref={audioref}
                isplaying={isplaying}
                setsongs={setsongs}
                />
                ))}
            {/* <LibrarySong /> */}
            </div>
        </div>
    )
}