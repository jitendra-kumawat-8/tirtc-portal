import React from "react";
import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  FormLabel,
  createFilterOptions,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface OptionType {
  value: string | number;
  label: string;
}

interface HFAutocompleteProps<T>
  extends Omit<
    AutocompleteProps<T, false, false, false>,
    "name" | "defaultValue" | "renderInput"
  > {
  name: string;
  label?: string;
  options: T[];
  defaultValue?: T;
  rules?: object;
  componentProps?: Partial<
    Omit<AutocompleteProps<T, false, false, false>, "name">
  >;
  placeholder?: string;
  variant?: "small" | "medium";
  labelVariant?: "small" | "medium";
  storeOptionType?: "string" | "number" | "object";
  creatable?: boolean;
}

const filter = createFilterOptions<any>();

const HFAutocomplete = <T,>({
  name,
  label,
  options,
  defaultValue = undefined,
  rules = {},
  componentProps = {},
  placeholder = "",
  variant = "small",
  labelVariant = "small",
  storeOptionType = "string",
  creatable = false,
  ...props
}: HFAutocompleteProps<T>) => {
  const { control } = useFormContext();

  const labelStyles =
    variant === "medium"
      ? "text-[#4B5563] font-inter font-semibold text-base"
      : "";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <Autocomplete
          {...componentProps}
          {...props}
          options={options}
          value={(() => {
            if (storeOptionType === "string" || storeOptionType === "number") {
              const match = (options as any[]).find((option: any) => {
                if (typeof option === "object") {
                  return String(option.value) === String(field.value);
                }
                return String(option) === String(field.value);
              });

              if (match) return match as any;

              if (
                field.value !== undefined &&
                field.value !== null &&
                field.value !== ""
              ) {
                return {
                  value: field.value,
                  label: String(field.value),
                } as any;
              }

              return null;
            }

            return (field.value as any) || null;
          })()}
          freeSolo={creatable as any}
          getOptionLabel={(option: any) => {
            if (typeof option === "string") return option;
            return option?.label || option?.value || "";
          }}
          isOptionEqualToValue={(option: any, value: any) => {
            const optionValue =
              typeof option === "object" ? option?.value : option;
            const valueValue = typeof value === "object" ? value?.value : value;
            return String(optionValue) === String(valueValue);
          }}
          renderInput={(params) => (
            <div className="flex flex-col gap-1">
              {label && (
                <FormLabel
                  className={classNames(
                    "font-inter text-[#374151]",
                    { "text-sm font-medium": labelVariant === "small" },
                    { "text-base font-semibold": labelVariant === "medium" }
                  )}
                >
                  {label}
                </FormLabel>
              )}
              <TextField
                {...params}
                placeholder={placeholder}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
              />
            </div>
          )}
          onChange={(_, data: any) => {
            if (typeof data === "object" && data !== null) {
              if (data.inputValue) {
                const nextValue =
                  storeOptionType === "object"
                    ? { value: data.inputValue, label: data.inputValue }
                    : data.inputValue;
                field.onChange(nextValue);
              } else {
                field.onChange(
                  storeOptionType === "string" || storeOptionType === "number"
                    ? data?.value
                    : data
                );
              }
            } else {
              const nextValue =
                storeOptionType === "object" && data
                  ? { value: data, label: data }
                  : data;
              field.onChange(nextValue);
            }
          }}
          filterOptions={(opts: any[], params: any) => {
            const filtered = filter(opts, params);

            if (creatable && params.inputValue !== "") {
              const alreadyExists = opts.some((option: any) => {
                if (typeof option === "object") {
                  const labelValue = String(option.label ?? "");
                  const optionValue = String(option.value ?? "");
                  return (
                    optionValue.includes(String(params.inputValue)) ||
                    labelValue.includes(String(params.inputValue))
                  );
                }

                return String(option).includes(String(params.inputValue));
              });

              if (!alreadyExists) {
                filtered.unshift({
                  inputValue: params.inputValue,
                  value: params.inputValue,
                  label: `Add "${params.inputValue}"`,
                } as OptionType);
              }
            }

            return filtered;
          }}
        />
      )}
    />
  );
};

export default HFAutocomplete;
