import React from "react";
import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  FormLabel,
  createFilterOptions,
  FilterOptionsState,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface OptionType {
  value: string | number;
  label: string;
}

interface HFMultiSelectAutocompleteProps<T extends OptionType | string>
  extends Omit<
    AutocompleteProps<T, true, false, false>,
    "name" | "defaultValue" | "renderInput"
  > {
  name: string;
  label?: string;
  options: T[];
  defaultValue?: T[];
  rules?: object;
  componentProps?: Partial<
    Omit<AutocompleteProps<T, true, false, false>, "name">
  >;
  variant?: "small" | "medium";
  creatable?: boolean;
  placeholder?: string;
}

const filter = createFilterOptions<OptionType | string>();

const HFMultiSelectAutocomplete = <T extends OptionType | string>({
  name,
  label,
  options,
  defaultValue = [],
  rules = {},
  componentProps = {},
  variant = "small",
  creatable = false,
  placeholder,
  ...props
}: HFMultiSelectAutocompleteProps<T>) => {
  const { control } = useFormContext();
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          {label && (
            <FormLabel
              className={classNames(
                "font-inter text-[#374151]",
                { "text-sm font-medium": variant === "small" },
                { "text-base font-semibold": variant === "medium" }
              )}
            >
              {label}
            </FormLabel>
          )}
          <Autocomplete<any, true, false, false>
            {...(componentProps as any)}
            {...(props as any)}
            multiple
            disableCloseOnSelect
            freeSolo={creatable as any}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={
              open && field.value
                ? [
                    ...field.value
                      .filter((value: any) => {
                        const optionValue =
                          typeof value === "string" ? value : value.value;

                        return !options.some((option) => {
                          const existingOptionValue =
                            typeof option === "string" ? option : option.value;
                          return existingOptionValue === optionValue;
                        });
                      })
                      .map((value: any) => ({
                        value:
                          typeof value === "string" ? value : String(value.value),
                        label:
                          typeof value === "string" ? value : String(value.label),
                      })),
                    ...options,
                  ]
                : options
            }
            value={
              field.value
                ? field.value.map((value: any) => {
                    if (typeof value === "object" && value !== null) {
                      return value;
                    }

                    const existingOption = options.find((option) => {
                      const optionValue =
                        typeof option === "string" ? option : option.value;
                      return optionValue === value;
                    });

                    return existingOption || { value, label: value };
                  })
                : []
            }
            filterOptions={(opts: T[], params: FilterOptionsState<T>) => {
              const filtered = filter(
                opts as (OptionType | string)[],
                params as FilterOptionsState<OptionType | string>
              );

              if (creatable && params.inputValue !== "") {
                const alreadyExists = opts.some((option) => {
                  const optionValue =
                    typeof option === "string" ? option : option.value;
                  const optionLabel =
                    typeof option === "string" ? option : option.label;

                  return (
                    optionValue
                      ?.toString()
                      .includes(params.inputValue?.toString()) ||
                    optionLabel.includes(params.inputValue)
                  );
                });

                if (!alreadyExists) {
                  filtered.unshift({
                    value: params.inputValue,
                    label: `Add "${params.inputValue}"`,
                  } as OptionType);
                }
              }

              return filtered as T[];
            }}
            getOptionLabel={(option) => {
              if (typeof option === "string") return option;
              return option.label;
            }}
            isOptionEqualToValue={(option, value) => {
              const optionValue =
                typeof option === "string" ? option : option.value;
              const valueValue =
                typeof value === "string" ? value : value.value;
              return optionValue === valueValue;
            }}
            renderTags={() => null}
            renderOption={(optionProps, option, { selected }) => (
              <li
                {...optionProps}
                key={typeof option === "string" ? option : option.value}
              >
                <Checkbox
                  style={{ marginRight: 8 }}
                  checked={selected}
                  size="small"
                />
                <ListItemText
                  primary={typeof option === "string" ? option : option.label}
                />
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
                inputProps={{
                  ...params.inputProps,
                  value: open
                    ? params.inputProps?.value ?? ""
                    : field.value?.length
                      ? field.value
                          .map((value: any) => {
                            if (
                              typeof value === "object" &&
                              value !== null &&
                              "label" in value
                            ) {
                              return value.label;
                            }

                            const rawValue =
                              typeof value === "string"
                                ? value
                                : value?.value ?? value;
                            const matchedOption = options.find((option) => {
                              const optionValue =
                                typeof option === "string"
                                  ? option
                                  : option.value;
                              return String(optionValue) === String(rawValue);
                            });

                            return matchedOption
                              ? typeof matchedOption === "string"
                                ? matchedOption
                                : matchedOption.label
                              : String(rawValue);
                          })
                          .join(", ")
                      : "",
                }}
                placeholder={
                  field.value?.length
                    ? ""
                    : placeholder || "Select options..."
                }
              />
            )}
            onChange={(_, data) => {
              field.onChange(
                data.map((item: any) => {
                  if (typeof item === "string") return item;
                  if (item.inputValue) return item.inputValue;
                  return item.value;
                })
              );
            }}
          />
        </div>
      )}
    />
  );
};

export default HFMultiSelectAutocomplete;
