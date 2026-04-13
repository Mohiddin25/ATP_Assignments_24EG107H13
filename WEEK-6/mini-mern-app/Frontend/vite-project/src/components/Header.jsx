import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end gap-4 p-4'>
        <NavLink to="/" className={({isActive})=>(isActive?"text-orange-400":"")}>Home</NavLink>
        <NavLink to="/create-emp" className={({isActive})=>(isActive?"text-orange-400":"")}>CreateEmp</NavLink>
        <NavLink to="/list" className={({isActive})=>(isActive?"text-orange-400":"")}>Employees</NavLink>
    </nav>
  )
}

export default Header