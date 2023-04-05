import React from 'react'

export default function Banner4() {
  return (
    <div className='md:flex md:justify-center items-center md:gap-4 md:p-5 p-3'>
        <div className='bg-white shadow-2xl p-9 mb-4  rounded-lg ' data-aos="fade-up"
     data-aos-duration="2000">
            <img className='w-80' src='/work-with-the-best.svg'/>
            <div className='font-extrabold md:text-xl text-center mb-3 text-blue-800'>Mise en place de la <br/> stratégie digitale</div>
            <div className='text-gray-500'>En premier lieu, tous nos projets<br/> commencent par une phase de découverte<br/>  qui  nous permet de nous  plonger dans votre<br/> univers. Nos chargées  de projet questionnent<br/> toutes les parties prenantes, analysent vos<br/>  concurrents,  recherchent vos utilisateurs<br/> et consolident  votre contenu. Le resultat est<br/> un plan d'action stratégique avec la <br/>compréhension  des solution à mettre en place.</div>
        </div>


        <div className='bg-white shadow-2xl p-9 rounded-lg md:mt-20 mb-4' data-aos="fade-up"
     data-aos-duration="3000">
            <img className='w-80' src='/web-developer.svg'/>
            <div className='font-extrabold md:text-xl text-center mb-3 text-blue-800'>Conception design UX & <br/> Interface utilisateur</div>
            <div className='text-gray-500'>La conception UX & Inteface utilisateur<br/> est un facteur déterminant pour votre <br/>  projet, cela jouera un grand rôle dans<br/>  l'amélioration de la conversion et <br/>  l'augmentation de l'engagement des <br/>  clients. Nos capacités de conception UI/UX<br/>  ne s'arrêtent pas aux applications<br/> mobiles, ou aux applications Web, nous<br/> offrons une expérience digitale<br/> multiplateforme. </div>
        </div>


        <div className='bg-white shadow-2xl p-9 rounded-lg md:mt-56' data-aos="fade-up"
     data-aos-duration="3000">
            <img className='w-80' src='/website-development.svg'/>
            <div className='font-extrabold md:text-xl text-center mb-3 text-blue-800'>Ensuite le développement<br/> du projet !</div>
            <div className='text-gray-500'>Nous réalisons des sites web,<br/> des applications mobiles et web, des logiciels<br/> pour la gestion de votre entreprise dans <br/> différentes thématiques comme la <br/> gestion client, financière... <br/> Nous privilégions les solutions open sources<br/> fiables selon le besoin de votre projet : <br/> Symfony / Drupal / Wordpress / Prestashop /<br/> Laravel  / Node JS / React / Ionic /... </div>
        </div>
    </div>
  )
}
