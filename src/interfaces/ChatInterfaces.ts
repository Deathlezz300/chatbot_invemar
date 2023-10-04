export interface mensaje{
    id:number,
    texto:string,
    messageOwner:IOwner,
}

export interface IBook{
    id:number,
    title:string
}

type IOwner= 'user' | 'chatbot';