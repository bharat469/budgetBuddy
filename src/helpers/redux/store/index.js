import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AuthSliceReducer from '../slice/authSlice'; // Ensure the path is correct
import { authenticationSaga } from "../saga/authSaga"; // Ensure the path is correct
import ConstantReducer from '../slice/constantSaveSlice'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with the reducer and middleware
const store = configureStore({
  reducer: {
    auth: AuthSliceReducer, // Correctly configure the slice reducer
    constant:ConstantReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk and use saga
});

// Run the saga middleware with the authentication saga
sagaMiddleware.run(authenticationSaga);

export default store;
