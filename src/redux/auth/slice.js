import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations.js";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
};

const handleAuthState = (state, status, action = null) => {
  switch (status) {
    case "pending":
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
      break;
    case "fulfilled":
      state.user = action.payload.data.user;
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
      break;
    case "rejected":
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = action.payload;
      break;
    default:
      return state;
  }
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => handleAuthState(state, "pending"))
      .addCase(register.fulfilled, (state, action) =>
        handleAuthState(state, "fulfilled", action)
      )
      .addCase(register.rejected, (state, action) =>
        handleAuthState(state, "rejected", action)
      );

    builder
      .addCase(logIn.pending, (state) => handleAuthState(state, "pending"))
      .addCase(logIn.fulfilled, (state, action) =>
        handleAuthState(state, "fulfilled", action)
      )
      .addCase(logIn.rejected, (state, action) =>
        handleAuthState(state, "rejected", action)
      );
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
