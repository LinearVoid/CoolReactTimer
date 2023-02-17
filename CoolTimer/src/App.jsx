import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
function App() {
  const [active,setActive] = React.useState(false)
  const [miliseconds,setmiliSeconds] = React.useState(0)
  const [seconds,setSeconds] = React.useState(0)
  const [tenseconds,settenSeconds] = React.useState(0)
  const [minutes,setMinutes] = React.useState(0)
  const [hours,setHours] = React.useState(0)
  const [style, setStyle] = React.useState()
  let mili = String(miliseconds).padStart(3,'0')
  console.log(mili)


  const divStyle = {
    color: 'white',
  };

  function setCool(){
    setStyle(divStyle)

  }

  function setUncool(){
    setStyle()

  }

  
  function time(){
    setActive(true)
    console.log(active)
    }
  
  if(active){
   
    setTimeout(()=>{
        setmiliSeconds(miliseconds+1)
        if(miliseconds>998){
          setmiliSeconds(0)
          setSeconds(seconds+1)
          if(seconds>=9){
            setSeconds(0)
            settenSeconds(tenseconds+1)
            if(tenseconds>=5){
              setSeconds(0)
              settenSeconds(0)
              setMinutes(minutes+1)
              if(minutes>=50){
                setSeconds(0)
                settenSeconds(0)
                setMinutes(0)
                setHours(hours+1)
              }
            }
            
          }
          
        }
        
    },1)

  }
  function stop(){
    setActive(false)
    console.log(active)
  }

  function reset(){
    setActive(false)
    setmiliSeconds(0)
    setSeconds(0)
    settenSeconds(0)
    setMinutes(0)

  }

  return (
    <div className="App">
      <div className='navy'>
        <div className = "button" onClick={setCool}>White Theme</div>
        <div className = "button" onClick={setUncool}>Neo Theme</div>
      </div>
      <h1 style = {style} className='timer'>{minutes+":"+tenseconds+seconds+":"+mili}</h1>
      <div className='buttons'>
        <div className='button' onClick={reset}>Reset</div>
        <div className='button' onClick={stop}>Stop</div>
        <div className='button' onClick={time}>Start</div>
      </div>
      
    </div>
  )
}

export default App
