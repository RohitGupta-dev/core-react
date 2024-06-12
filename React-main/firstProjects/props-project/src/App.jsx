import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)
  let obj={
    Fistname:"Rohit",
    lastName:"Gupta",
    Age:23,
    Intro:"here I am Rohit Gupta. I'm a .Net Developer "

  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>rohit here</h1>
     
<Card UserCreatedBY="Rohit" PersonalData={obj} />
    </>
  )
}

export default App
