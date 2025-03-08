import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userAPI = axios.create({
  baseURL: "https://h2oflow-team4-backend.onrender.com",
  withCredentials: true,
});
export const setAuthHeader = (token) => {
  userAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await userAPI.post("/users/register", userData);
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const logIn = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await userAPI.post("/users/login", userData, {
        withCredentials: true,
      });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
