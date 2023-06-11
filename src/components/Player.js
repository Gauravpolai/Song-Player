import React, { useRef, useState } from "react"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"


export default function Player({currentsong, isplaying, setisplaying,numb}){

    //state
    const [songinfo, setsonginfo]= useState({
        currentTime: 0,
        duration: 0,
    });
    //ref
    const audioref=useRef(null);

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
    
    const playright= () =>{
        numb++;
        audioref.current.play();
    }

    const timehandler=(e) =>{

        const current=e.target.currentTime;
        const eduration=e.target.duration;
        setsonginfo({...songinfo, currentTime :current, duration: eduration})

    }

    const draghandler =(e) =>{
        //  console.log(e.target.value)
        audioref.current.currentTime=e.target.value;
        setsonginfo({...songinfo,currentTime: e.target.value});
    }

    const gettime= (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0"+ Math.floor(time%60)).slice(-2)
        )
    }
    return(
        <div className="player">
                <audio 
                src={currentsong.audio} 
                ref={audioref} 
                onTimeUpdate={timehandler}
                onLoadedMetadata={timehandler}
                ></audio>

            <div className="time-control">
                <p>{gettime(songinfo.currentTime)}</p>
                <input 
                    type="range" 
                    min={0}
                    max={songinfo.duration} 
                    value={songinfo.currentTime}
                    onChange={draghandler}
                />
                <p>{gettime(songinfo.duration)}</p>
            </div>
            
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>

                <FontAwesomeIcon 
                className="play" 
                size="2x" 
                icon={isplaying ? faPause : faPlay} 
                onClick={playsong}/>
                
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} onClick={playright}/>
            </div>

        </div>
    );
};