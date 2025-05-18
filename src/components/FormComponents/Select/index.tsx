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
  returnObject = false,
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
            value={
              (returnObject
                ? field.value?.id || field.value?.value
                : field.value) || ""
            }
            required
            onClose={onClose}
            onOpen={onOpen}
            onChange={(event) => {
              const selectedId = event.target.value;
              const selectedObject = values.find(
                (entry) =>
                  (entry.value ?? entry.id ?? entry.label) === selectedId
              );

              const finalValue = returnObject ? selectedObject : selectedId;

              onChange(event);
              field.onChange(finalValue);
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
