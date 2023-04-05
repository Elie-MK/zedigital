import React, { useEffect, useState } from 'react'
import {HiOutlineArrowCircleUp } from 'react-icons/hi'

export default function ButtonnTop() {

    const [buttontop, setButtontop]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setButtontop(true)
            }else{
                setButtontop(false)
            }
        })
    }, [])

    const scrollup = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }
  return (
    <div>

        {buttontop && (
            <div className='fixed bottom-10 right-10 text-2xl animate-bounce p-2 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-full cursor-pointer' onClick={scrollup}>
                <HiOutlineArrowCircleUp size={35}/>
            </div>
        )}
    </div>
  )
}
