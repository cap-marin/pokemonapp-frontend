import React from 'react'
import { UseFetch } from '../UseFetch';

export const CardPokemon = ({url}) => {
    const estado = UseFetch(url);
    const {cargando, data} = estado;
    
  return (
    <div  className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-blue-400 dark:hover:bg-gray-700'>
      {
        cargando
        ?
        <h1>Cargando...</h1>
        :
        
        <><img class="bg-gray-100 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={data.sprites.front_default} alt='pokemon'/>
            
        <div class="flex flex-col  justify-between p-4 leading-normal"> 
            <h5> <span className='class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400"'> #{data.id} </span>
            <span className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.forms[0].name.toUpperCase()} </span></h5>
            </div>
        </>
           
         
      }
    </div>
  )
}

