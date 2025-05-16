import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import type { TimePickerProps } from "../props/TimePickerProps";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const TimePicker = ({
  name,
  label,
  disabled = false,
  minutesStep,
  ampm = true,
  variant = "outlined",
  color = "primary",
  required = false,
  rules = {},
  onChange = () => {},
}: TimePickerProps) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label || name} is required` : false,
          ...rules,
        }}
        render={({ field, fieldState }) => (
          <MuiTimePicker
            {...field}
            value={field.value || null}
            onChange={(date) => {
              onChange(date ? date : dayjs());
              field.onChange(date);
            }}
            label={`${label}${required ? " *" : ""}`}
            disabled={disabled}
            minutesStep={minutesStep}
            ampm={ampm}
            slotProps={{
              textField: {
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
                variant,
                color,
                size: "small",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
