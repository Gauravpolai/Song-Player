import React, {useState} from 'react';
import Player from './components/Player';
import Library from './components/Library';
import "./styles/app.scss";
import Song from './components/Song';
import data from './util'

function App() {

  let num=0;

  //state
  const [songs, setsongs] = useState(data());       //returns the whole bunch of array of obejcts of songs.
  const [currentsong,setcurrentsong] = useState(songs[num]); //array return hua data wala which is stored in songs, songs[0] gives first object/
  const [isplaying, setisplaying] = useState(false);

  return (
    <div className="app">
      <h1>Music Player</h1>

      <Song currentsong={currentsong}/> 
      
        
      <Player 
      currentsong={currentsong}
      isplaying={isplaying}
      setisplaying={setisplaying}
      numb={num}
      />
      {/* now we pass currentsong to player so that it can be controlled using the play buttons */}
      <Library songs={songs}/>
    </div>
  );
}

export default App;
