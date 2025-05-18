import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

interface ModalState {
  open: boolean;
  title?: string;
  description?: string;
  form?: string;
  props?: Record<string, unknown>;
  content?: ReactNode;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
}

type ModalPayload<T = Record<string, unknown>> =
  | {
      title?: string;
      description?: string;
      content: ReactNode;
      form?: never;
      props?: T;
      width?: "xs" | "sm" | "md" | "lg" | "xl";
    }
  | {
      title?: string;
      description?: string;
      form: string;
      content?: never;
      props?: T;
      width?: "xs" | "sm" | "md" | "lg" | "xl";
    };

const initialState: ModalState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<ModalPayload>) => {
      state.open = !state.open;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.description = action.payload.description;
      state.form = action.payload.form;
      state.props = action.payload.props;
      state.width = action.payload.width;
    },
    openModal: (state, action: PayloadAction<ModalPayload>) => {
      state.open = !state.open;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.form = action.payload.form;
      state.description = action.payload.description;
      state.props = action.payload.props;
      state.width = action.payload.width;
    },
    closeModal: (state) => {
      state.open = !state.open;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
