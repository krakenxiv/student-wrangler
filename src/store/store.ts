import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import studentsReducer from '../redux/slices/studentsSlice';

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
