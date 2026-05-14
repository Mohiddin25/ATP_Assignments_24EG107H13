import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import axiosInstance from '../api/axiosInstance'

function ListOfEmp() {
    const [emps, setEmps] = useState([]);
    const navigate=useNavigate()

    const gotoEmployee=(empObj)=>{
      navigate("/emp",{state:empObj})
    }
    
    const gotoEditEmployee=(empObj)=>{
      navigate("/emp-edit",{state:empObj})
    }
    const deleteEmpById=async(id)=>{
      let res=await axiosInstance.delete(`/employee-api/employee/${id}`)
      if(res.status===200){
        getEmps();
      }
    }
    async function getEmps() {
      let res = await axiosInstance.get("/employee-api/employee");
      if (res.status === 200) {
        setEmps(res.data.payload);
      }
    }
  useEffect(() => {
      getEmps();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className=" mt-3 p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className="shadow-2xl shadow-gray-300 bg-white p-5 text-center text-1xl">
            <p>{empObj.email}</p>
            <p className='mb-3'>{empObj.name}</p>
            {/* 3 buttons */}
            <div className='flex justify-around'>
              <button onClick={()=>gotoEmployee(empObj)} className='bg-green-500 p-2 rounded-2xl text-white'>View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className='bg-yellow-500 p-2 rounded-2xl text-white'>Edit</button>
              <button onClick={()=>deleteEmpById(empObj._id)} className='bg-red-500 p-2 rounded-2xl text-white'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListOfEmp