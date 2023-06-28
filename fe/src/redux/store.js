import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./features/appStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateReducer
  }
});

export const RootState = store.getState;
