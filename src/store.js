import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import ticketSlice from "./slices/ticketSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    ticketSlice
  },
});

export default store;
