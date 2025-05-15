import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { toggleModal } from "../../data/features/modalSlice";

export default function Modal() {
  const { open, title, description, content } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog open={open} onClose={() => dispatch(toggleModal({}))}>
      <DialogTitle>{title}</DialogTitle>
      {description && (
        <DialogContentText sx={{ ml: 2.6 }}>{description}</DialogContentText>
      )}

      <DialogContent sx={{ minWidth: "30vw" }}>{content}</DialogContent>
    </Dialog>
  );
}
