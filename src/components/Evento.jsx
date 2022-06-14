import React,{Fragment, useState} from 'react'

export const Evento = () => {
  const [texton, setTexton] = useState('Texto desde estado viejon')
  const eventClick = () =>{
    console.log("Me tocaste ogt");
    setTexton('A poco si pa?')
   
  }
  return (
    <Fragment>
      <hr/>
      <h2>{texton}</h2>
      <button  onClick={()=> eventClick()} >Puchale</button>
    </Fragment
    >
  )
}
