import { createSlice } from "@reduxjs/toolkit";
import { postsvideorequests } from '../Requests/ProfileDataRequests'


const initialState = {
     username: "",
     images: [],
     videos: [],
     LonglifeAccesstoken: "",
     code: "",
     status: 'idle', // idle | loading | successful | failed
     error: null
}

const ProfileDataSlice = createSlice({
     name: 'ProfileDataSlice',
     initialState,
     reducers: {

     },
     extraReducers(builder) {
          builder
               .addCase(postsvideorequests.pending, (state, action) => {
                    state.status = "loading"
               })
               .addCase(postsvideorequests.fulfilled, (state, action) => {
                    state.status = "successful"
                    state.LonglifeAccesstoken = action.payload.access_token
                    // localStorage.setItem("access_token", action.payload.access_token)
                    action.payload.data.map((items) => {
                         state.username = items.username

                         if (items.media_type === "IMAGE") {
                              state.images.push({
                                   id: items.id,
                                   caption: items.caption,
                                   media_url: items.media_url,
                                   permalink: items.permalink
                              })
                         }
                         if (items.media_type === "VIDEO") {
                              state.videos.push({
                                   id: items.id,
                                   caption: items.caption,
                                   media_url: items.media_url,
                                   permalink: items.permalink
                              })
                         }

                         return null
                    })
               })
               .addCase(postsvideorequests.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.error.message
               })
     }
})


export const getinstacode = (state) => state.ProfileData.code
export const getinstaaccesstoken = (state) => state.ProfileData.LonglifeAccesstoken
export const getinstausername = (state) => state.ProfileData.username
export const getinstaposts = (state) => state.ProfileData.images
export const getinstavideos = (state) => state.ProfileData.videos
export const geterror = (state) => state.ProfileData.error
export const getstatus = (state) => state.ProfileData.status

export default ProfileDataSlice.reducer;