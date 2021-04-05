import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../features/signUpSlice';

export default configureStore({
  reducer: {
    signUpButton: signUpReducer,
  },
});
