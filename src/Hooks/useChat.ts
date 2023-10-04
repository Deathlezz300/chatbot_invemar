import { useDispatch, useSelector } from "react-redux";
import { IBook, mensaje } from "../interfaces/ChatInterfaces";
import { RootState } from "../store/store";
import { EditMessage, addMessage } from "../store/ChatSlice";
import { DataMessages } from "../helpers/MessageData";

interface IUsechat{
    mensajes:mensaje[],
    libros:IBook[]
    onAddMessage:(texto:string)=>void
}

export const useChat=():IUsechat=>{

    const {mensajes,libros}=useSelector((state:RootState)=>state.Chat);

    const dispatch=useDispatch();

    const onAddMessage=(texto:string)=>{

        const BaseId=mensajes.length>0 ? mensajes[mensajes.length-1].id : 1 

        const messageToStore:mensaje={
            id:BaseId+1,
            texto,
            messageOwner:'user'
        }

        const messaToStorageChabot:mensaje={
            id:messageToStore.id+1,
            texto:'',
            messageOwner:'chatbot'
        }

        dispatch(addMessage(messageToStore));
        dispatch(addMessage(messaToStorageChabot));

        setTimeout(()=>{
            const random=Math.floor(Math.random() * 10)
            dispatch(EditMessage({id:messaToStorageChabot.id,texto:DataMessages[random]}));
        },700)

    }

    return {
        mensajes,
        onAddMessage,
        libros
    }

}