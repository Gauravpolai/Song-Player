import React from "react";


export default function Song({currentsong}){
    return(
        <div className="song-container"> 
            <img src={currentsong.cover } alt="COVER" />
            <h1>{currentsong.name}</h1>
            <h4>{currentsong.artist}</h4>
        </div>
    );
}
