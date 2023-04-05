import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {

    const scrollup = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
      }

  return (
    <footer className='md:ml-40 p-4'>
        <div className='md:flex justify-between'>

        
        <div className=''>
            <Link to="/">
            <img className='w-40 cursor-pointer' src='./ezedigital.png'></img>
            </Link>
            <div>
                <p className='text-justify'>Zedigital est une startup digitale spécialisée dans le<br/> développement des solutions numériques  dans différents<br/> secteurs d'activité pour le développement et la croissance<br/> du numérique !</p>
            </div>
            <div className='flex gap-6 mt-8 items-center'>
                <a href='' target="_blank" className='bg-blue-900 p-3 text-white rounded-2xl cursor-pointer hover:text-blue-900 hover:bg-white transition duration-700 ease-in-out'><BsFacebook size={20}/></a>
                <a href='' target="_blank" className='bg-blue-900 p-3 text-white rounded-2xl cursor-pointer hover:text-blue-900 hover:bg-white transition duration-700 ease-in-out'><BsInstagram size={20}/></a>
                <a href='' target="_blank" className='bg-blue-900 p-3 text-white rounded-2xl cursor-pointer hover:text-blue-900 hover:bg-white transition duration-700 ease-in-out'><BsWhatsapp size={20}/></a>
                <a href='https://www.linkedin.com/in/elie-mulumba-87a4991a3/' target="_blank" className='bg-blue-900 p-3 text-white rounded-2xl cursor-pointer hover:text-blue-900 hover:bg-white transition duration-700 ease-in-out'><BsLinkedin size={20}/></a>
            </div>
        </div>

            <div className='md:flex justify-between gap-8 mt-5 p-5'>
                <div>
                    <div className='mb-2'>
                        <h1 className='text-blue-900 text-lg font-bold'>Liens utiles</h1>
                    </div>
                    <div className=''>
                    <Link to="/" onClick={scrollup} className='hover:text-blue-900 cursor-pointer hover:underline'>Accueil</Link>
                    <div className='hover:text-blue-900 cursor-pointer hover:underline'>à propos de nous</div>
                    <Link to="/realisations" className='hover:text-blue-900 cursor-pointer hover:underline'>Nos réalisations</Link>
                    <div className='hover:text-blue-900 cursor-pointer hover:underline'>Portfolio</div>
                    <Link to="/services" className='hover:text-blue-900 cursor-pointer hover:underline'>Nos services</Link>
                    <div className='hover:text-blue-900 cursor-pointer hover:underline'>FAQ</div>
                    </div>
                </div>


                <div className=''>
                    <div className='mb-2'>
                        <h1 className='text-blue-900 text-lg font-bold'>Pages legales</h1>
                    </div>
                    <div>
                        <div className='hover:text-blue-900 cursor-pointer hover:underline'>Condition d'utilisation</div>
                        <div className='hover:text-blue-900 cursor-pointer hover:underline'>Régle de confidentialité</div>
                        <div className='hover:text-blue-900 cursor-pointer hover:underline'>Condition sur nos Cookies</div>
                    </div>
                </div>


                <div>
                    <div className='mb-2'>
                        <h1 className='text-blue-900 text-lg font-bold'>Nous contacter</h1>
                    </div>
                    <div>
                        <div>
                            <div>Tél: +243 821066376 / +216 56373135</div>
                            <div>Email : <span className='hover:text-blue-900'>zedigital25@gmail.com</span></div>
                        </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d399.0582847332675!2d10.2681999!3d36.8552565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b58366ba8bcd%3A0xce28d22fc9b8ffaf!2zUsOpc2lkZW5jZSBzZWxtYSBs4oCZYW91aW5h!5e0!3m2!1sfr!2stn!4v1672086923881!5m2!1sfr!2stn" width="300" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>


            </div>
        </div>

        <div>
            <div>Copyright © 2022. Developed for Zedigital.</div>
        </div>
    </footer>
  )
}
