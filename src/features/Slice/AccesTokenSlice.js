import { createSlice } from "@reduxjs/toolkit";



const initialState = {
     LonglifeAccesstoken: "",
     code: "",
     status: 'idle', // idle | loading | successful | failed
     error: null
}

const AccessTokenSlice = createSlice({
     name: 'InstaAccessCode',
     initialState,
     reducers: {
          // addInstaCode(state, actions) {

          // },
     },
     // extraReducers(builder) {
     //      builder
     //           .addCase(registeDriver.pending, (state, action) => {
     //                state.status = "loading"
     //           })
     //           .addCase(registeDriver.fulfilled, (state, action) => {
     //                console.log(action.payload)

     //           })
     //           .addCase(registeDriver.rejected, (state, action) => {
     //                state.status = "failed"
     //                state.error = action.error.message
     //           })



     // }
})


// export const { addInstaCode } = AccessTokenSlice.actions;



// export const getinstacode = (state) => state.AccessToken.code
// export const geterror = (state) => state.AccessToken.error




export default AccessTokenSlice.reducer;