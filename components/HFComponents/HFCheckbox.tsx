import React from "react";
import { Checkbox, FormControlLabel, CheckboxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface HFCheckboxProps extends Omit<CheckboxProps, "name"> {
  name: string;
  label: string;
  rules?: object;
  componentProps?: Omit<CheckboxProps, "name">;
  labelVariant?: "small" | "medium";
}

const HFCheckbox: React.FC<HFCheckboxProps> = ({
  name,
  label,
  rules = {},
  componentProps = {},
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
      rules={rules}
      defaultValue={false} // <- make sure there's an initial value
      render={({ field: { value, onChange, onBlur, ref, ...fieldRest } }) => (
        <FormControlLabel
          label={<span className={labelStyles}>{label}</span>}
          control={
            <Checkbox
              {...fieldRest} // name, id, etc.
              {...componentProps} // any extra props you passed in
              checked={!!value} // <- this is what MUI cares about
              onChange={(_, checked) => onChange(checked)} // returns boolean
              onBlur={onBlur}
              inputRef={ref}
              {...props}
            />
          }
        />
      )}
    />
  );
};

export default HFCheckbox;
