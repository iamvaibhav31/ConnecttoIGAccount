import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://graph.instagram.com/me/media?fields=id,username,thumbnail_url,media_type,media_url,caption,permalink&access_token={ACCESS_TOKEN}




export const postsvideorequests = createAsyncThunk("Driver/idusernamepostvideo", async (data) => {
          try {
                    const response = await axios.get("http://127.0.0.1:8000/Insta/profiledata/", data)
                    return response.data
          } catch (e) {
                    return e.message
          }
})