import { useDispatch, useSelector } from "react-redux";
import { IBook, mensaje } from '../interfaces/ChatInterfaces';
import { RootState } from "../store/store";
import { EditMessage, SetBookToTalk, addAnswerContex, addMessage, changeStatus, deleteAnswersContext, firstMessage, setBooks } from "../store/ChatSlice";
import { DataMessageQuestions } from "../helpers/MessageData";
import ChatApi from "../api/ChatApi";
import {useState} from 'react'
import { getBaseObjects } from "../helpers/getBaseObjects";
import { getContextBook, getMessageFromBot, relatedBooks } from "../services/getMessageFromBot";
import { baseApiUrl } from "../helpers/BookData";

interface IUsechat{
    mensajes:mensaje[],
    libros:IBook[]
    onAddMessage:(texto:string)=>void,
    status:boolean,
    indice:number,
    onUploadBook:(file:File)=>void,
    activeBookTalk:IBook,
    onSetBookToTalk:(id:string,title:string)=>void,
    onRestartIndice:()=>void,
}

export const useChat=():IUsechat=>{

    const {mensajes,libros,status,activeBookTalk,answersContext}=useSelector((state:RootState)=>state.Chat);

    const dispatch=useDispatch();

    const [indice,SetState]=useState<number>(0);

    const onAddMessage=async(texto:string)=>{

        const {messageToStore,messaToStorageChabot}=getBaseObjects(mensajes,texto);

        dispatch(addMessage(messageToStore));
        dispatch(addMessage(messaToStorageChabot));

        if(indice<4){
            if(!texto.toLowerCase().includes('no')) dispatch(addAnswerContex(texto));

            setTimeout(()=>{
                dispatch(EditMessage({id:messaToStorageChabot.id,texto:DataMessageQuestions[indice]}));
            },700)


            SetState((x)=>x+1);

            if(indice+1===4){

                console.log("Hola");

                const Books=await relatedBooks(answersContext);


                dispatch(setBooks([...libros,...Books]))
            }

            return;
        }

        const getAnswer=await getMessageFromBot(texto,activeBookTalk.context as string);

        console.log(getAnswer)


        // messaToStorageChabot.texto=getAnswer as string;

        dispatch(EditMessage({id:messaToStorageChabot.id,texto:getAnswer as string}));

    }


    const onUploadBook=async(archivo:File)=>{

        dispatch(changeStatus());
        try{

            const file=new FormData();
            file.append('file',archivo);

            const {data}=await ChatApi.post(`${baseApiUrl}/upload`,file,{
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            })

            console.log(data);

        }catch(error){
            console.log(error);
        }finally{
            dispatch(changeStatus());
        }
    }

    const onSetBookToTalk=async(id:string,title:string)=>{

        dispatch(changeStatus());

        const texto=`Has seleccionado el libro ${title}, hazme preguntas acerca de este libro`

        const {messaToStorageChabot}=getBaseObjects(mensajes,'')

        messaToStorageChabot.texto=texto;

        const contexto=await getContextBook(id);


        const BookTalk:IBook={
            Id:id,
            Titulo:title,
            context:contexto as string
        }


        SetState(4);
        dispatch(SetBookToTalk(BookTalk));
        dispatch(addMessage(messaToStorageChabot))
        dispatch(changeStatus());

    }


    const onRestartIndice=()=>{
        SetState((x)=>0);
        const messageLast={...firstMessage}
        messageLast.id=mensajes[mensajes.length-1].id+1;
        dispatch(deleteAnswersContext());
        dispatch(addMessage(messageLast));
    }


    return {
        mensajes,
        onAddMessage,
        libros,
        status,
        onUploadBook,
        indice,
        activeBookTalk,
        onSetBookToTalk,
        onRestartIndice
    }

}