import React, { useEffect, useState } from 'react'
import DbService from './DbServcice'

export default function ServicesCard() {
    const [reali, setReali]=useState([])
    useEffect(()=>{
        const data = DbService.find(data=>data.category == 'services')
        setReali(data.service)
    },[])
  return (
    <div className='md:ml-40 md:p-3 '>
        <div>
            <div className='text-gray-500 p-2'>Nous concevons des interfaces utilisateurs intuitives</div>
            <div className='text-2xl font-extrabold p-2'>De quoi avez vous besoin ?</div>
        </div>

        <div className='md:grid grid-cols-4  cursor-pointer md:mt-5 gap-4 p-5' >
        {
            reali.map(({id, img, minititle, title, dataAOS})=>(
            <div className=' bg-white shadow-xl  mb-4' data-aos={dataAOS} data-aos-duration="3000">
            <div className=' transform transition duration-700 hover:scale-90 hover:-rotate-3 '>
                <img className='rounded-t-xl w-50' src={img} />
            </div>
            <div className='bg-white p-3 hover:text-blue-900 rounded-b-2xl'>
                <div className='text-sm flex '>{minititle}</div>
                <div className='md:text-2xl font-bold flex '>{title}</div> 
            </div>
            </div>
            ))
        }
        </div>
    </div>
  )
}
