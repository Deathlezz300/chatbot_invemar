import { mensaje } from "../interfaces/ChatInterfaces";

export const getBaseObjects=(mensajes:mensaje[],texto:string)=>{

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

        return{
            messageToStore,
            messaToStorageChabot
        }

}