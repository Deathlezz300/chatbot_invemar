import {FC} from 'react'
import { mensaje } from '../interfaces/ChatInterfaces'
import { MessageBox } from './MessageBox'


interface props{
    mensajes:mensaje[]
}

export const MessagesList:FC<props> = ({mensajes}) => {
  
  
  return (
    <>
        {
            mensajes.map((mensaje)=>{
                return <MessageBox key={mensaje.id} id={mensaje.id} texto={mensaje.texto} messageOwner={mensaje.messageOwner}/>
            })
        }
    </>
  )
}
