import React from 'react'
import { Outlet } from 'react-router-dom'
import ButtonnTop from './components/ButtonnTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function IndexPages() {
  return (
    <div>
        <Navbar />

        <Outlet />


        <Footer />

        <ButtonnTop/>

    </div>
  )
}
