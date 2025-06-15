import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayoutes = () => {
  return (
    <div>


        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
        </div>


    </div>
  )
}

export default MainLayoutes