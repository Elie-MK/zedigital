import React from 'react'

export default function ServiceBanner() {
  return (
    <div className='md:mt-[100px]  mt-20 md:p-3 p-5'>
      <div className='md:ml-40 '>
        <div className='text-gray-500 text-center md:text-start' data-aos="fade-down" data-aos-duration="2000">Pourquoi nous choisir ?</div>

        <div className=' md:grid grid-cols-2 items-center justify-between md:mt-[-70px] mt-5'>
          <div className='  col-span-1 text-justify md:text-xl md:mt-11' data-aos="fade-down" data-aos-duration="2000">
        <div className='text-blue-900 md:text-4xl font-extrabold  md:text-start text-center text-xl mb-4'>Nous travaillons sur des projets numériques ambitieuse !</div>

          Zedigital à une excellente expertise dans la réalisation des Projets de manière professionnel et intuitive. Nous mettons à votre disposition des ingénieurs expérimentés et qualifiés dans leurs domaines pour vous rendre un travail purement professionnel de standard internationale, ils utilisent donc des technologies ultra moderne à la pointe de la technologie pour optimiser votre croissance. Pour que cella soit possible, la rigueur est d'une priorité primordiale. Nous veillons en conséquence à ce que la deadline pour le compte de chaque projet soit toujours respecter selon la programmation du cahier de charge établie entre vous et nous.
          </div>
          <div className='md:w-[40rem] hidden md:flex col-span-1 ' data-aos="fade-up" data-aos-duration="3000">
            <img src='/website-development.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}
