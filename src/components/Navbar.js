import React, { Fragment, useState } from 'react'
import {BiMenu} from 'react-icons/bi'
import {MdClear} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Contacter from '../pages/Contacter'


export default function Navbar() {
    const [click, setClick]=useState("accueil")
    const [btn, setBtn]=useState(false)
    const showNavbar = ()=>{
      setBtn(!btn)
    }
    
    const scrollup = ()=>{
      window.scrollTo({
          top: 0, 
          behavior: 'smooth'
      })
    }

    const [showModal, setShowModal]= useState(false)
  return (
  <Fragment>
    <div className='fixed top-0 left-0 right-0 bg-white p-3 z-10 md:mt-[-1px] md:p-3 mt-[-35px] shadow-xl flex-wrap w-full'>
    <header className='md:flex md:justify-between md:items-center flex justify-between items-center'>
        <Link to="/" className='md:mt-[-20px] md:ml-40 mt-10 cursor-pointer w-40 '>
        <img className='' src='./ezedigital.png'/>
        </Link>
        <div className='md:flex gap-10 hidden'>
          <div className='flex items-center' onClick={scrollup}>
            <Link to="/" className={`p-3 cursor-pointer hover:text-blue-700 transition duration-700 ease-in-out ${click === "accueil"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('accueil')}>Accueil</Link>
          </div>
            <Link to="/services" className={`p-3 cursor-pointer hover:text-blue-700 ${click === "services"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('services')}>Services</Link>
            <Link to="/realisations" className={`p-3 cursor-pointer hover:text-blue-700 ${click === "realisations"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('realisations')}>Réalisations</Link>
            <div className=' border-blue-900 border md:p-3 p-1 cursor-pointer rounded-md hover:text-white hover:transition hover:duration-700 hover:ease-in-out hover:bg-blue-900 text-black md:font-bold' onClick={()=> setShowModal(true)}>Nous contacter</div>
        </div>


        <div className='md:hidden mt-11 '>
{
    !btn ? (
      
      <button onClick={showNavbar}><BiMenu  size={30}/> </button>
      

    ):(

<button onClick={showNavbar}><MdClear size={30}/> </button>
    )
}


   </div>
    </header>

    {
    btn && (
      <div className="">
      <nav  className="">
      <div className='block mt-5'>
        <div className='mt-2'>
            <Link to="/" className={`p-3 cursor-pointer hover:text-blue-700 ${click === "accueil"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('accueil')}>Accueil</Link>
        </div>
        <div className='mt-2'>
            <Link to="/services" className={`p-3 cursor-pointer hover:text-blue-700 ${click === "services"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('services')}>Services</Link>
        </div>
        <div className='mt-2'>
            <Link to="/realisations" className={`p-3 cursor-pointer hover:text-blue-700 ${click === "realisations"? "text-blue-700 font-bold" : null}`} onClick={()=>setClick('realisations')}>Réalisations</Link>
        </div>
            <div className='border-blue-900 md:border border w-32 md:p-3 p-1 cursor-pointer rounded-md hover:text-white hover:transition hover:duration-700 hover:ease-in-out hover:bg-blue-900 text-black md:font-bold ' onClick={()=> setShowModal(true)}>Nous contacter</div>
        </div>
       </nav>
      </div>
    )

   }
      <Contacter isVisible={showModal} onClose={()=>setShowModal(false)}></Contacter>
      
    </div>
    </Fragment>
  )
}
