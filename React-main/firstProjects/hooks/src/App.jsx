import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let heightValue=20;
let [CurrCounter,SetCounter]=useState(6)
const AddValue=()=>{
  if(CurrCounter>=heightValue){
    console.error("value must less then 20")
  }else{
    console.log("Add value",CurrCounter)
 // in this senrio Not Work can add or remove multiple
    // SetCounter(CurrCounter+1);
    // SetCounter(CurrCounter+1);
    // SetCounter(CurrCounter+1);
    // SetCounter(CurrCounter+1);
 // in this senrio Not Work can add or remove multiple


        // in this senrio you can add or remove multiple

    SetCounter((pre)=>pre+1);
    SetCounter((pre)=>pre+1);
    SetCounter((pre)=>pre+1);
    SetCounter((pre)=>pre+1);
    SetCounter((pre)=>pre+1);
        // in this senrio you can add or remove multiple
 // as well you can do that
    // CurrCounter=CurrCounter+1;
    // SetCounter(CurrCounter);
     // as well you can do that
    console.log("Add value",CurrCounter)
  }

}
const RemoveValue=()=>{
  if(CurrCounter<=0){
    console.error("CurrCounter cant goes to negative values")
  }else{
    console.log("Remove value",CurrCounter)
    // in this senrio you can add or remove multiple
    SetCounter((pre)=>pre-1);
    SetCounter((pre)=>pre-1);
    SetCounter((pre)=>pre-1);
    SetCounter((pre)=>pre-1);
    // in this senrio you can add or remove multiple

        // in this senrio Not Work can add or remove multiple

    // SetCounter(CurrCounter-1);
    // SetCounter(CurrCounter-1);
    // SetCounter(CurrCounter-1);
    // SetCounter(CurrCounter-1);

        // in this senrio Not Work can add or remove multiple

        // as well you can do that

    // CurrCounter=CurrCounter-1;
    // SetCounter(CurrCounter);
        // as well you can do that

    console.log("Remove value",CurrCounter)
  }

}
  return (
    <>
      <h1>rohit  {CurrCounter}</h1>
      <h1>count value {CurrCounter}</h1>
      <button onClick={AddValue}>Add Button</button>
      <br></br>
      <button onClick={RemoveValue}>Remove Button</button>
    </>
  )
}

export default App
