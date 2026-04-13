import {createContext,useState} from 'react'

export const counterContextObj=createContext()
function ContextProvider2({children}) {
    // state 
    const [counter,setCounter]=useState(0)
    // function to change state
    const incrementCounter=()=>{
        setCounter(counter+1)
    }
    const decrementCounter=()=>{
        setCounter(counter-1)
    }
  return (
    <counterContextObj.Provider value={{counter,incrementCounter,decrementCounter}}>
    {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider2