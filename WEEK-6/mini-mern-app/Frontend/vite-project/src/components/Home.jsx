import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  const {counter,changeCounter} =useContext(counterContextObj)
  let newCounter =useCounterStore((state)=>state.newCounter)
  let incrementCounter =useCounterStore((state)=>state.incrementCounter)
  console.log("Home")
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-yellow-200 p-4'>change</button>
      <h1>New Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-yellow-200 p-4'>Increment new counter</button>
      <Test/>
      
    </div>
  )
}

export default Home