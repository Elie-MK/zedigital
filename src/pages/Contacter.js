import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineSafety} from 'react-icons/ai'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {MdAlternateEmail} from 'react-icons/md'
import {BsQuestionLg, BsTelephone} from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

export default function Contacter({isVisible, onClose, children}) {
  const [nomComplet, setNomComplet]=useState("");
  const [email, setEmail]=useState("");
  const [subjet, setSubject]=useState("");
  const [numero, setNumber]=useState("");
  const [texto, setTexto]=useState("");
  const [loading, setLoading]=useState(false)


  if(!isVisible) return null;

 

  const Sendmail = (e)=>{
    if(nomComplet == '' && email == '' && subjet == '' && texto == ''){
      e.preventDefault(); 
      alert('Veuillez remplir tout le formulaire')
    }else{
      axios.post("http://localhost:500/send_email",
      {
          from : `zedigital25@gmail.com`,
          to : "zedigital25@gmail.com",
          subject : `${subjet}`,
          message : 
              `
              Monsieur/Madame ${nomComplet}, mail : ${email} a besoin de :  ${subjet},<br/> numero de telephone : ${numero}<br/>
              ${texto}
              `
      })
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 2000)
      .then(res=>{
          console.log(res.data);
      })
      .catch(err=>{
          console.log(err)
      })
    }


  
}

  return (
    <div className='fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10'  id="wrapper">
      <div className='md:w-[400px] flex flex-col rounded-xl'>
        <div className='bg-white p-2 rounded flex flex-col'>
      <button className='text-black text-xl place-self-end cursor-pointer p-2 hover:bg-blue-900 hover:text-white transition duration-700 ease-in-out' onClick={()=>onClose()}><AiOutlineClose size={15}/></button>

        <div className='flex justify-center items-center'>
        <div  className='md:p-4'>
        <h1 className='text-2xl font-bold mb-2 '>Formulaire de contact</h1>
        <div className='border-b-2 border-blue-900 w-20'></div>
        <p className='mt-2 text-xs font-bold'>Nous avons hâte d'en savoir plus sur vos préoccupations !</p>

        {/* Formulaire */}
        <form className='block'>

          {/* Nom complet */}
          <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-1 top-1 bottom-[-1px] rounded-l-lg mt-2 left-0 flex items-center pl-1 p-1 bg-blue-900">
                  <span class="text-white sm:text-sm "><RiAccountPinCircleLine size={25}/></span>
              </div>
              <input className=' border border-black rounded-lg p-3 mt-3 pl-9 pr-12 w-80' placeholder='Nom complet' type='text' onChange={(e)=>setNomComplet(e.target.value)}/>
          </div>

           {/* Email*/}
          <div class="relative mt-1 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-1 top-1 bottom-[-1px] rounded-l-lg mt-2 left-0 flex items-center pl-1 p-1 bg-blue-900">
                    <span class="text-white sm:text-sm "><MdAlternateEmail size={25}/></span>
                </div>
            <input className='border border-black rounded-lg p-3 mt-3 pl-9 pr-12 w-80' placeholder='Votre email' type='email'  onChange={(e)=>setEmail(e.target.value)}/>
          </div>

           {/* Votre besoin */}
          <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-1 top-1 bottom-[-1px] rounded-l-lg mt-2 left-0 flex items-center pl-1 p-1 bg-blue-900">
                    <span class="text-white sm:text-sm "><BsQuestionLg size={25}/></span>
                </div>
            <input className='border border-black rounded-lg p-3 mt-3 pl-9 pr-12 w-80' placeholder='Votre besoin' type='text' onChange={(e)=>setSubject(e.target.value)}/>
          </div>

           {/* N° Phone */}
          <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-1 top-1 bottom-[-1px] rounded-l-lg mt-2 left-0 flex items-center pl-1 p-1 bg-blue-900">
                    <span class="text-white sm:text-sm "><BsTelephone size={25}/></span>
                </div>
            <input className='border border-black rounded-lg p-3 mt-3 pl-9 pr-12 w-80' placeholder='N° Téléphone' type='tel' onChange={(e)=>setNumber(e.target.value)}/>
          </div>

           {/* Area besoin */}
          <div className=''>
            <textarea className='border border-black rounded-lg p-3 mt-3 pl-7 pr-12 w-80' placeholder='Decrivez votre besoin' onChange={(e)=>setTexto(e.target.value)}/>
          </div>

           {/* Submit */}
          <div className='flex justify-center mt-4'>
            {
              loading ? 
              <button className=' p-3 bg-blue-500 hover:bg-blue-400 text-white w-44 md:text-xl rounded-lg transition ease-in-out duration-500' onClick={Sendmail}>Envoyés</button>
              :
              <button className=' p-3 bg-blue-900 hover:bg-blue-700 text-white w-44 md:text-xl rounded-lg transition ease-in-out duration-500' onClick={Sendmail}>Soumettre !</button>
            }
          </div>
        </form>

        <div className='text-xs mt-4 flex gap-3 font-bold'>
        <AiOutlineSafety size={25}/>
          <p>Les informations inscrites sur ce formulaire ne seront jamais rendu publique ou partagés.</p>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
