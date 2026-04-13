import { useLocation } from "react-router"

function Employee() {
    const {state} = useLocation()
  return (
    <div className="text-center p-16">
        <p>{state.name}</p>
        <p>{state.email}</p>
        <p>{state.mobile}</p>
        <p>{state.designation}</p>
        <p>{state.companyName}</p>
    </div>
  )
}

export default Employee