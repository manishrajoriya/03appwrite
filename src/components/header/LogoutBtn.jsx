import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

function LogoutBtn() {
const navigate = useNavigate()
const dispatch = useDispatch()

const handleLogout = () => {
    authService.logout().then(()=> dispatch(logout()))
    
    
}



    
  return (
    <div>
        <button
        onClick={handleLogout}
         className='px-6 py-2 duration-200 rounded-full inline-bock hover:bg-blue-100' 
        >
            
            Logout
        </button>

    </div>
  )
}

export default LogoutBtn