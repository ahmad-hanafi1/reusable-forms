import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import type { DatePickerProps } from "../props/DateProps";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const DatePicker = ({
  name,
  label,
  disabled = false,
  loading = false,
  minDate,
  maxDate,
  openTo = "day",
  views = ["year", "month", "day"],
  variant = "outlined",
  color = "primary",
  required = false,
  rules = {},
  onChange = () => {},
}: DatePickerProps) => {
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
          <MuiDatePicker
            {...field}
            value={field.value || null}
            onChange={(date) => {
              onChange(date ? date : dayjs());
              field.onChange(date);
            }}
            label={`${label}${required ? " *" : ""}`}
            disabled={disabled}
            loading={loading}
            minDate={minDate}
            maxDate={maxDate || dayjs()}
            openTo={openTo}
            views={views}
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

export default DatePicker;
