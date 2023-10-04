import {RefObject,KeyboardEvent} from 'react'

export const onShootSubmitTextArea=(evento:KeyboardEvent<HTMLTextAreaElement>,formRef:RefObject<HTMLButtonElement>)=>{

    if (evento.key === 'Enter' && !evento.shiftKey) {
        evento.preventDefault(); // Prevenir el salto de línea
        if (formRef.current) {
          formRef.current.click(); 
        }
      }

}