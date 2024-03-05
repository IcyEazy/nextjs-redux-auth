import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  fullname: string;
  username: string;
  email: string;
  course: string;
}

interface InitialState {
  value: AuthState;
}

const initialState = {
  value: {
    isAuth: false,
    fullname: "",
    username: "",
    email: "",
    course: "",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (
      state,
      action: PayloadAction<{
        fullname: string;
        username: string;
        email: string;
        course: string;
        isAuth: boolean;
      }>
    ) => {
      return {
        value: {
          isAuth: true,
          fullname: action.payload.fullname,
          username: action.payload.username,
          email: action.payload.email,
          course: action.payload.course,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
