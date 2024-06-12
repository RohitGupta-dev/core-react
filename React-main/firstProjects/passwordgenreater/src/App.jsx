import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charAllowd, setcharAllowd] = useState(false)
  const [Password, setpassword] = useState("")

  const passwordRef=useRef(null);

  const copyPasswordToClipBoard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length+1);
    window.navigator.clipboard.writeText(Password);
  },
  [Password]
  )

  const PasswordGenrater = useCallback(() => {  
    let pass = "";
    let str = "ABCDEFGHJKLMNOPQWRSTXYZabcdcefghijklmnopqwrstuvwxyz";
    if (numberallowed)
      str += "1234567890";
    if (charAllowd)
      str += "!@#$%^&*()_+{}[]"
    for (let i = 0; i <=length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, charAllowd, setpassword]);

  useEffect(()=>{PasswordGenrater()},[length,numberallowed,charAllowd,setpassword])

  return (
    <>
    <h1>{Password}</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-oranage-500 bg-gray-700'>
        <div className='text-oranage-500 text-center'>PassWord Genrater
          <div className='flex  shadow rounded-lg overflow-hidden mb-4'>
            <input type='text'
              value={Password}
              className='outline-none w-full  py-1 px-3'
              placeholder='Password'
              ref={passwordRef}
              readOnly
            >
            </input>
            <button 
            onClick={copyPasswordToClipBoard}
            className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
          </div>
          <div className='flex text-sm grap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}         
              value={length}
              className='cursor-pointer'     
              onChange={(e)=>{setlength(e.target.value)}}
              >
              </input>
              <label>Length: {length}</label>

            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              checked={numberallowed}
              onChange={e => setnumberallowed(e.target.checked)}
              id='numberInput'
              className='cursor-pointer'     
              >
              </input>
              <label htmlFor='numberInput'>Characters: {numberallowed}</label>

            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              checked={charAllowd}
              id='charAllowd'
              className='cursor-pointer'     
              onChange={(e)=>{setcharAllowd(e.target.checked)}}
              >
              </input>
              <label htmlFor='charAllowd'>Characters: {charAllowd}</label>

            </div>


          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
