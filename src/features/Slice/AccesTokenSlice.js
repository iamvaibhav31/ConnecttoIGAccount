import { createSlice } from "@reduxjs/toolkit";



const initialState = {
     LonglifeAccesstoken: "",
     shortlifeAccesstoken: "",
     code: "",
     status: 'idle', // idle | loading | successful | failed
     error: null
}

const DriverSlice = createSlice({
     name: 'Driver',
     initialState,
     reducers: {
          // addDriver(state, actions) {
          //      state.DriverData.name = actions.payload.name
          //      state.DriverData.Role = actions.payload.role
          //      state.DriverData.Currentlocation = actions.payload.currentlocation
          //      state.DriverData.CurrentLongitude = actions.payload.CurrentLongitude
          //      state.DriverData.CurrentLatitude = actions.payload.CurrentLatitude
          // },


     },
     // extraReducers(builder) {
     //      builder
     //           .addCase(registeDriver.pending, (state, action) => {
     //                state.status = "loading"
     //           })
     //           .addCase(registeDriver.fulfilled, (state, action) => {
     //                console.log(action.payload)
     //                state.status = "successful"
     //                state.DriverID = action.payload._id
     //                state.DriverData.name = action.payload.name
     //                state.DriverData.Role = action.payload.name
     //                state.DriverData.Currentlocation = action.payload.name
     //                state.DriverData.CurrentLongitude = action.payload.name
     //                state.DriverData.CurrentLatitude = action.payload.name
     //           })
     //           .addCase(registeDriver.rejected, (state, action) => {
     //                state.status = "failed"
     //                state.error = action.error.message
     //           })



     // }
})


// export const { addPosts, addreactions, editPost } = DriverSlice.actions;


export const getdriverid = (state) => state.Driver.DriverID
export const getstatus = (state) => state.Driver.status
export const geterror = (state) => state.Driver.error




export default DriverSlice.reducer;