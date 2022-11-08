import { configureStore } from "@reduxjs/toolkit";
import ProfileDataSlice from "./Slice/ProfileDataSlice";


export const store = configureStore({
     reducer: {
          ProfileData: ProfileDataSlice

     }
});