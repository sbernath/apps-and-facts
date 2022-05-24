import React, { useState,useEffect } from 'react';
import ScoreVO from '../main/ScoreVO'
function Home() {
  // Cleanup isn't working right on this.  It shouldn't really matter when running live,
  // but the live reload stuff is causing duplicate listeners.
useEffect(() => {
  this.electron.ipcRenderer.on("score-update",function(e){console.log('home',e)})
}, [])

  const [red,setRed] = useState(0);
  const [blue,setBlue] = useState(0);
  const [green,setGreen] = useState(0);
  const [yellow,setYellow] = useState(0);

  return (
    <div>
        Home

        <button onClick={boopClick}> Boop </button>
    </div>
  )
  
  function boopClick(){
    this.electron.ipcRenderer.sendMessage("score-update",new ScoreVO(Math.round(Math.random()*20),green,blue,yellow))
  }
  
}
export default Home;
