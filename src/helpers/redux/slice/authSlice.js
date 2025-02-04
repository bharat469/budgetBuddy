import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loginData: {},

  loginError: null,
  userToken: '',
  isVerified:false,
  isSendOtp:false,
 SendOtpData:{}
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginDataSuccess: (state, action) => {
      state.loginData = action.payload; // Direct mutation is allowed
      state.isSendOtp=true
    },
    loginDataError: (state, action) => {
      state.loginError = action.payload; // Direct mutation is allowed
    },
    saveUserToken: (state, action) => {
      state.isVerified=true
      state.userToken = action.payload; // Direct mutation is allowed
    },
    resetAllChecks:(state,action)=>{
        state.isSendOtp=false;
        state.userToken=''
    },
    sendOtpSuccess:(state,action)=>{
    state.SendOtpData=action.payload;
    state.isSendOtp=true
    }
    
  },
});

export const { loginDataSuccess, loginDataError, saveUserToken ,resetAllChecks,sendOtpSuccess} = AuthSlice.actions;

export default AuthSlice.reducer;
