import { createSlice } from "@reduxjs/toolkit";
 
  

const userDetails = createSlice({
  name: "user",
  initialState:null,

  reducers: {
    addUser: (state,action) => {
        console.log(action.payload.formData);
       return action.payload;
    },

    removeUser: () => {
      return null;
    },
  },
});
 
export const { addUser, removeUser } = userDetails.actions;
export default userDetails.reducer;
