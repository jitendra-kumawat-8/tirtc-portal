import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface HFRadioProps {
  name: string;
  label: string;
  options: { value: string | boolean; label: string }[];
  labelVariant?: "small" | "medium";
  defaultValue?: string;
  rules?: object;
}

const HFRadio: React.FC<HFRadioProps> = ({
  name,
  label,
  options,
  labelVariant = "small",
  defaultValue = "",
  rules = {},
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
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
          <RadioGroup {...field} row>
            {options.map((option) => (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </div>
      )}
    />
  );
};

export default HFRadio;
