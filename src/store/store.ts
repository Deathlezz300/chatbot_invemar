import { configureStore} from "@reduxjs/toolkit";
import { UISlice } from "./UISlice";
import { ChatSlice } from "./ChatSlice";
 
export const store=configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    reducer:{
        UI:UISlice.reducer,
        Chat:ChatSlice.reducer
    }
});

export type RootState =ReturnType<typeof store.getState>