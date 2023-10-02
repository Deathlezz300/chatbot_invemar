import { createSlice } from '@reduxjs/toolkit';

export const UISlice = createSlice({
    name: 'UI',
    initialState: {
        showOverflow:false,
        showLetters:true
    },
    reducers: {
         setOverflow:(state)=>{
            state.showOverflow=true;
         },
         setLetters:(state)=>{
            state.showLetters=false;
         }
    }
});


// Action creators are generated for each case reducer function
export const { setOverflow,setLetters } = UISlice.actions;