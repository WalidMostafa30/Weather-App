import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const key = "6b31bdcc4168f2f03d1d3f91838f5a53";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (city, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );
      return res;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return rejectWithValue("Enter valid location");
      }
      return rejectWithValue("An error occurred");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { weather: null, isLoading: false, error: null },

  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
