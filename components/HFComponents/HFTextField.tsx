import React from "react";
import { TextField, TextFieldProps, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface HFTextFieldProps extends Omit<
  TextFieldProps,
  "name" | "defaultValue"
> {
  name: string;
  label?: string;
  defaultValue?: string;
  rules?: object;
  componentProps?: Omit<TextFieldProps, "name">;
  containerClassName?: string;
  labelVariant?: "small" | "medium";
}

const HFTextField: React.FC<HFTextFieldProps> = ({
  name,
  label,
  defaultValue = "",
  rules = {},
  componentProps = {},
  containerClassName,
  labelVariant = "small",
  ...props
}) => {
  const { control } = useFormContext();

  const labelStyles =
    labelVariant === "medium"
      ? "text-[#4B5563] font-inter font-semibold text-base"
      : "";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={classNames(" flex flex-col gap-1", containerClassName)}>
          {label && (
            <Typography
              variant="subtitle1"
              className={classNames(
                "text-[#374151]",
                { "text-sm font-medium": labelVariant === "small" },
                { "text-base font-semibold": labelVariant === "medium" }
              )}
            >
              {label}
            </Typography>
          )}
          <TextField
            {...field}
            {...componentProps}
            {...props}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : null}
            fullWidth
          />
          {/* <Typography variant="caption" color="error">
            {fieldState.error ? fieldState.error.message : null}
          </Typography> */}
        </div>
      )}
    />
  );
};

export default HFTextField;
