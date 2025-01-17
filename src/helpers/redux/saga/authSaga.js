import {call, put, takeLatest} from 'redux-saga/effects';
import {REDUX_NAME} from '../../constant/reduxName';
import {SendOtp, VerifyOtp} from '../api/authApi';
import {loginDataError, loginDataSuccess, saveUserToken} from '../slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* loginDataSaga(action) {
  try {
  
    const response = yield call(SendOtp, action.payload.body);
     
    if (response) {
      yield put(loginDataSuccess(response?.data));
    } else {
     
      yield put(loginDataError('ERROR IN SENDING OTP'));
    }
  } catch (e) {
    console.log('Error during login data fetch:', e);
   
    yield put(loginDataError('An unexpected error occurred.'));
  }
}
function* VerifyDataSaga(action) {
  try {
  
    const response = yield call(VerifyOtp, action.payload.body);
  
    if (response) {
      AsyncStorage.setItem('USERTOKEN',response?.data?.token).then(()=>console.log('SUCCESSFULLY Saved'))
      yield put(saveUserToken(response?.data?.token))
      console.log(response)

    } else {
       
      yield put(loginDataError('ERROR IN VERIFY OTP'));
    }
  } catch (e) {
    console.log('Error during login data fetch:', e);
   
    yield put(loginDataError('An unexpected error occurred.'));
  }
}

export function* authenticationSaga() {

  yield takeLatest(REDUX_NAME.SET_LOGIN_SCREEN, loginDataSaga);
  yield takeLatest(REDUX_NAME.SET_VERIFY_OTP,VerifyDataSaga)
}
