import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const key = "6b31bdcc4168f2f03d1d3f91838f5a53";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          return rejectWithValue("Enter valid location");
        }
        throw new Error("An error occurred");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { weather: null, loading: false, error: null },

  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
