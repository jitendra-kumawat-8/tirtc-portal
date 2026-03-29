import React from "react";
import { useController } from "react-hook-form";
import { Autocomplete, TextField, Chip } from "@mui/material";
import classNames from "classnames";

interface Option {
  value: string;
  label: string;
}

interface HFCreatableMultiselectProps {
  name: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  componentProps?: any;
}

const HFCreatableMultiselect: React.FC<HFCreatableMultiselectProps> = ({
  name,
  options,
  placeholder,
  className,
  containerClassName,
  componentProps,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name });

  return (
    <div className={classNames("w-full", containerClassName)}>
      <Autocomplete
        multiple
        freeSolo
        options={options}
        value={value || []}
        onChange={(_, newValue: (Option | string)[]) => {
          // Handle both selected options and newly created ones
          const processedValue = newValue.map((item: Option | string) => {
            if (typeof item === "string") {
              return { value: item, label: item };
            }
            return item;
          });
          onChange(processedValue);
        }}
        getOptionLabel={(option: Option | string) => {
          if (typeof option === "string") {
            return option;
          }
          return option.label;
        }}
        renderTags={(value: (Option | string)[], getTagProps) =>
          value.map((option: Option | string, index) => (
            <Chip
              label={typeof option === "string" ? option : option.label}
              {...getTagProps({ index })}
              className="bg-[#F3F4F6] text-[#374151]"
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            error={!!error}
            helperText={error?.message}
            size={componentProps?.size || "medium"}
            className={classNames("w-full", className)}
          />
        )}
        {...componentProps}
      />
    </div>
  );
};

export default HFCreatableMultiselect;
