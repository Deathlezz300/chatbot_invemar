import { useParams } from "react-router-dom"
import '../index.css'
import { DataInputs, InputData} from "../helpers/DataInputs";
import {useForm} from 'react-hook-form'
import { Loader } from "../Components/Loader";
import { useChat } from "../Hooks/useChat";

export const EditPage = () => {


  const {id}=useParams();

  const {register,handleSubmit}=useForm();

  const {status}=useChat();

  const onSubmitMetadatos=(data:any)=>{

    console.log(data)
  }

  if(status) return <Loader/>;

  return (
    <form onSubmit={handleSubmit(onSubmitMetadatos)} className="w-[100%] flex flex-col gap-2 min-h-screen bg-[#F3F4F6] items-center justify-center">
        <h1 className="font-roboto font-semibold text-4xl mt-4 w-[100%] text-center text-[#383838]">Editar metadatos libro x</h1>
        <div  className="w-[95%] gap-2 flex flex-wrap justify-center">
            {
                DataInputs.map(input=>(
                    <>
                        <div key={input.placeholder} className="input-group">
                            <textarea {...register(input.nombre)} className="input-form w-[100%] resize-none p-3" rows={1}  placeholder=" "></textarea>
                            <label className="label-input">{input.placeholder}</label>
                        </div>
                        <div className="flex-1"></div>
                    </>
                ))
            }
        </div>
        <div className="w-[92%] flex justify-end">
            <button 
            className="font-roboto py-2 font-bold text-base shadow-md rounded-lg px-8 
            bg-[#3366CC] text-white">Enviar</button>
        </div>
    </form>
  )
}
