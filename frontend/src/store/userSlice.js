import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSclice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails : (state, action)=>{
      state.user = action.payload
      // console.log('userDetails action payload ->',action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSclice.actions

export default userSclice.reducer