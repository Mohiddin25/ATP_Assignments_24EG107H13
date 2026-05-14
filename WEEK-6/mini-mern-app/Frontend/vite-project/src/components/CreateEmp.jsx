import { useForm } from "react-hook-form"
import { useState } from 'react'
import { useNavigate } from "react-router"
import axiosInstance from '../api/axiosInstance'


function CreateEmp() {
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
    const navigate = useNavigate();

    const { register, // to register form fields
        handleSubmit, // to handle form submission
        formState: { errors } } = useForm()
    const onFormSubmit = async (newEmpObj) => {
        console.log(newEmpObj)
        // make http post req
        setLoading(true)
        try {
            let res = await axiosInstance.post("/employee-api/employee", newEmpObj)
            if (res.status === 201) {
                //navigate to employees component programatically
                navigate("/list");
            } else {
                throw new Error(res.data.error);
            }
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
        
        if (loading) {
            return <p className="text-center text-5xl">Loading...</p>
        }
        if (error) {
            return <p className="text-red-500 text-center text-3xl">{error}</p>;
        }
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Create New Employee</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)} >
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
                <button className="p-3 bg-blue-200 block m-auto" type="submit">Add User</button>
            </form>
        </div>
    )
}

export default CreateEmp