import axios from 'axios';
import {BASE_URL, END_POINT} from '../../constant/apiBaseUrl';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager, Settings} from 'react-native-fbsdk-next';
import { useState } from 'react';

GoogleSignin.configure({
  webClientId:
    '76806152869-n3rknbu7dqfmdgqs8ikgr5bb9t48crid.apps.googleusercontent.com',
  iosClientId:
    '76806152869-oool3nkf3vm9thi50f6nhqdde25j4e1l.apps.googleusercontent.com',
});


let confirmed



export const GoogleSingInApi = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const data = await GoogleSignin.signIn();
    console.log(data, '_____data');
    let idToken = data?.data?.idToken;

    if (!idToken) {
      throw new Error('Failed to retrieve ID token from Google Sign-In.');
    }

    // Create a Firebase credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  

    // Sign in the user with the credential
    const userCredential = await auth().signInWithCredential(googleCredential);

    // Extract user details
    const {displayName, email, photoURL, uid} = userCredential.user;

    return {
      name: displayName,
      email: email,
      photo: photoURL,
      uid: uid,
    };
  } catch (error) {
    console.log('Google Sign-In Error:', error); // Log the full error for debugging
    throw new Error(
      error.message || 'An unexpected error occurred during Google Sign-In.',
    );
  }
};

export const FacebookLoginApi = async () => {
  try {
    const loginResult = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (!loginResult) {
      throw new Error('NETWORK ERROR KINDLY TRY AGAIN');
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Failed to retrieve ID token from FaceBook Sign-In.');
    }
    const faceBookCreditial = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    const userCredential = await auth().signInWithCredential(faceBookCreditial);
    console.log('user', userCredential);
    const {displayName, email, photoURL, uid} = userCredential.user;

    return {
      name: displayName,
      email: email,
      photo: photoURL,
      uid: uid,
    };
  } catch (e) {
    console.log('FACEBOOK Sign-In Error:', e); // Log the full error for debugging
    throw new Error(
      e.message || 'An unexpected error occurred during FaceBook Sign-In.',
    );
  }
};

export const SendOtpApi = async phoneNumber => {
  try {
   
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber?.finalPhoneNumber);
    console.log('confirmatiom222222',confirmation)
      
     confirmed=confirmation
    if (confirmation) {
      console.log('confirmatiom',confirmation)
      return confirmation;
    }
  } catch (e) {
    console.log('error',e)
    throw new Error(e.message);
  }
};

export const VerifyOtp = async (data) => {
  try {
      let confirmation = auth.PhoneAuthProvider.credential(data?.confimCode,data?.code)
      console.log('kjsdghjkdghs',confirmation)
    // Use signInWithCredential to sign in the user
  const userData=  await confirmed.confirm(data?.code)     
     return userData 
  } catch (e) {
    throw new Error(e.message);
  }
};
