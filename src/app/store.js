import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../features/signUpSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    signUpButton: signUpReducer,
    user: userReducer,
  },
});
