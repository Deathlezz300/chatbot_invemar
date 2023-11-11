import {FC} from 'react'
import logo from '../assets/images/logo.webp'
import { mensaje } from '../interfaces/ChatInterfaces';
import { DotLoader } from './DotLoader';
import '../index.css'

export const MessageBox:FC<mensaje> = ({id,messageOwner,texto}) => {
  return (
    <div id={id.toString()} className={`w-[100%] flex items-start justify-center`}>
        <div className={`flex gap-3  items-start p-2 w-[90%] ${messageOwner==='chatbot' ? 'justify-start' :'justify-end' }`}>
            {
                messageOwner==='chatbot' ?
                <img src={logo} className='border-2 w-[53px] h-[50px] shadow-sm rounded-lg p-1 bg-white' alt="" />
                :''
            }
            {
                  !texto.includes('http') ? 
                  <span className={`font-roboto p-2 px-4 w-fit  max-w-[52%] font-semibold rounded-lg shadow-sm 
                ${messageOwner==='chatbot' ? 'bg-white' : ' bg-[#3366CC] text-white text-left'} efecto_escritura`} 
                style={{animation:messageOwner!='user' && texto.length>0 ? `teclear .5s steps(${texto.length})` : ''
                ,overflowWrap:'break-word'}}>
                {
                  texto.length<=0 ? <DotLoader/> : texto
                }
                </span> :
                <a href={texto} target='_blank' className={`underline text-blue-600 font-roboto p-2 px-4 w-fit  max-w-[52%] font-semibold rounded-lg shadow-sm 
                ${messageOwner==='chatbot' ? 'bg-white' : ' bg-[#3366CC] text-white text-left'} efecto_escritura`} 
              style={{animation:messageOwner!='user' && texto.length>0 ? `teclear .5s steps(${texto.length})` : ''
              ,overflowWrap:'break-word'}}>
              {
                texto.length<=0 ? <DotLoader/> : texto
              }
           </a>
            }
        </div>
    </div>
  )
}
