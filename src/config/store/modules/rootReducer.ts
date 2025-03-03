import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from "./authSlice";
import { healthDataReducer } from "./healthDataSlice";

export const rootReducer = combineReducers({
    auth: authReducer,
    healthData: healthDataReducer
});
