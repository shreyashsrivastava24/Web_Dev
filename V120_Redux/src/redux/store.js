import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    //Reducer ek fn jo ki help krega hume state ko update krne me
    reducer: {
        counter: counterReducer,
    },
})