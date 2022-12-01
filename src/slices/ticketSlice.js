import movieTicket from "../services/movieTicket";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  phongVe: null,
  gheDaDat: {
    maLichChieu: null,
    danhSachVe: [],
  },
  gheDangChon: [],
  loading: false,
  error: null,
};

export const apiTicket = createAsyncThunk("getTicket", async (maLichChieu) => {
  try {
    const data = movieTicket.getTicket(maLichChieu);
    return data;
  } catch (error) {
    throw error;
  }
});

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    chonGhe: (state, action) => {
      const index = state.gheDangChon.findIndex(
        (item) => item.maGhe === action.payload.item.maGhe
      );
      if (index === -1) {
        const newDaDat = [...state.gheDaDat.danhSachVe];
        const newDangChon = [...state.gheDangChon];
        newDangChon.push(action.payload.item);
        newDaDat.push({
          maGhe: action.payload.item.maGhe,
          giaVe: action.payload.item.giaVe,
        });
        return {
          ...state,
          gheDangChon: newDangChon,
          gheDaDat: {
            maLichChieu: action.payload.maLichChieu,
            danhSachVe: newDaDat,
          },
        };
      } else {
        const newGheDat = [...state.gheDaDat.danhSachVe];
        const newDangChon = [...state.gheDangChon];
        newDangChon.splice(index, 1);
        newGheDat.splice(index, 1);
        return {
          ...state,
          gheDangChon: newDangChon,
          gheDaDat: {
            ...state.gheDaDat,
            danhSachVe: newGheDat,
          },
        };
      }
    },
    resetGhe: (state, action) => {
      return {
        ...state,
        gheDangChon: [],
        gheDaDat: { ...state.gheDaDat, maLichChieu: null, danhSachVe: [] },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(apiTicket.pending, (state, action) => {
      return { ...state, loading: true };
    });
    builder.addCase(apiTicket.fulfilled, (state, action) => {
      return { ...state, phongVe: action.payload, loading: false };
    });
    builder.addCase(apiTicket.rejected, (state, action) => {
      return { ...state, error: action.error, loading: false };
    });
  },
});

export const { chonGhe, resetGhe } = ticketSlice.actions;

export default ticketSlice.reducer;
