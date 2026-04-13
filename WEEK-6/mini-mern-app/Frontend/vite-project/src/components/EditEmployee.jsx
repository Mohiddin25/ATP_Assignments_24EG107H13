import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useLocation ,useNavigate} from "react-router"
import axios from 'axios'

function EditEmployee() {
  const {register,handleSubmit,formState:{errors},setValue} =useForm()
  const {state}=useLocation()
  const navigate=useNavigate()
  
  useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)
  },[])

  const saveModifiedEmp=async(modifiedEmp)=>{
      // make HTTP PUT req
      const res=await axios.put(`http://localhost:3000/employee-api/employee/${state._id}`,modifiedEmp)
      if(res.status===200){
        navigate("/list")
      }
  }
  return (
    <div>
            <h1 className='text-3xl text-center'>Edit Employee</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
                <div>
                    <input type="text" {...register("name")} id="" className='border mb-3 p-3 w-full rounded-2xl' placeholder='Name' />
                </div>
                <div>
                    <input type="text" {...register("email")} id="" className='border mb-3 p-3 w-full rounded-2xl' placeholder='Email' />

                </div>
                <div>
                    <input type="number" {...register("mobile")} id="" className='border mb-3 p-3 w-full rounded-2xl' placeholder='Mobile NO' />

                </div>
                <div>
                    <input type="text" {...register("designation")} id="" className='border mb-3 p-3 w-full rounded-2xl' placeholder='Designation' />

                </div>
                <div>
                    <input type="text" {...register("companyName")} id="" className='border mb-3 p-3 w-full rounded-2xl' placeholder='Company Name' />

                </div>
                <button className="p-3 bg-green-800 block m-auto" type="submit">Save</button>
            </form>
        </div>
  )
}

export default EditEmployee