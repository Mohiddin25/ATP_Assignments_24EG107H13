import {createContext,useState} from 'react'

export const counterContextObj=createContext()
function ContextProvider({children}) {
    // state 
    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(0)

    // function to change state
    const changeCounter=()=>{
      setCounter(counter+1)
    }
    const changeCounter1=()=>{
      setCounter1(counter1+1)
    }
    // const incrementCounter=()=>{
    //         setCounter(counter+1)
    //     }
    // const decrementCounter=()=>{
    //     setCounter(counter-1)
    // }
      return (
        <counterContextObj.Provider value={{counter,counter1,changeCounter,changeCounter1}}>
        {children}
        </counterContextObj.Provider>
      )
}

export default ContextProvider