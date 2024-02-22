import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //   userInfo:localStorage.getItem('userLoginInfo') ? JSON.parse(localStorage.getItem('userLoginInfo')) : null,
      userInfo: [],
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
       }
    }else{
      state.userInfo.push(action.payload)
    }
   }
  },
})

// Action creators are generated for each case reducer function
export const { userLoginInfo } = UserSlice.actions

export default UserSlice.reducer