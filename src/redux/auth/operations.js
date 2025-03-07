import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
export const setAuthHeader = (token) => {
  userAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await userAPI.post("/auth/register", userData);
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
