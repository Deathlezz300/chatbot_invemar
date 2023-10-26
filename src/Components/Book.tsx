import {FC} from 'react'
import { useChat } from '../Hooks/useChat'

interface props{
    id:string,
    nombre:string
}

export const Book:FC<props> = ({nombre,id}) => {
  
  const {onSetBookToTalk,onRestartIndice,activeBookTalk,status}=useChat();
  
  return (
    <button disabled={status} onClick={()=> id!='0' && activeBookTalk.Id!=id ? onSetBookToTalk(id,nombre) :onRestartIndice() } id={id.toString()} className='hover:bg-[#D8E2FF] hover:text-[#3366cc] p-2 w-[80%] bg-[#3366cc] rounded-lg group overflow-x-hidden shadow-md font-roboto font-semibold
    text-white whitespace-nowrap text-ellipsis disabled:opacity-50 enabled:opacity-100'>
        {nombre}
    </button>
  )
}
