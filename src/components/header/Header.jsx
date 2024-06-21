import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import LogoutBtn from './LogoutBtn'



function Header() {
const authStatus = useSelector(state => state.auth.status)
const navigate = useNavigate()

const navItems = [
    {
        name: 'Home',
        path: '/',
        active: true
    },
    {
        name: 'Signup',
        path: '/signup',
        active: !authStatus
    },
    {
        name: 'Login',
        path: '/login',
        active: !authStatus
    }
]



  return (
    // <Container>
        
    <div className='py-3 bg-gray-500 shadow'>
        <nav className='flex'>
            <ul className='flex ml-auto'>
                {
                    navItems.map((item )=>item.active ?  (
                        <li key={item.name}>
                            <button
                            onClick={()=>navigate(item.path)}
                            className='px-6 py-2 duration-200 rounded-full inline-bock hover:bg-blue-100'
                            >
                            {item.name}
                            </button>
                        </li>
                    ) : null
                )
                }
                {
                    authStatus && (
                      <li>
                        <LogoutBtn/>
                      </li>
                    )
                }
            </ul>
        </nav>
        </div>
    // </Container>


    
  )
}

export default Header