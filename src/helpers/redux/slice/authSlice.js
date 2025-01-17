import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loginData: {},
  isSendOtp:false,
  loginError: null,
  userToken: '',
  isVerified:false
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
    
  },
});

export const { loginDataSuccess, loginDataError, saveUserToken ,resetAllChecks} = AuthSlice.actions;

export default AuthSlice.reducer;
