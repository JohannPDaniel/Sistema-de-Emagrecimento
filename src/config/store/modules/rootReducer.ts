import { combineReducers } from '@reduxjs/toolkit';
import { healthDataReducer } from "./healthDataSlice";
import { authReducer } from "./authSlice";
import { alertReducer } from './alert';

export const rootReducer = combineReducers({
    auth: authReducer,
    healthData: healthDataReducer,
    alert: alertReducer
});
