import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";

const rootReducer = {
  modal: modalReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
