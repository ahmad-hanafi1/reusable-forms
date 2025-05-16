import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Controller, useFormContext } from "react-hook-form";
import type { CheckboxProps } from "../props/CheckboxProps";
const Checkbox = ({
  name,
  label,
  rules = {},
  required = false,
  size = "medium",
  color = "primary",
  disabled = false,
  defaultChecked = false,
  icon,
  labelPlacement = "end",
  helperText,
}: CheckboxProps) => {
  const { control } = useFormContext();

  return (
    <FormControl error={false}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label || name} is required` : false,
          ...rules,
        }}
        render={({ field, fieldState }) => (
          <>
            <FormControlLabel
              control={
                <MuiCheckbox
                  {...field}
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  size={size}
                  color={color}
                  disabled={disabled}
                  defaultChecked={defaultChecked}
                  icon={icon}
                />
              }
              label={label}
              labelPlacement={labelPlacement}
            />
            <FormHelperText>
              {fieldState.error?.message || helperText}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
};

export default Checkbox;
