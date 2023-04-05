import React from 'react'

export default function Banner3() {
  return (
    <div className='bg-gradient-to-r from-blue-900 to-blue-500  md:mt-20 md:flex md:justify-center md:items-center p-5'>
        <div className=' ' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='text-white md:text-4xl  font-extrabold p-3'>Besoin d'accompagnement<br/> pour votre projet digital ?</div>

            <div className='text-white md:mt-4 p-3'>Nous tenons à vous rassurer que vous êtes au bon endroit, nous collaborons <br/> avec des entreprise comme la vôtre pour concevoir des solution tech<br/> adaptées à votre activité !</div>
        </div>
        <div className='bg-white ml-4 p-3 w-[20rem] rounded-sm cursor-pointer flex justify-center' data-aos="zoom-in-down" data-aos-duration="3000">
            <div className='font-bold text-center'>Planifie un rendez-vous gratuitement</div>
        </div>
    </div>
  )
}
