import MUIButton from "@mui/material/IconButton";
import type { IconButtonProps } from "../props/ButtonProps";

const IconButton = ({
  loading = false,
  color = "primary",
  disabled = false,
  size = "small",
  type = "button",
  icon: Icon,
}: IconButtonProps) => {
  return (
    <MUIButton
      loading={loading}
      color={color}
      disabled={disabled}
      size={size}
      type={type}
    >
      <Icon />
    </MUIButton>
  );
};

export default IconButton;
