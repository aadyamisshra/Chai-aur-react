import { useState } from 'react'

import './App.css'

function App() {
  let[counter,setCounter] = useState(0)
  // let counter=5
  const addValue=()=> {
    console.log("clicked",counter)
    if(counter<20){
    counter=counter+1
    }
    setCounter(counter)
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }

  }
  return (
    <>
      <h1>Chai aur Reat</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
