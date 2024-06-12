

import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    username:"Aadya",
    age:20


  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click-me"></Card>
      <Card username="aadya" ></Card>
      

    </>
  )
}

export default App
