import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./aboutSlice";

const store = configureStore({
  reducer: {
    about: aboutSlice,
  },
});

export default store;
