import React, {useState, useRef} from 'react';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
import "./styles/app.scss";
import Song from './components/Song';
import data from './util'

function App() {
    //ref
    const audioref=useRef(null);
    
    const [songinfo, setsonginfo]= useState({
        currentTime: 0,
        duration: 0,
        
    });

    const timehandler=(e) =>{
        // console.log(e)
        const current=e.target.currentTime;
        // console.log(current)
        const eduration=e.target.duration;
       
        setsonginfo({...songinfo, currentTime :current, duration: eduration,})
    }


    //state
    const [songs, setsongs] = useState(data());//returns the whole bunch of array of obejcts of songs.
    const [currentsong,setcurrentsong] = useState(songs[0]); //array return hua data wala which is stored in songs, songs[0] gives first object/
    const [isplaying, setisplaying] = useState(false);

    const [librarystatus, setlibrarystatus]= useState(false);

  return (
    <div className="app">
      {/* <h1>Music Player</h1> */}
      <Nav
      librarystatus={librarystatus}
      setlibrarystatus={setlibrarystatus}
      />
      <Song 
      currentsong={currentsong}
      
      /> 
      
        
      <Player 
      songs={songs}
      currentsong={currentsong}
      setcurrentsong={setcurrentsong} 
      isplaying={isplaying}
      setisplaying={setisplaying}
      audioref={audioref}
      timehandler={timehandler}
      songinfo={songinfo}
      setsonginfo={setsonginfo}
      />
      {/* now we pass currentsong to player so that it can be controlled using the play buttons */}

      <Library 
      audioref={audioref}
      songs={songs} 
      setcurrentsong={setcurrentsong} 
      
      isplaying={isplaying}
      setsongs={setsongs}
      librarystatus={librarystatus}
      setlibrarystatus={setlibrarystatus}
      />

      <audio controls
        src={currentsong.audio} 
        ref={audioref} 
        onTimeUpdate={timehandler}
        onLoadedMetadata={timehandler}
      ></audio>

    </div>
  );
}

export default App;
