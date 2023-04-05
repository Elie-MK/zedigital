import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner2() {
  return (
    <div className='md:grid md:grid-cols-2 md:mt-[18rem] md:ml-20'>
        <div className='flex grid-rows-2 grid-flow-col gap-4 justify-center'>
            <div>
            <div className='col-span-5  mt-4' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"> 
                <img src='https://st3.depositphotos.com/1003697/12973/i/450/depositphotos_129735556-stock-photo-woman-in-modern-office-at.jpg' className='rounded-lg md:w-80 w-[10rem]' />
            </div>
            <div className='col-span-5 md:mt-5 mt-4' data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000"> 
                <img src='https://img.freepik.com/photos-premium/collegues-discutant-presentation-ligne-equipe_249974-15366.jpg?w=360' className='rounded-lg md:w-80 w-[10rem]'/>
            </div> 
            </div> 
            <div className='md:mt-20'> 
            <div className='col-span-5 mt-4' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"> 
                <img src='https://img.freepik.com/photos-premium/coach-confiant-expliquant-graphique-financier-ses-collegues_249974-15140.jpg?w=360' className='rounded-lg md:w-80 w-[10rem]' />
            </div>
            <div className='col-span-5 md:mt-5 mt-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000"> 
                <img src='https://img.freepik.com/photos-premium/ingenieur-informatique-developpeur-logiciels-confiant-pointant-vers-ecran-ordinateur_274679-40353.jpg?w=360' className='rounded-lg md:w-80 w-[10rem]'/>
            </div>            
            </div>          
        </div>
        <div className='md:mt-80'>
            <div className='md:ml-14 p-3' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">Entreprise digitale</div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" className='md:ml-14 font-bold md:text-4xl mt-[-20px] p-3 text-blue-900'>Le Digital dans la  croissance de <br/>votre Entreprise !</div>
            <div className='p-3 md:ml-12 md:mt-5 md:text-lg text-justify' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">Avec nos technologies modernes, nous accompagnons nos différents clients dans le processus de digitalisation de leur entreprise sur différents secteurs d'activités.
            Nos ingénieurs se rendent donc disponible pour vous aider dans l'intégration des outils numériques pour la croissance de votre Business.
            </div>

        <Link to="/services" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="2000" className='mb-3 md:w-56 w-44 cursor-pointer flex justify-center  bg-gradient-to-r from-blue-800 to-blue-500 md:ml-14 ml-4 md:rounded-lg rounded-sm md:p-4 p-2 font-bold text-white'>
                <div>Choisie un besoin</div>
            </Link>
        </div>
    </div>
  )
}
