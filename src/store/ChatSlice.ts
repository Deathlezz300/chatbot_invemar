import { createSlice } from '@reduxjs/toolkit';
import { mensaje, IBook } from '../interfaces/ChatInterfaces';
import { DataMessages } from '../helpers/MessageData';
import { BookData } from '../helpers/BookData';

export const ChatSlice = createSlice({
    name: 'Chat',
    initialState: {
        mensajes:DataMessages,
        libros:BookData
    },
    reducers: {
         addMessage:(state,{payload}:{payload:mensaje})=>{
            state.mensajes.push(payload);
         },
         setBooks:(state,{payload}:{payload:IBook[]})=>{
            state.libros=payload;
         }
    }
});


// Action creators are generated for each case reducer function
export const { addMessage,setBooks } = ChatSlice.actions;