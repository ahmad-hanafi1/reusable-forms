import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { closeModal } from "../../data/features/modalSlice";
import React from "react";
import type { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "../FormComponents";
import modalContentMap from "../../data/forms";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
  const { open, title, description, form, content } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();

  const ContentComponent = form ? modalContentMap[form] : null;

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={() => dispatch(closeModal())}
      slots={{
        transition: Transition,
      }}

      // TransitionComponent={Transition}
    >
      <IconButton
        onClick={() => dispatch(closeModal())}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
        icon={CloseIcon}
      />

      <DialogTitle>{title}</DialogTitle>
      {description && (
        <DialogContentText sx={{ ml: 2.6 }}>{description}</DialogContentText>
      )}
      <DialogContent>
        {ContentComponent ? <ContentComponent /> : content ? content : null}
      </DialogContent>
    </Dialog>
  );
}
