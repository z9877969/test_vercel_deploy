import { createSlice } from "@reduxjs/toolkit";
import {
  authWithGoogle,
  fetchUserProfile,
  getUsersAmount,
  logIn,
  logOut,
  refreshUser,
  register,
  updateUserProfile,
} from "./operations.js";
import { initialState } from "../initialState.js";
const handleAuthState = (state, status, action = null) => {
  switch (status) {
    case "pending":
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
      break;
    case "fulfilled":
      state.userData = action.payload.data.user;
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

const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetToken: (state, action) => {
      state.token = action.payload;
    },
    logoutToken: (state) => {
      state.userData = initialState.user.userData;
      state.token = null;
      state.isLoggedIn = false;
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
      )
      .addCase(logIn.pending, (state) => handleAuthState(state, "pending"))
      .addCase(logIn.fulfilled, (state, action) =>
        handleAuthState(state, "fulfilled", action)
      )
      .addCase(logIn.rejected, (state, action) =>
        handleAuthState(state, "rejected", action)
      )
      .addCase(logOut.fulfilled, (state) => {
        state.userData = initialState.user.userData;
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.token = null;
        state.userData = initialState.user;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.loading = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          ...action.payload.user,
        };
        state.loading = false;
      })
      .addCase(getUsersAmount.fulfilled, (state, action) => {
        state.totalAmount = action.payload;
        state.loading = false;
      })
      .addCase(authWithGoogle.pending, (state) => {
        handleAuthState(state, "pending");
      })
      .addCase(authWithGoogle.fulfilled, (state, action) => {
        handleAuthState(state, "fulfilled", action);
      })
      .addCase(authWithGoogle.rejected, (state, action) => {
        handleAuthState(state, "rejected", action);
      });
  },
});

export const { clearError, resetToken, logoutToken } = userSlice.actions;
export default userSlice.reducer;
