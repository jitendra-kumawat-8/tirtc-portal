import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface HFCheckboxesProps {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  labelVariant?: "small" | "medium";
  rules?: object;
}

const HFCheckboxes: React.FC<HFCheckboxesProps> = ({
  name,
  label,
  options,
  labelVariant = "small",
  rules = {},
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={[]}
      render={({ field, fieldState }) => (
        <div className="flex flex-col ">
          {label && (
            <Typography
              variant="subtitle1"
              className={classNames(
                "font-inter text-[#374151]",
                { "text-sm font-medium": labelVariant === "small" },
                { "text-base font-semibold": labelVariant === "medium" }
              )}
            >
              {label}
            </Typography>
          )}
          <FormGroup row>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value?.includes(option.value)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      let newValue = Array.isArray(field.value)
                        ? [...field.value]
                        : [];
                      if (checked) {
                        newValue.push(option.value);
                      } else {
                        newValue = newValue.filter((v) => v !== option.value);
                      }
                      field.onChange(newValue);
                    }}
                  />
                }
                label={option.label}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontFamily: "Poppins",
                  },
                }}
              />
            ))}
          </FormGroup>
          {fieldState.error && (
            <Typography variant="caption" color="error">
              {fieldState.error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
};

export default HFCheckboxes;
