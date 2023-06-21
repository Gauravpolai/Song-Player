import React from "react";
import { playaudio } from "../util1";
export default function LibrarySong({song, setcurrentsong, songs,id, audioref,isplaying,setsongs}){

    const songselect=async ()=>{
        // console.log("jere");
        // const selectedsong= songs.filter((state)=> state.id===id);
        await setcurrentsong(song);
        // audioref.current.play();
        if(isplaying){
            const playpromise= audioref.current.play();

            if(playpromise!==undefined){
                playpromise.then((audio)=>{
                    audioref.current.play();
                })
            }
        }  
    }

    
    // // Add active state
    // const newsongs = songs.map((song)=>{
    //     if(song.id===id){
    //         return{
    //             ...song,
    //             active:true,
    //         };
    //     }
    //     else{
    //             return{
    //                 ...song,
    //                 active: false,
    //             };
    //         }
        
    //     });

    //     setsongs(newsongs)
        
        
    return(
        <div className={`library-song ${song.active ? 'selected' : ""}`} onClick={songselect}  >
            {/* <h1>sedfs</h1>  */}
            <img src={song.cover } alt="COVER" />
            <div>
            <h2>{song.name}</h2>
            <h5>{song.artist}</h5>
            </div>
        </div>
    );
}
