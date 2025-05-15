import type { ReactNode } from "react";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import type { IconButtonProps } from "@mui/material/IconButton";

/**
 * Shared props between Button and IconButton
 */
interface BaseButtonProps {
  /**
   * The label or icon to render inside the button.
   */
  label?: string | ReactNode;

  /**
   * Whether the button is loading (only applies to LoadingButton).
   * @default false
   */
  loading?: boolean;

  /**
   * Button color.
   * @default "primary"
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Button size.
   * @default "small"
   */
  size?: "small" | "medium" | "large";

  /**
   * HTML button type.
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
}

/**
 * Props for the standard (LoadingButton) button
 */
export interface ButtonProps
  extends BaseButtonProps,
    Omit<
      LoadingButtonProps,
      "children" | "loadingPosition" | "startIcon" | "endIcon"
    > {
  /**
   * Where to place the loading spinner.
   * @default "center"
   */
  loadingPosition?: "start" | "end" | "center";

  /**
   * Icon at the start of the button.
   */
  startIcon?: ReactNode;

  /**
   * Icon at the end of the button.
   */
  endIcon?: ReactNode;
}

/**
 * Props for IconButton
 */
export interface IconButtonProps
  extends BaseButtonProps,
    Omit<IconButtonProps, "children"> {
  /**
   * The icon for the button.
   */
  icon: ElementType;
}
