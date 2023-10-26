import { useChat } from '../Hooks/useChat'
import { Book } from './Book'
import {useRef,useState,ChangeEvent} from 'react'
import subir from '../assets/images/subir.webp'



export const RightBar = () => {
  
  
    const [pdf,SetPdf]=useState<File | null>(null);

    const {libros,status,onUploadBook}=useChat();

    const fileRef=useRef<HTMLInputElement>(null);

    const onChangeFile=({target}:ChangeEvent<HTMLInputElement>)=>{
        const files=target.files;
        if(files && files.length>0){
            SetPdf(files[0]);
        }
    }

    const onSendPdf=()=>{
        if(pdf){
            onUploadBook(pdf);
            SetPdf(null);
        }
    }

    return (
    <section className='flex flex-col w-[20%] items-center pt-4 bg-[#001529] gap-2 overflow-hidden'>
        <h3 className='font-roboto text-white font-bold text-xl text-center'>Libros encontrados</h3>
        <div className='pt-3 gap-2 w-[100%] flex flex-col flex-1 justify-start items-center'>
           {
                libros.map((libro)=>{
                    return <Book key={libro.Id} id={libro.Id} nombre={libro.Titulo}/>
                })
           }
        </div>
        <div className='w-[100%] gap-2 justify-center flex-col flex px-3 p-2 items-center'>
            <span className='font-roboto text-white font-semibold'>{pdf ? pdf.name : ''}</span>
            <div className='w-[100%] flex gap-2 text-ellipsis'>
                <input onChange={onChangeFile} ref={fileRef} multiple={false} accept='.pdf' type="file" style={{display:'none'}}/>
                <button disabled={status} type='button' onClick={()=>fileRef.current?.click()} className='flex bg-[#3366CC] p-2 px-3 rounded-lg shadow-md justify-center items-center gap-1 font-roboto text-white
                font-semibold disabled:opacity-50'>Escoger archivo
                    <img src={subir} className='w-[16px] h-[16px]' alt="" />
                </button>
                <button onClick={onSendPdf} disabled={pdf || status ? false : true} className='font-roboto text-white font-semibold
                bg-[#3366CC] p-2 px-3 rounded-lg shadow-md disabled:opacity-50'>Subir</button>
            </div>
        </div>
    </section>
  )
}
