import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logIn: (state, action) => {
      // it will take the state and modifies the user
      state.user = action.payload;
    },
    logOut: (state) => {
      // it will take the state and modifies the user to null
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
