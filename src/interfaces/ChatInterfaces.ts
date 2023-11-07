export interface mensaje{
    id:number,
    texto:string,
    messageOwner:IOwner,
}

export interface IBook{
    Id:string,
    Titulo:string,
    context?:string
}


type IOwner= 'user' | 'chatbot';

export interface InputI{
    placeholder:string,
    nombre:string,
    tipo:'texto' | 'fecha'
}