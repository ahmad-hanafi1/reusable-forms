import type { ReactNode } from "react";
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material";

/**
 * Props for the custom RHF-integrated Checkbox component.
 */
export interface CheckboxProps {
  /**
   * Name of the field used for React Hook Form registration.
   */
  name: string;

  /**
   * The label text displayed alongside the checkbox.
   */
  label?: string;

  /**
   * Validation rules passed to React Hook Form.
   * @default {}
   */
  rules?: object;

  /**
   * Whether the field is required.
   * @default false
   */
  required?: boolean;

  /**
   * Size of the checkbox.
   * @default "medium"
   */
  size?: MuiCheckboxProps["size"];

  /**
   * Color of the checkbox.
   * @default "primary"
   */
  color?: MuiCheckboxProps["color"];

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the checkbox should be checked by default.
   * Only used if uncontrolled or disabled.
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * Custom icon used for the unchecked state.
   */
  icon?: ReactNode;

  /**
   * Placement of the label relative to the checkbox.
   * @default "end"
   */
  labelPlacement?: "end" | "start" | "top" | "bottom";

  /**
   * Helper text to be shown under the checkbox.
   */
  helperText?: string;
}
