import axios from "axios";
import { BASE_URL, END_POINT } from "../../constant/apiBaseUrl";

export const SendOtp = async (body) => {
  try {
    console.log('POST API ',BASE_URL+END_POINT.SEND_OTP,body)
    const response = await axios.post(BASE_URL + 'resend-otp', body);
   console.log(response.status === 200)
    // Check if response status is 200
    if (response.status === 200) {
      return response.data; // Return the data if successful
    } else {
      // Handle unsuccessful status
      throw new Error('API request failed');
    }
  } catch (error) {
    // Log and throw error in case of failure
    console.log('Error during OTP request:', error);
    throw error;
  }
};
export const VerifyOtp = async (body) => {
  try {
    console.log('POST API ',BASE_URL+END_POINT.VERIFY_OTP,body)
    const response = await axios.post(BASE_URL + END_POINT.VERIFY_OTP, body);
     console.log(response)
    // Check if response status is 200
    if (response.status === 200) {
      return response.data; // Return the data if successful
    } else {
      // Handle unsuccessful status
      throw new Error('API request failed');
    }
  } catch (error) {
    // Log and throw error in case of failure
    console.log('Error during OTP Verify:', error);
    throw error;
  }
};
