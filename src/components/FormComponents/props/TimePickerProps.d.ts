import type { Dayjs } from "dayjs";
import type { TextFieldProps } from "@mui/material";

/**
 * Props for the custom RHF-integrated TimePicker component.
 */
export interface TimePickerProps {
  /**
   * The name of the field, used for React Hook Form registration.
   */
  name: string;

  /**
   * Label to display above the input field.
   */
  label: string;

  /**
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show a loading spinner.
   * @default false
   */
  loading?: boolean;

  /**
   * Step between minutes in the dropdown.
   * For example: 5 means 00, 05, 10, ..., 55.
   */
  minutesStep?: number;

  /**
   * Display in 12-hour format (AM/PM) instead of 24-hour.
   * @default false
   */
  ampm?: boolean;

  /**
   * Variant of the text field ('outlined' | 'standard' | 'filled').
   * @default 'outlined'
   */
  variant?: TextFieldProps["variant"];

  /**
   * Color of the text field.
   * @default 'primary'
   */
  color?: TextFieldProps["color"];

  /**
   * Whether the field is required.
   * @default false
   */
  required?: boolean;

  /**
   * Custom validation rules.
   */
  rules?: object;

  /**
   * Handler triggered when the time changes.
   * @default () => {}
   */
  onChange?: (time: Dayjs) => void;
}
