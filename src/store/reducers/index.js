import { combineReducers } from '@reduxjs/toolkit';
import sliderSlice from './slider/sliderReducer';
import likeSlice from './like/likeReducer';

export default combineReducers({
  sliderSlice,
  likeSlice,
});
