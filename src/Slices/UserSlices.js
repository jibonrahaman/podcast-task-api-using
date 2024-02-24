import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
  userInfo: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : [],
    }
export const UserSlice = createSlice({
    name:"user",
  initialState,
  reducers: {
   userLoginInfo: (state,action) =>{
    if(state.userInfo.length > 0){
      let arr = []
       state.userInfo.map((item)=>{
       if(item.email == action.payload.email){
         arr.push(item.email)
       }        
       })
       if(arr.indexOf(action.payload.email) == -1){
        state.userInfo.push(action.payload)
        localStorage.setItem('userDetails', JSON.stringify(state.userInfo));
       }
    }else{
      state.userInfo.push(action.payload);
      localStorage.setItem('userDetails', JSON.stringify(state.userInfo));
    }
   }
  },
})

// Action creators are generated for each case reducer function
export const { userLoginInfo } = UserSlice.actions

export default UserSlice.reducer