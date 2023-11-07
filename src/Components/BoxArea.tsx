import {ChangeEvent,FormEvent,useRef,RefObject} from 'react'
import { useForm } from '../Hooks/useForm';
import { useUI } from '../Hooks/useUI';
import flecha from '../assets/images/flecha.webp'
import { useChat } from '../Hooks/useChat';
import { onShootSubmitTextArea } from '../helpers/SubmitMessage';

const initalState={
    data:''
  }

export const BoxArea = () => {

  const {autoResizeTextArea,showOverflow}=useUI();

  const {onAddMessage,indice,activeBookTalk,}=useChat();

  const  ButtonRef:RefObject<HTMLButtonElement>=useRef(null);

  const {data,onInputChange,onResetValues}=useForm(initalState);

  const onCallChangeFunctions=(evento:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
    autoResizeTextArea(evento as ChangeEvent<HTMLTextAreaElement>);
    onInputChange(evento)
  }
 

  const onSubmitMessage=async(evento:FormEvent<HTMLFormElement>)=>{
    
      evento.preventDefault();

      onAddMessage(data);
      onResetValues();
  }

  return (
    <form  onSubmit={onSubmitMessage} className='flex w-[80%] shadow-md bottom-4 absolute items-end bg-white p-3 gap-2 rounded-lg'>
        <textarea onKeyDown={(evento)=>onShootSubmitTextArea(evento,ButtonRef)} name='data' value={data} onChange={(evento)=>onCallChangeFunctions(evento)} placeholder='Escribe al chatbot' tabIndex={0} rows={1} 
        className={`w-[95%] outline-none resize-none h-max-[98px] ${showOverflow ? 'overflow-y-auto' : 'overflow-y-hidden' }
        font-medium font-roboto`}></textarea>
        <button ref={ButtonRef} type='submit' className='disabled:opacity-50 right-3 absolute enabled:opacity-100 enabled:cursor-pointer disabled:cursor-not-allowed border-black cursor-pointer' 
          disabled={data.length<=0 || (indice>3 && Object.keys(activeBookTalk).length<=0) ?  true : false}>
          <img src={flecha} className='w-[23px]' alt="" />
        </button>
    </form>
  )
}
