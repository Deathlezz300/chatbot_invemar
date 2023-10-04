import { useDispatch, useSelector } from "react-redux";
import { IBook, mensaje } from "../interfaces/ChatInterfaces";
import { RootState } from "../store/store";
import { addMessage } from "../store/ChatSlice";

interface IUsechat{
    mensajes:mensaje[],
    libros:IBook[]
    onAddMessage:(texto:string)=>void
}

export const useChat=():IUsechat=>{

    const {mensajes,libros}=useSelector((state:RootState)=>state.Chat);

    const dispatch=useDispatch();

    const onAddMessage=(texto:string)=>{

        const messageToStore:mensaje={
            id:mensajes[mensajes.length-1].id+1,
            texto,
            messageOwner:'user'
        }

        dispatch(addMessage(messageToStore))

    }

    return {
        mensajes,
        onAddMessage,
        libros
    }

}