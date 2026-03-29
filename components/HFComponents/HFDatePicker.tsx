import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, FormLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface HFDatePickerProps {
  name: string;
  label?: string;
  defaultValue?: Date | null;
  rules?: object;
  variant?: "small" | "medium";
  labelVariant?: "small" | "medium";
  disabled?: boolean;
  className?: string;
}

const HFDatePicker: React.FC<HFDatePickerProps> = ({
  name,
  label,
  defaultValue = null,
  rules = {},
  variant = "small",
  labelVariant = "medium",
  disabled = false,
  className,
}) => {
  const { control } = useFormContext();

  const labelStyles =
    labelVariant === "medium"
      ? "text-[#4B5563] font-inter font-semibold text-base"
      : "";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) => (
          <div className={`flex flex-col gap-2 ${className}`}>
            {label && <FormLabel className={labelStyles}>{label}</FormLabel>}
            <DatePicker
              {...field}
              disabled={disabled}
              onChange={(date) => field.onChange(date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
                  }
                />
              )}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};

export default HFDatePicker;
