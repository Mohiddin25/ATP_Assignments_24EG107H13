import { useContext } from "react"
import {counterContextObj} from '../contexts/ContextProvider'

function EditCounter3() {
    const {counter,incrementCounter,decrementCounter} =useContext(counterContextObj)
  return (
    <div className="text-center p-3">
        <h1 className="mb-4">EditCounter3</h1>
        <div className="bg-orange-100 p-6">
            <p>{counter}</p>
            <ul className="flex justify-around">
                <li className="bg-amber-300 p-3 text-2xl"><button onClick={incrementCounter}>+</button></li>
                <li className="bg-red-300 p-3 text-2xl"><button onClick={decrementCounter}>-</button></li>
            </ul>
        </div>
    </div>
  )
}

export default EditCounter3