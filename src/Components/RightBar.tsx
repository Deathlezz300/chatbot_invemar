import React from 'react'
import { useForm } from '../Hooks/useForm'
import lupa from '../assets/images/lupa.webp'
import { Book } from './Book'

const initialState={
    buscador:''
}

export const RightBar = () => {
  
    const {buscador,onInputChange}=useForm(initialState);
  
    return (
    <section className='flex flex-col w-[20%] items-center pt-4 bg-[#001529] gap-2 overflow-hidden'>
        <h3 className='font-roboto text-white font-bold text-xl'>Libros disponibles</h3>
        <div className='flex justify-center items-center bg-white rounded-lg shadow-md p-1'>
            <input autoComplete='off' className='p-1 w-[85%] rounded-lg  font-roboto focus:outline-none  font-semibold
            outline-none' onChange={onInputChange} name='buscador' value={buscador} type="text" placeholder='Buscar'/>
            <button className='disabled:opacity-30 disabled:cursor-not-allowed enabled:opacity-100 enabled:cursor-pointer' disabled={buscador.length>0 ? false : true}>
                <img src={lupa} className='w-[21px] h-[21px]' alt="" />
            </button>
        </div>
        <div className='pt-3 gap-2 w-[100%] flex flex-col justify-center items-center'>
            <Book nombre='El libro del sapo'/>
            <Book nombre='El libro del cachon'/>
            <Book nombre='El libro del cacho contentos y sapos'/>
        </div>
    </section>
  )
}
