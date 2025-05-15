import { Controller, useFormContext } from "react-hook-form";
import MUISelect from "@mui/material/Select";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import type { SelectProps } from "../props/SelectProps";

const Select = ({
  size = "small",
  variant = "outlined",
  label,
  defaultOpen = false,
  name,
  values,
  onClose = () => {},
  onOpen = () => {},
  onChange = () => {},
  rules,
  required = false,
  fullWidth = true,
  disabled = false,
  color = "primary",
}: SelectProps) => {
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
        <FormControl
          fullWidth={fullWidth}
          error={!!fieldState.error}
          color={color}
          required={required}
          disabled={disabled}
          size={size}
          variant={variant}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <MUISelect
            {...field}
            labelId={`${name}-label`}
            id="demo-simple-select"
            defaultOpen={defaultOpen}
            label={label}
            value={field.value}
            required
            onClose={onClose}
            onOpen={onOpen}
            onChange={(event) => {
              onChange(event);
              field.onChange(event);
            }}
          >
            {values.map((entry) => (
              <MenuItem
                key={entry.value || entry.id || entry.label}
                value={entry.value || entry.id || entry.label}
              >
                {entry.label}
              </MenuItem>
            ))}
          </MUISelect>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default Select;
