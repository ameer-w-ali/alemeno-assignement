import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const course = state.user.courses.find((c) => c.id === id);
      if (course) course.completed = completed;
    },
  },
});

export const { setUser, setCompleted } = userSlice.actions;
export default userSlice.reducer;
