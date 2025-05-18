import {
  SelectChangeEvent,
  SelectProps as MUISelectProps,
} from "@mui/material";
import { RegisterOptions } from "react-hook-form";

/**
 * Props for the reusable Select component integrated with React Hook Form.
 */
export interface OptionItem<T = string | number> {
  label: string;
  value?: T;
  id?: string | number;
}

export interface SelectProps<T = string | number>
  extends Omit<
    MUISelectProps,
    "name" | "onChange" | "value" | "defaultValue" | "children"
  > {
  /**
   * The name used for the form field (required by RHF).
   */
  name: string;

  /**
   * The label displayed above the select input.
   */
  label: string;

  /**
   * The options shown in the select dropdown.
   */
  values: OptionItem<T>[];

  /**
   * Optional custom validation rules for RHF.
   */
  rules?: RegisterOptions;

  /**
   * Whether the field is required.
   * @default false
   */
  required?: boolean;

  /**
   * Whether the select dropdown opens by default.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Whether the select dropdown is single or multiSelect.
   * @default false
   */
  multiple?: boolean;

  /**
   * Handler triggered when the select is opened.
   */
  onOpen?: () => void;

  /**
   * Handler triggered when the select is closed.
   */
  onClose?: () => void;

  /**
   * Optional handler triggered on value change.
   */
  onChange?: (event: SelectChangeEvent<T>) => void;

  /**
   * Whether to return the entire object or just the value.
   * @default false
   */
  returnObject?: boolean;
}
