import { createSlice } from '@reduxjs/toolkit';
import { mensaje, IBook } from '../interfaces/ChatInterfaces';
import { BookData } from '../helpers/BookData';

interface IEdit{
    id:number,
    texto:string
}

export const firstMessage:mensaje={
    id:1,
    texto:'Hola,soy el chatbot de invemar, por favor proporcioname el tema general de lo que quieres buscar',
    messageOwner:'chatbot'
}

export const ChatSlice = createSlice({
    name: 'Chat',
    initialState: {
        mensajes:[firstMessage] as mensaje[],
        libros:BookData,
        activeBookTalk:{} as IBook,
        status:false,
        answersContext:[] as string[],
        indice:0,
        metadaDataBook:{}
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
         },
         SetBookToTalk:(state,{payload})=>{
            state.activeBookTalk=payload;
         },
         changeStatus:(state)=>{
            state.status=!state.status;
         },
         addAnswerContex:(state,{payload}:{payload:string})=>{
            state.answersContext.push(payload);
         },
         deleteAnswersContext:(state)=>{
            state.answersContext=[];
         },
         onSetIndice:(state,{payload})=>{
            state.indice=payload;
         },
         setMetadaDataBook:(state,{payload})=>{
            state.metadaDataBook=payload;
         }
    }
});


// Action creators are generated for each case reducer function
export const { addMessage,setBooks,EditMessage,SetBookToTalk,changeStatus,addAnswerContex,deleteAnswersContext
,onSetIndice,setMetadaDataBook } = ChatSlice.actions;