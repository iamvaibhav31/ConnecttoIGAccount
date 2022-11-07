import { configureStore } from "@reduxjs/toolkit";
import AccesTokenSlice from "./Slice/AccesTokenSlice";


export const store = configureStore({
     reducer: {
          AccessToken: AccesTokenSlice

     }
});