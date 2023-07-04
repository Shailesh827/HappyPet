import { configureStore } from "@reduxjs/toolkit";
//import { loggedSlice } from "./slice";
import loggedReducer from "./slice";
export default configureStore({
    reducer:{
        logged:loggedReducer
        //logged:loggedSlice,
    }
});