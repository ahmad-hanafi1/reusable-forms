import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

interface ModalState {
  open: boolean;
  title?: string;
  description?: string;
  content?: ReactNode;
}

const initialState: ModalState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (
      state,
      action: PayloadAction<{
        title?: string;
        content?: ReactNode;
        description?: string;
      }>
    ) => {
      state.open = !state.open;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.description = action.payload.description;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
