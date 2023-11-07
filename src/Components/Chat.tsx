import { BoxArea } from "./BoxArea"
import { useUI } from "../Hooks/useUI"
import { HeadBar } from "./HeadBar";
import { useChat } from "../Hooks/useChat";
import { MessagesList } from "./MessagesList";
import { useEffect,useRef } from "react";

export const Chat = () => {
  
  const {showLetters,setShowLetters}=useUI();

  const {mensajes}=useChat();

  const boxRef=useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    if(boxRef.current){
      boxRef.current.scrollTop=boxRef.current.scrollHeight;
    }
    if(mensajes.length>0){
      setShowLetters();
    }
  },[mensajes])

  return (
    <section className='w-[80%] flex-1 flex flex-col relative justify-center items-center overflow-hidden'>
        <div ref={boxRef} className={`flex flex-col flex-1 w-[100%] bg-[#0C3F74] overflow-x-hidden ${!showLetters ? 'pt-6' : ''}`}>
          {
            mensajes.length>0 && !showLetters ? <MessagesList mensajes={mensajes}/> : ''
          }
          {
            showLetters ? <HeadBar/> : <div className="flex-1"></div>
          }
          <div className='h-20  bg-[#0C3F74] w-[100%] flex-shrink-0'></div>
        </div>
        <BoxArea/>
    </section>
  )
}
