import { createSlice } from "@reduxjs/toolkit";

const SliceData = createSlice({
  name: "formdata",
  initialState:{
    userData:{
      name: "",
      std:"",
    }
  },
  reducers: {
    nameadd(state,action){
      console.log({...state,name:action.payload}, "state  name added to slice data");
      return {...state,name:action.payload};
    },
    stddata(state, action) {
      console.log({...state,std:action.payload}, "state name stdadd to slice data");
      return {...state,std:action.payload};
    },
  },
});
console.log(SliceData.actions);
export default SliceData.reducer;
export const { stddata , nameadd } = SliceData.actions;