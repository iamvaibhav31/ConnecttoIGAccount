import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://graph.instagram.com/me/media?fields=id,username,thumbnail_url,media_type,media_url,caption,permalink&access_token={ACCESS_TOKEN}




export const postsvideorequests = createAsyncThunk("Driver/idusernamepostvideo", async (data) => {
          try {
                    const response = await axios.get("https://graph.instagram.com/me/media?fields=id,username,media_type,media_url,caption,permalink&access_token=IGQVJXLWl1MjkzQWdGNUs2amxjbFVVRTRVdjg4a25TRkVneXhJazVrVUM1dVRBNjRlSVYxSEVhSmxlM1l5LU9hN2cwQWtvQVZA2S08wMVhiS3E5TTg0cHhSQThuX1RvNUdhZAlNVeUhPb0xFU0ptVUE5TQZDZD", data)
                    return response.data
          } catch (e) {
                    return e.message
          }
})