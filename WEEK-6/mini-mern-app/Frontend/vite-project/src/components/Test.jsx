import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Test() {
  const {counter1,changeCounter1} =useContext(counterContextObj)
  let newCounter1 =useCounterStore((state)=>state.newCounter1)
    let incrementCounter1 =useCounterStore((state)=>state.incrementCounter1)
    console.log("Test")
    return (
      <div>
        {/* <h1>Counter1:{counter1}</h1>
        <button onClick={changeCounter1} className='bg-yellow-200 p-4'>change</button> */}
        
        <h1>New Counter1:{newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-yellow-200 p-4'>Increment new counter</button>
      </div>
    )
}

export default Test