import React, { useState } from 'react'
import Contacter from '../Contacter'

export default function Real() {
    const [showModal, setShowModal]= useState(false)

  return (
    <div className='bg-gradient-to-l from-blue-900 to-blue-500 p-3'>
        <div className='mt-[70px] md:ml-40 p-3 md:text-center items-center'>
            <div className='text-white md:text-5xl text-xl font-extrabold text-center'>Prêt à travailler avec nous sur<br/> votre magnifique projet ?</div>

            <div className='md:mt-5 text-white md:text-lg text-justify mt-5'>Nous accompagnons nos clients dans la mise en place et
l'implémentation de leur projet de digitalisation d'activité professionnelle.</div>

            <div className='  flex items-center justify-center mt-5' >
                <div className='bg-white cursor-pointer p-3 rounded-sm hover:bg-gradient-to-r from-blue-600 to-blue-500 transition duration-700 ease-in-out hover:text-white' onClick={()=> setShowModal(true)}>Contacter nous gratuitement</div>
            </div>
        </div>
<Contacter isVisible={showModal} onClose={()=>setShowModal(false)}>Contacter nous gratuitement</Contacter>
    </div>
  )
}
