import React, { useEffect, useState } from 'react'

function Counter(props) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        var score = localStorage.getItem("score-"+props.color);
        if(!score){
            score = 0;
        }else{
            score = parseInt(score);
        }   
        setCount(score);
    },[props.color]);

    const styleObj = {
        width:"300px",
        height:"620px",
        // background:"red",
        textAlign:"center"
    }

    const scoreDisplay = {
        color:"white",
        fontSize:"8em",
        textAlign: "center",
        margin:"50px auto 200px auto"
    }

    const countButton = {
        height:"85px",
        width:"200px",
        margin:"1em auto"
    }

    const updateCount = function(val){
        localStorage.setItem("score-"+props.color,val);
        setCount(val);
    }
  return (
    <div style={styleObj} name={props.color}>
        <h1 style={scoreDisplay}>{count}</h1>
        <button style={countButton} onClick={()=>{updateCount(count+props.interval)}}>Up</button>
        <button style={countButton} onClick={()=>{updateCount(count-props.interval)}}>Down</button>
    </div>
  )
}

export default Counter