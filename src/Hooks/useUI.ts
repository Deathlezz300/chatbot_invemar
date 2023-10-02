import {ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'
import { setLetters, setOverflow } from '../store/UISlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../store/store';

interface useUInterface{
    autoResizeTextArea:(evento:ChangeEvent<HTMLTextAreaElement>)=>void,
    setShowLetters:()=>void,
    showOverflow:boolean,
    showLetters:boolean
}

export const useUI=():useUInterface=>{


    const dispatch=useDispatch();

    const {showOverflow,showLetters}=useSelector((state:RootState)=>state.UI);


    const autoResizeTextArea=({target}:ChangeEvent<HTMLTextAreaElement>)=>{

        if(target.scrollHeight>98){
            return dispatch(setOverflow());
        }

        target.style.height='auto';
        target.style.height=target.scrollHeight+'px'

    }

    const setShowLetters=()=>{
        dispatch(setLetters());
    }


    return {
        autoResizeTextArea,
        showOverflow,
        setShowLetters,
        showLetters
    }


}