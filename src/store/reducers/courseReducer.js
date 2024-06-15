import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  selected: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      return {
        ...state,
        courses: action.payload,
      };
    },
    setSelected: (state, action) => {
      return { ...state, selected: action.payload };
    },
  },
});

export const { setCourses, setSelected } = courseSlice.actions;
export default courseSlice.reducer;
