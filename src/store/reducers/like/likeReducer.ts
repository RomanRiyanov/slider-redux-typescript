import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { pseudoFetch, setLikeApi } from './likeApi';

export interface LikeState {
  likes: string[],
  status: string
}

const initialState: LikeState = {
  likes: [],
  status: 'idle',
};

export const setLikeToCard = createAsyncThunk(
  'like/fetchLikeToCard',
  async (id: string) => {
    const result = await pseudoFetch<string>(() => setLikeApi(id));
    return result.data;
  },
);

export const likeSlice = createSlice({
  name: 'likeData',
  initialState,
  reducers:
    {
    },
  extraReducers: (builder) => {
    builder
      .addCase(setLikeToCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setLikeToCard.fulfilled, (state, action) => {
        state.status = 'idle';
        if (!state.likes.includes(action.payload)) {
          state.likes = [...state.likes, action.payload];
        } else state.likes = state.likes.filter((item) => item !== action.payload);
      })
      .addCase(setLikeToCard.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectLike = (state: RootState) => state.likeSlice.likes;

export default likeSlice.reducer;
