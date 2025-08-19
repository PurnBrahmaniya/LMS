import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../mockData/users";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout() {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  authSlice.actions;

// Thunk for login
export const loginUser = (email, password) => (dispatch) => {
  dispatch(loginStart());

  const user = users.find(
    (u) => u.email === email.trim() && u.password === password.trim()
  );

  if (user) {
    dispatch(loginSuccess(user));
  } else {
    dispatch(loginFail("Invalid credentials"));
  }
};

export default authSlice.reducer;
