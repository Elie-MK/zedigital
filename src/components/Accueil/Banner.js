import React, { Fragment, useState } from 'react'
import Contacter from '../../pages/Contacter'

export default function Banner() {
    const [showModal, setShowModal]= useState(false)
  return (
    <Fragment>
    <div className='mt-40'>
        <div className='flex justify-center place-items-center md:mt-40 mb-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
            <h1 className='md:text-7xl text-3xl text-center font-extrabold bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent'> Vivez la transformation <br/>numérique autrement ! </h1>
        </div>
        <div v className='flex justify-center md:mt-10' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
            <p className='text-center md:text-xl text-sm'>Nous accompagnons nos clients dans leurs activités professionnelles en leur donnant<br/> des pistes de solution digitales adéquates</p>
        </div>

        <div className='p-3 md:flex md:gap-14 md:justify-center md:mt-14 mt-10 gap-4 mb-5 flex justify-center' >
            <div className='mb-3 md:w-56 w-44 cursor-pointer flex justify-center items-center  bg-gradient-to-r from-blue-800 to-blue-500 md:rounded-lg rounded-sm md:p-4 p-2 font-bold text-white' data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="2000" onClick={()=> setShowModal(true)}>
                <div className='text-center' >Prendre contact</div>
            </div>
            <div data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="2000" className='mb-3 md:w-56 w-44 cursor-pointer flex justify-center  bg-gradient-to-r from-blue-800 to-blue-500 md:rounded-lg rounded-sm md:p-4 p-2 font-bold text-white'>
                <div className='text-center'>Voir nos services</div>
            </div>
        </div>
        <Contacter  isVisible={showModal} onClose={()=>setShowModal(false)} ></Contacter>
    </div>
    </Fragment>
  )
}
