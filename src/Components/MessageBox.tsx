import {FC} from 'react'
import logo from '../assets/images/logo.webp'
import { mensaje } from '../interfaces/ChatInterfaces';
import { DotLoader } from './DotLoader';
import '../index.css'

export const MessageBox:FC<mensaje> = ({id,messageOwner,texto}) => {
  return (
    <div id={id.toString()} className={`w-[100%] flex items-center justify-center`}>
        <div className={`flex gap-3 items-center p-2 w-[90%] ${messageOwner==='chatbot' ? 'justify-start' :'justify-end' }`}>
            {
                messageOwner==='chatbot' ?
                <img src={logo} className='border-2 w-[53px] h-[50px] shadow-sm rounded-lg p-1 bg-white' alt="" />
                :''
            }
            <span className={`font-roboto p-2 px-4 border max-w-[48%] font-semibold rounded-lg shadow-sm 
             ${messageOwner==='chatbot' ? 'bg-white' : ' bg-[#3366CC] text-white'} efecto_escritura break-all`} 
            style={{animation:messageOwner!='user' && texto.length>0 ? `teclear .5s steps(${texto.length})` : ''}}>
            {
              texto.length<=0 ? <DotLoader/> : texto
            }
            </span>
        </div>
    </div>
  )
}
