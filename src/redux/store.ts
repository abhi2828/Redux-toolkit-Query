import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
    reducer:{
        [myApi?.name]:myApi.reducer,
        [myreducer?.reducerPath]:myreducer.reducer,
    }
})