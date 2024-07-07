import React from 'react'
import { Outlet } from 'react-router-dom'


import Navbar from '../components/root/Navbar'
import Footer from '../components/root/Footer'


const RootPage = () => {
  return (
    <>
        <Navbar/>   

        <Outlet/>

        <Footer/>
    </>
  )
}

export default RootPage