import React,{FC} from 'react'

interface props{
    nombre:string
}

export const Book:FC<props> = ({nombre}) => {
  return (
    <button className='hover:bg-[#D8E2FF] hover:text-[#3366cc] p-2 w-[80%] bg-[#3366cc] rounded-lg group overflow-x-hidden shadow-md font-roboto font-semibold
    text-white whitespace-nowrap text-ellipsis'>
        {nombre}
    </button>
  )
}
