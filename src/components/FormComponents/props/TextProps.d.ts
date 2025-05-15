import { TextFieldProps } from "@mui/material";
import type { RegisterOptions } from "react-hook-form";

/**
 * Props for the reusable Text input component.
 */
export interface TextProps extends Omit<TextFieldProps, "variant" | "label"> {
  /**
   * The name of the field in the form.
   * This is required for the field to be registered with react-hook-form.
   */
  name: string;

  /**
   * The variant to use: 'outlined', 'filled', or 'standard'.
   * @default 'outlined'
   */
  variant?: "outlined" | "filled" | "standard";

  /**
   * The label displayed above the input.
   */
  label: string;

  /**
   * If true, the input will be focused on mount.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Color of the component.
   * @default 'primary'
   */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";

  /**
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the input takes up the full width of its container.
   * @default true
   */
  fullWidth?: boolean;

  /**
   * Helper text to display below the input.
   */
  helperText?: string;

  /**
   * Placeholder text to show when the input is empty.
   */
  placeholder?: string;

  /**
   * Whether the field is required.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the input.
   * @default 'small'
   */
  size?: "small" | "medium";

  /**
   * Validation rules for the input.
   * This is passed to react-hook-form's register function.
   */
  rules?: RegisterOptions;
}
