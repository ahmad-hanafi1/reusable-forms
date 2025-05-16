import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";
import type { SelectProps } from "../props/SelectProps";

const MultiSelect = ({
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
}: SelectProps<string>) => {
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
            multiple
            defaultOpen={defaultOpen}
            label={label}
            value={field.value || []}
            onOpen={onOpen}
            onClose={onClose}
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

export default MultiSelect;
