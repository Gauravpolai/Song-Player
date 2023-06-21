import React from "react"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"
// import { playaudio } from "../util1";

export default function Player({currentsong, isplaying,timehandler,setsonginfo,songinfo, setisplaying,audioref, setcurrentsong,songs}){

    //state
    const playsong = () =>{
        if(isplaying){
            audioref.current.pause();
            setisplaying(!isplaying);
        }
        else
        {
            audioref.current.play();
            setisplaying(!isplaying);
        }
    }

    //useeffect
    
    

    const draghandler =(e) =>{
        //  console.log(e.target.value)
        audioref.current.currentTime=e.target.value;
        setsonginfo({...songinfo,currentTime: e.target.value});
    }

    const gettime= (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0"+ Math.floor(time%60)).slice(-2)
        )
    };

    const skiptrack=async (direction)=>{
        let currentindex=songs.findIndex((song)=> song.id===currentsong.id);
        // console.log(currentindex)
        if(currentindex===0 && direction==="skip-back"){
            // console.log('iwashere')
            console.log(songs.length)
            await setcurrentsong(songs[songs.length-1])
        }
        else if(currentindex===25 && direction==="skip-forward"){
            await setcurrentsong(songs[0])
        }else
        if(direction==="skip-forward"){
            await setcurrentsong(songs[currentindex+1])
        }else{
            await setcurrentsong(songs[currentindex-1])
        }

        if(isplaying)audioref.current.play();
       
    };

 

    return(
        <div className="player">
            <div className="time-control">
                <p>{gettime(songinfo.currentTime)}</p>

                <div  className="track">
                    <input 
                        type="range" 
                        min={0}
                        max={songinfo.duration || 0} 
                        value={songinfo.currentTime}
                        onChange={draghandler}
                        style={{background: `linear-gradient(to-right, ${currentsong.color[0]},${currentsong.color[1]})`}}
                    />
                </div>

                <p>{songinfo.duration ? gettime(songinfo.duration): '0:00'}</p>
            </div>
            
            <div className="play-control">

                <FontAwesomeIcon 
                className="skip-back" 
                size="2x" 
                icon={faAngleLeft}
                onClick={()=>skiptrack('skip-back')}
                />

                <FontAwesomeIcon 
                className="play" 
                size="2x" 
                icon={isplaying ? faPause : faPlay} 
                onClick={playsong}
                />

                <FontAwesomeIcon 
                className="skip-forward" 
                size="2x" 
                icon={faAngleRight} 
                onClick={()=>skiptrack('skip-forward')}
                />
            </div>

        </div>
    );
};