import React, { useEffect, useState } from 'react'

function ScoreDisplay() {
  
  
  const [red,setRed] = useState(0);
  const [blue,setBlue] = useState(0);
  const [green,setGreen] = useState(0);
  const [yellow,setYellow] = useState(0);

  useEffect(()=>{
    this.electron.ipcRenderer.on("score-update",updateScores);
  },[])

  updateScores = (e)=>{
    console.log(e)
    setRed(e.red);
    setBlue(e.blue);
    setGreen(e.green);
    setYellow(e.yellow);
  }


  return (
    <div>
      <h1>
        Score Display
      </h1>
      <p>Red Team: {red}</p>
      <p>Blue Team: {blue}</p>
      <p>Green Team: {green}</p>
      <p>Yellow Team: {yellow}</p>
    </div>
  )
}

export default ScoreDisplay