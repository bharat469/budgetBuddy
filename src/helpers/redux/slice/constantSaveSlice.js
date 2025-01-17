import { createSlice } from "@reduxjs/toolkit";

const initialState={
    countryCode:'91'
}

const constantSlice = createSlice({
    name:'Constant',
    initialState,
    reducers:{
        saveCountryCode:(state,action)=>{
            state.countryCode=action.payload
        },
    }
})

export const {saveCountryCode}=constantSlice.actions

export default constantSlice.reducer