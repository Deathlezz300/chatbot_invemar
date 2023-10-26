import { IBook } from "../interfaces/ChatInterfaces";
import ChatApi from "../api/ChatApi";
import { baseApiUrl } from "../helpers/BookData";

export const getMessageFromBot=async(pregunta:string,contexto:string):Promise<string | boolean>=>{

    try{

        const body={
            pregunta,
            contexto
        }


        const {data}=await ChatApi.post(`${baseApiUrl}/question`,body);

        return data;

    }catch(error){
        console.log(error);
        return false;
    }


}

export const getContextBook=async(id:string):Promise<string | null>=>{


    try{

        const {data}=await ChatApi.post<string>(`${baseApiUrl}/getContextById`,{id});

        return data;

    }catch(error){
        console.log(error);
        return null;
    }

}

export const relatedBooks=async(respuestas:string[]):Promise<IBook[]>=>{

    const body={
        filtros:respuestas
    }
    
    try{

        const {data}=await ChatApi.post<IBook[]>(`${baseApiUrl}/filterByContent`,body);

        return data;

    }catch(error){
        return []
    }

}