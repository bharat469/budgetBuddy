import {call, put, takeLatest} from 'redux-saga/effects';
import {REDUX_NAME} from '../../constant/reduxName';
import {
  FacebookLoginApi,
  GoogleSingInApi,
  SendOtpApi,
  VerifyOtp,
} from '../api/authApi';
import {
  loginDataError,
  loginDataSuccess,
  saveUserToken,
  sendOtpSuccess,
} from '../slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* GoogleSiginSaga(action) {
  try {
    const response = yield call(GoogleSingInApi);
    if (response) {
      AsyncStorage.setItem('USERTOKEN', response?.uid).then(() =>
        console.log('Token Saved Succesfully'),
      );
      yield put(saveUserToken(response?.uid));
      yield put(loginDataSuccess(response));
    }
  } catch (e) {
    console.log(e, 'ERROR IN GOOGLE_SIGIN_IN');
    yield put(loginDataError('An unexpected error occurred.'));
  }
}

function* FaceBookSiginSaga(action) {
  try {
    const data = yield call(FacebookLoginApi);
    if (data) {
      AsyncStorage.setItem('USERTOKEN', data?.uid).then(() =>
        console.log('Token Saved Succesfully'),
      );
      yield put(saveUserToken(data?.uid));
      yield put(loginDataSuccess(data));
    }
  } catch (e) {
    console.log(e, 'ERROR IN FACEBOOK_SIGININ');
    yield put(loginDataError('An unexpected error occurred.'));
  }
}
function* PhoneSendOtpSaga(action) {
  try {
    const data = yield call(SendOtpApi, action.payload);

    if (data) {
      let verificationId = data.verificationId;
       yield put(sendOtpSuccess(verificationId));
    }
  } catch (e) {
    console.log(e, 'ERROR IN PHONENUMBER_SIGININ');
    yield put(loginDataError('An unexpected error occurred.'));
  }
}
function* PhoneVerifyOtpSaga(action) {
  try {
   
    const data = yield call(VerifyOtp, action.payload?.body);
    if (data) {
      AsyncStorage.setItem('USERTOKEN', data?.user?.uid).then(() =>
        console.log('Token Saved Succesfully'),
      );
      yield put(saveUserToken(data?.user?.uid));
      yield put(loginDataSuccess(data?.user));
    }
  } catch (e) {
    console.log(e, 'ERROR IN PHONENUMBER_VERIFY_PHONE_NO');
    yield put(loginDataError('An unexpected error occurred.'));
  }
}

export function* authenticationSaga() {
  yield takeLatest(REDUX_NAME.SET_GOOGLE_SIGN_IN, GoogleSiginSaga);
  yield takeLatest(REDUX_NAME.SET_FACEBOOK_SIGN_IN, FaceBookSiginSaga);
  yield takeLatest(REDUX_NAME.SET_SEND_OTP, PhoneSendOtpSaga);
  yield takeLatest(REDUX_NAME.SET_VERIFY_OTP, PhoneVerifyOtpSaga);
}
