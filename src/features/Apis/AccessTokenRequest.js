import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";




export const InstaCode = createAsyncThunk("Insta/InstaCode", async () => {
     try {
          const response = await axios.get(`${process.env.REACT_APP_InstaCodeURL}?client_id=${process.env.REACT_APP_App_ID}
          &redirect_uri=${process.env.REACT_APP_Redirect_URL}
          &scope=user_profile,user_media
          &response_type=code`)
          return response
     } catch (e) {
          return e.message
     }
})

