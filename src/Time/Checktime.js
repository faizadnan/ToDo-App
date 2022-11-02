


import React from 'react'
import { useState, useEffect } from 'react'

const style = {
    color: "red",
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold"
}

export default function Checktime() {

    const [time, settime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
     
        const time = setInterval(() => {

            settime(new Date().toLocaleTimeString())
            
        }, 1000);
    
    //   return () => {
    //     clearInterval(time);
    //   }
    })
    

  return (
    <div style={style}> Time is: {time}</div>
  )
}
