import type { Dayjs } from "dayjs";
import type { DateView } from "@mui/x-date-pickers/models";
import type { TextFieldProps } from "@mui/material";

/**
 * Props for the custom RHF-integrated DatePicker component.
 */
export interface DatePickerProps {
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
   * Whether to show a loading indicator inside the date picker dropdown.
   * @default false
   */
  loading?: boolean;

  /**
   * Minimum selectable date (inclusive).
   */
  minDate?: Dayjs;

  /**
   * Maximum selectable date (inclusive).
   */
  maxDate?: Dayjs;

  /**
   * Default open view.
   * @default 'day'
   */
  openTo?: DateView;

  /**
   * Views to allow selection from (e.g., 'year', 'month', 'day').
   * @default ['year', 'month', 'day']
   */
  views?: readonly DateView[];

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
   * Handler triggered when the date changes.
   * @default () => {}
   */
  onChange?: (date: Dayjs) => void;
}
