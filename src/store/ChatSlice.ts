import { createSlice } from '@reduxjs/toolkit';
import { mensaje, IBook } from '../interfaces/ChatInterfaces';
import { BookData } from '../helpers/BookData';

interface IEdit{
    id:number,
    texto:string
}

export const ChatSlice = createSlice({
    name: 'Chat',
    initialState: {
        mensajes:[] as mensaje[],
        libros:BookData
    },
    reducers: {
         addMessage:(state,{payload}:{payload:mensaje})=>{
            state.mensajes.push(payload);
         },
         setBooks:(state,{payload}:{payload:IBook[]})=>{
            state.libros=payload;
         },
         EditMessage:(state,{payload}:{payload:IEdit})=>{
            state.mensajes=state.mensajes.map(mensaje=>{
                if(mensaje.id===payload.id){
                    return {
                        ...mensaje,
                        texto:payload.texto
                    }
                }

                return mensaje
            })
         }
    }
});


// Action creators are generated for each case reducer function
export const { addMessage,setBooks,EditMessage } = ChatSlice.actions;