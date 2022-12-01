import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

// signin action
export const singin = createAsyncThunk("auth/signin", async (value) => {
  try {
    const data = await authAPI.signIn(value);
    // Lưu thông tin user xuống localStorage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem("user");
      return { ...state, user: null };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(singin.pending, (state, action) => {
      return { ...state, loading: true };
    });

    builder.addCase(singin.fulfilled, (state, action) => {
      return { ...state, loading: false, user: action.payload };
    });

    builder.addCase(singin.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
