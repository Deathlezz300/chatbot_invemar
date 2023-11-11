import '../index.css'
import { DataInputs} from "../helpers/DataInputs";
import {useForm} from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom';
import { useChat } from "../Hooks/useChat";

export const EditPage = () => {


  const {metadaDataBook,onSaveMetaData,status}=useChat();

  const navegacion=useNavigate();

  const onSubmitMetadatos=async(data:any)=>{
     const res=await onSaveMetaData(data);
     if(res) return navegacion('/',{replace:true})
  }

  const {register,handleSubmit}=useForm({
    defaultValues:{
        ...metadaDataBook
    }
  });

  if(Object.keys(metadaDataBook).length<=0) return <Navigate to='/'/>;


  return (
    <form onSubmit={handleSubmit(onSubmitMetadatos)} className="w-[100%] flex flex-col gap-2 min-h-screen bg-[#F3F4F6] items-center justify-center">
        <h1 className="font-roboto font-semibold text-4xl mt-4 w-[100%] text-center text-[#383838] text-ellipsis">Editar metadatos libro {metadaDataBook.titulo_principal}</h1>
        <div  className="w-fit gap-2 flex flex-wrap items-center  justify-center">
            {
                DataInputs.map(input=>(
                        <div key={input.placeholder} className="input-group">
                            {
                              input.tipo==='texto' ? 
                              <textarea {...register(input.nombre)} className="input-form w-[100%] resize-none p-3" rows={1}  placeholder=" "></textarea> 
                              :
                              <input  type="date" {...register(input.nombre)}  className="input-form w-[100%] resize-none p-3" placeholder=" "/> 
                            }
                            <label className="label-input">{input.placeholder}</label>
                        </div>
                ))
            }
        </div>
        <div className="w-[92%] flex justify-end">
            <button disabled={status}
            className="font-roboto py-2 mb-1 font-bold text-base shadow-md rounded-lg px-8 
            bg-[#3366CC] text-white disabled:opacity-50 enabled:opacity-100">Enviar</button>
        </div>
    </form>
  )
}
