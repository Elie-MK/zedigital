import React from 'react'
import {BiCodeAlt} from 'react-icons/bi'
import {AiOutlineSafetyCertificate, AiOutlineSolution} from 'react-icons/ai'

export default function Banner5() {
  return (
    <div className='md:flex justify-center items-center md:gap-20 md:p-5 p-4 mt-20  bg-gradient-to-r from-blue-600 to-blue-900'>
        <div className='flex'>
            <div className='text-white'><BiCodeAlt size={70}/></div>
            <div  className='md:ml-4 ml-4'>
            <div className='md:text-2xl font-bold text-white'>Développement Rapide</div>
            <div  className='md:mt-2 text-white'>Pour chaque projet, nos équipes<br/> travaillent d'arrache-pied sur<br/> base d'un deadline bien structuré<br/> au modèle du CDC.</div>
            </div>
        </div>
        <div className='flex mt-4'>
        <div className='text-white'><AiOutlineSafetyCertificate size={70}/></div>
            <div  className='md:ml-4 ml-4 '>
            <div className='md:text-2xl font-bold text-white'>Qualité supérieur</div>
            <div  className='md:mt-2 text-white'>Nos mises à jours régulières, nous<br/> permettent de vous offrir un<br/> travail à la pointe de la<br/> technologie.</div>
            </div>
        </div>
        <div className='flex mt-4'>
        <div className='text-white'><AiOutlineSolution size={70}/></div>
            <div  className='md:ml-4 ml-4'>
            <div className='md:text-2xl font-bold text-white'>Solution Facile</div>
            <div  className='md:mt-2 text-white'>Nous développons des interfaces<br/> hyper customisées selon vos<br/> goûts et ceux de vos potentiels<br/> clients.</div>
            </div>
        </div>
    </div>
  )
}
