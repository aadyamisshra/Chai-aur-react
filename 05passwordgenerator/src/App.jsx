import { useState,useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setNumberALLowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

const passwordRef= useRef("Aadya@27092003")

const handleMouseOver = (event) => {
    event.target.style.backgroundColor = '#1d72b8';
    event.target.style.color = '#f0e130';
    event.target.style.transform = 'scale(1.1)';
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'purple';
    event.target.style.transform = 'scale(1)';
  };

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="<>@#$%^&*(){}!"


    for(let i=1;i<length;i++){
      let  char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)


    }

    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


 

  return (
    <>
    {/* <h1 className="text-4xl text-center text-white">PASSWORD GENERATOR</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-pink-600 bg-yellow-300 font-bold'>Password Generator
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-pink-600 bg-yellow-300'>
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      ref={passwordRef}
      readOnly/>
      <button
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      onClick={copyPasswordToClipboard}
      className='outline-none bg-red-300 text-purple-900
      px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberALLowed((prev)=>!prev);
            }}
            /><label>Number</label>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}>

            </input>
            <label>Special Character</label>
            
            
            
            
            </div> 
      </div>

      </div> 
    </>
  )
}

export default App
