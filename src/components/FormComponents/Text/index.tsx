import { TextField } from "@mui/material";
import type { TextProps } from "../props/TextProps";
import { Controller, useFormContext } from "react-hook-form";

const Text = ({
  name,
  variant,
  label,
  autoFocus = false,
  color = "primary",
  disabled = false,
  fullWidth = true,
  helperText,
  placeholder,
  required = false,
  size = "small",
  rules,
}: TextProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? `${label} is required` : false,
        ...rules,
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          variant={variant}
          label={label}
          autoFocus={autoFocus}
          value={field.value || ""}
          color={color}
          disabled={disabled}
          fullWidth={fullWidth}
          placeholder={placeholder}
          required={required}
          size={size}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || helperText}
        />
      )}
    />
  );
};

export default Text;
