import React from 'react'
import {BsApple, BsGoogle, BsMicrosoft} from 'react-icons/bs'
import {TbBrandMeta} from 'react-icons/tb'
import {GrAmazon} from 'react-icons/gr'

export default function ServiceBanner2() {
  return (
    <div className='md:p-3 p-5 md:ml-40 '>
        <div className='text-center font-extrabold md:text-4xl text-blue-900' data-aos="zoom-in">Nous utilisons des technologies<br/> modernisées par le GAFAM</div>
        <div className='md:flex justify-center md:gap-24 ml-20 md:mt-8 columns-2 items-center'>
            <div className='text-blue-900 mt-6' data-aos="zoom-in"  data-aos-duration="2000"><BsGoogle size={70}/></div>
            <div className='text-blue-900 mt-6' data-aos="zoom-in"  data-aos-duration="2000"><GrAmazon size={70}/></div>
            <div className='text-blue-900 mt-6' data-aos="zoom-in"  data-aos-duration="2000"><TbBrandMeta size={70}/></div>
            <div className='text-blue-900 mt-6' data-aos="zoom-in"  data-aos-duration="2000"><BsApple size={70}/></div>
            <div className='text-blue-900 mt-6' data-aos="zoom-in"  data-aos-duration="2000"><BsMicrosoft size={70}/></div>
        </div>
    </div>
  )
}
