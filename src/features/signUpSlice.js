import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
  name: 'signUpButton',
  initialState: {
    signUpButton: false,
  },
  reducers: {
    clickedTrue: (state) => {
      state.signUpButton = true;
    },
    ClickedFalse: (state) => {
      state.signUpButton = false;
    },
  },
});

export const { clickedTrue, ClickedFalse } = signUpSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSign = state => state.signUpButton.signUpButton;

export default signUpSlice.reducer;
