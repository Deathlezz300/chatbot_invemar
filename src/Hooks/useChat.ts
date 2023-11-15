import { useDispatch, useSelector } from "react-redux";
import { IBook, mensaje } from '../interfaces/ChatInterfaces';
import { RootState } from "../store/store";
import { EditMessage, SetBookToTalk, addAnswerContex, addMessage, changeStatus, deleteAnswersContext, firstMessage, onSetIndice, setBooks, setMetadaDataBook } from "../store/ChatSlice";
import { DataMessageQuestions } from "../helpers/MessageData";
import ChatApi from "../api/ChatApi";
import { getBaseObjects } from "../helpers/getBaseObjects";
import { getContextBook, getMessageFromBot, relatedBooks } from "../services/getMessageFromBot";
import { ordenarLlegadaMetada, ordernarMetaDataSalida } from '../helpers/formatMetaData';

interface IUsechat{
    mensajes:mensaje[],
    libros:IBook[]
    onAddMessage:(texto:string)=>void,
    status:boolean,
    indice:number,
    onUploadBook:(file:File)=>Promise<boolean>,
    activeBookTalk:IBook,
    onSetBookToTalk:(id:string,title:string)=>void,
    onRestartIndice:()=>void,
    metadaDataBook:any,
    onSaveMetaData:(Metadata:any)=>Promise<boolean>
}

export const useChat=():IUsechat=>{

    const {mensajes,libros,status,activeBookTalk,answersContext,indice,metadaDataBook}=useSelector((state:RootState)=>state.Chat);

    const dispatch=useDispatch();

    const onAddMessage=async(texto:string)=>{

        const {messageToStore,messaToStorageChabot}=getBaseObjects(mensajes,texto);

        dispatch(addMessage(messageToStore));
        dispatch(addMessage(messaToStorageChabot));

        if(indice<4){
            if(!texto.toLowerCase().includes('no')) dispatch(addAnswerContex(texto));

            setTimeout(()=>{
                dispatch(EditMessage({id:messaToStorageChabot.id,texto:DataMessageQuestions[indice]}));
            },700)


            

            if(indice+1===4){


                const Books=await relatedBooks(answersContext);

                if(!Array.isArray(Books)) return ;

                dispatch(setBooks([...libros,...Books]))
            }

            dispatch(onSetIndice(indice+1))

            return;
        }

        let getAnswer=await getMessageFromBot(texto,activeBookTalk.context as string);

        console.log(getAnswer)

        if(!getAnswer) getAnswer='No disponible';

        // messaToStorageChabot.texto=getAnswer as string;

        dispatch(EditMessage({id:messaToStorageChabot.id,texto:getAnswer as string}));

    }


    const onUploadBook=async(archivo:File):Promise<boolean>=>{

        dispatch(changeStatus());
        try{

            const file=new FormData();
            file.append('file',archivo);

            const {data}=await ChatApi.post(`/upload`,file,{
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            })


            const ordenada=ordenarLlegadaMetada(data);
            

            dispatch(setMetadaDataBook(ordenada));

            return true;
            

        }catch(error){
            console.log(error);
            return false
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


        dispatch(onSetIndice(4))
        dispatch(SetBookToTalk(BookTalk));
        dispatch(addMessage(messaToStorageChabot))
        dispatch(changeStatus());

    }

    const onSaveMetaData=async(Metadata:any):Promise<boolean>=>{

        dispatch(changeStatus());
        try{

            const data=ordernarMetaDataSalida(Metadata);

            data.resumen_HTML=data.resumen;

            const res=await ChatApi.post(`/saveMetadata`,data);

            console.log(res.data);

            return true;

        }catch(error){
            console.log(error);
            return false;
        }finally{
            dispatch(changeStatus())
        }

    }


    const onRestartIndice=()=>{
        const messageLast={...firstMessage}
        messageLast.id=mensajes[mensajes.length-1].id+1;
        dispatch(deleteAnswersContext());
        dispatch(addMessage(messageLast));
        dispatch(setBooks([libros[0]]));
        dispatch(onSetIndice(0));
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
        onRestartIndice,
        metadaDataBook,
        onSaveMetaData
    }

}