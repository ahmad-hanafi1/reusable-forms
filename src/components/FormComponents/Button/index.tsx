import MUIButton from "@mui/material/Button";
import type { ButtonProps } from "../props/ButtonProps";

const Button = ({
  label,
  loading = false,
  color = "primary",
  disabled = false,
  startIcon,
  endIcon,
  loadingPosition = "center",
  size = "small",
  variant = "contained",
  type = "button",
  sx,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <MUIButton
      loading={loading}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      loadingPosition={loadingPosition}
      sx={sx}
      onClick={onClick}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
