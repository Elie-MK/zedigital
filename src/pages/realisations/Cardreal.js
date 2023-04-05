import React, { useEffect, useState } from 'react'
import DbService from '../service/DbServcice'

export default function Cardreal({category}) {
    const [reali, setReali]=useState([])
    useEffect(()=>{
        const data = DbService.find(data=>data.category == 'realisations')
        setReali(data.service)
    },[])
  return (
    <div className='md:border-b border-b-4 md:border-blue-500'>
    <div className='md:ml-40 md:p-3 '>
        <div>
            <div className='text-gray-500 p-2'>Finalisé par nos développeurs.</div>
            <div className='md:text-4xl font-extrabold p-2'>Votre projet est réalisé avec amour et<br/> passion
par nos explorateurs !</div>
        </div>

        <div className='md:grid grid-cols-4  cursor-pointer md:mt-5 gap-4 p-5' >
        {
            reali.map(({id, img, minititle, title, dataAOS, link})=>(
            <div className=' bg-white shadow-xl  mb-4 p-3' data-aos={dataAOS} data-aos-duration="3000">
            <div className=' transform transition duration-700 hover:scale-90 hover:-rotate-3 '>
                <img className='rounded-t-xl w-50' src={img} />
            </div>
            <a href={link} target='_blank' className='bg-white  hover:text-blue-900 rounded-b-2xl'>
                <div className='text-sm flex '>{minititle}</div>
                <div className='md:text-2xl font-bold flex '>{title}</div> 
            </a>
            </div>
            ))
        }
        </div>
    </div>
    </div>

  )
}
