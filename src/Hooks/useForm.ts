import { useState,ChangeEvent } from "react"

export const useForm=<T extends object>(initalState:T)=>{

    const [form,SetForm]=useState(initalState);

    const onInputChange=({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value}=target;
        SetForm({
            ...form,
            [name]:value
        });
    }

    const onResetValues=()=>{
        SetForm(initalState);
    }

    return{
        ...form,
        onInputChange,
        onResetValues
    }

}