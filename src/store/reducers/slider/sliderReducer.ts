import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { FullCard } from '../../../types';
import pseudoFetch from './sliderAPI';
import { getCardById, getCards } from '../../../FAKE_DB';

export interface SliderState {
  value: FullCard[] | null;
  currentCard: FullCard | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SliderState = {
  value: null,
  currentCard: null,
  status: 'idle',
};

export const getData = createAsyncThunk(
  'slider/fetchData',
  async () => {
    const response = await pseudoFetch<FullCard[]>(getCards);
    return response.data;
  },
);

export const setCurrentCard = createAsyncThunk(
  'slider/fetchCurrentCard',
  async (id: string) => {
    const response = await pseudoFetch<FullCard>(() => getCardById(id));
    return response.data;
  },
);

export const sliderSlice = createSlice({
  name: 'slideData',
  initialState,
  reducers:
  {
    clearCurrentCard: (state) => {
      state.currentCard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.status = 'failed';
      });

    builder
      .addCase(setCurrentCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setCurrentCard.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentCard = action.payload;
      })
      .addCase(setCurrentCard.rejected, (state) => {
        state.status = 'failed';
      });
  },

});

export const selectSlider = (state: RootState) => state.sliderSlice.value;
export const selectedCurrentCard = (state: RootState) => state.sliderSlice.currentCard;
export const { clearCurrentCard } = sliderSlice.actions;

export default sliderSlice.reducer;
