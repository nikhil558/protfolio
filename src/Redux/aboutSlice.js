import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "About",
  initialState: {
    aboutState: false,
  },
  reducers: {
    updateAboutState: (state) => {
      state.aboutState = !state.aboutState;
    },
  },
});

export const { updateAboutState } = aboutSlice.actions;
export default aboutSlice.reducer;
