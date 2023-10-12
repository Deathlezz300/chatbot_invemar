import { useDispatch, useSelector } from "react-redux";
import { IBook, mensaje } from "../interfaces/ChatInterfaces";
import { RootState } from "../store/store";
import { EditMessage, SetBookToTalk, addAnswerContex, addMessage, changeStatus } from "../store/ChatSlice";
import { DataMessageQuestions } from "../helpers/MessageData";
import ChatApi from "../api/ChatApi";
import {useState} from 'react'
import { getBaseObjects } from "../helpers/getBaseObjects";

interface IUsechat{
    mensajes:mensaje[],
    libros:IBook[]
    onAddMessage:(texto:string)=>void,
    status:boolean,
    indice:number,
    onUploadBook:(file:File)=>void,
    activeBookTalk:IBook,
    getRelatedBooks:()=>Promise<boolean>,
    onSetBookToTalk:(id:number,title:string)=>void
}

export const useChat=():IUsechat=>{

    const {mensajes,libros,status,activeBookTalk}=useSelector((state:RootState)=>state.Chat);

    const dispatch=useDispatch();

    const [indice,SetState]=useState<number>(0);

    const onAddMessage=(texto:string)=>{


        const {messageToStore,messaToStorageChabot}=getBaseObjects(mensajes,texto);

        dispatch(addMessage(messageToStore));
        dispatch(addMessage(messaToStorageChabot));

        if(indice<4){
            dispatch(addAnswerContex(texto))
            setTimeout(()=>{
                dispatch(EditMessage({id:messaToStorageChabot.id,texto:DataMessageQuestions[indice]}));
            },700)
            SetState((x)=>x+1);
            return;
        }else{
            console.log("hola")
        }

    }

    const getRelatedBooks=async()=>{

        return true;

    }

    const onUploadBook=async(file:File)=>{

        dispatch(changeStatus());
        try{

            const UploadFile=new FormData();
            UploadFile.append('UploadFile',file);

            const {data}=await ChatApi.post('',UploadFile,{
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

    const onSetBookToTalk=(id:number,title:string)=>{

        const texto=`Has seleccionado el libro ${title}, hazme preguntas acerca de este libro`

        const {messaToStorageChabot}=getBaseObjects(mensajes,'')

        messaToStorageChabot.texto=texto;

        SetState(4);
        dispatch(SetBookToTalk({id,title}));
        dispatch(addMessage(messaToStorageChabot))

    }


    return {
        mensajes,
        onAddMessage,
        libros,
        status,
        onUploadBook,
        indice,
        activeBookTalk,
        getRelatedBooks,
        onSetBookToTalk
    }

}