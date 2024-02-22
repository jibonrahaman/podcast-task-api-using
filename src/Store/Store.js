import { configureStore } from '@reduxjs/toolkit'
import  UserSlices  from '../Slices/UserSlices'


export const store = configureStore({
  reducer: {
    userLoginInfo:UserSlices
  },
})