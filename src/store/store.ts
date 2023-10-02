import { configureStore} from "@reduxjs/toolkit";
import { UISlice } from "./UISlice";
 
export const store=configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    reducer:{
        UI:UISlice.reducer
    }
});

export type RootState =ReturnType<typeof store.getState>