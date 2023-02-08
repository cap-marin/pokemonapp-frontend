import React, { useState, useEffect } from "react";
import { UseFetch } from "./UseFetch";
import { Cards } from "./cards/Cards";

const Pokemon = () => {
    const [url, setUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    const estado = UseFetch(url);
    const {cargando, data} = estado;
    cargando ? console.log('cargando') : console.log(data.results)

    return(
        
        <div>
             <div className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Lista de Pokemon</div>

            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                <center>
                <Cards results={data.results}/>
                </center>
               
            }
            <div className="mb-10 text-center md:mb-16">
                <button onClick={()=>setUrl(data.previus)} className='m-2 bt btn-dark'>Anterior</button>
                <button onClick={()=>setUrl(data.next)} className='m-2 bt btn-dark'>Siguiente</button>
            </div>
        </div>
        
    )
}

export default Pokemon;