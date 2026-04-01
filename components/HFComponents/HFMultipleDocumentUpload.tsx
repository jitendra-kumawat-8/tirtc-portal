import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Chip, FormLabel, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import classNames from "classnames";

interface HFMultipleDocumentUploadProps {
  name: string;
  label: string;
  labelVariant?: "small" | "medium";
  rules?: object;
  onChange?: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
}

const HFMultipleDocumentUpload: React.FC<HFMultipleDocumentUploadProps> = ({
  name,
  label,
  labelVariant = "small",
  rules = {},
  onChange,
  accept = "image/jpeg,image/jpg",
  maxFiles = 10,
}) => {
  const { control } = useFormContext();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelection = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldOnChange: (value: File[]) => void
  ) => {
    const files = Array.from(e.target.files || []);
    const nextFiles = [...selectedFiles, ...files].slice(0, maxFiles);

    setSelectedFiles(nextFiles);
    fieldOnChange(nextFiles);
    onChange?.(nextFiles);
  };

  const removeFile = (
    index: number,
    fieldOnChange: (value: File[]) => void
  ) => {
    const nextFiles = selectedFiles.filter((_, fileIndex) => fileIndex !== index);
    setSelectedFiles(nextFiles);
    fieldOnChange(nextFiles);
    onChange?.(nextFiles);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
          <FormLabel
            className={classNames(
              "font-inter text-[#374151]",
              { "text-sm font-medium": labelVariant === "small" },
              { "text-base font-semibold": labelVariant === "medium" }
            )}
          >
            {label}
          </FormLabel>

          {selectedFiles.length < maxFiles && (
            <label
              className={classNames(
                "flex items-center gap-2 p-3 border rounded-md border-gray-300 cursor-pointer hover:border-primary-500",
                { "border-red-500": fieldState.error }
              )}
            >
              <input
                type="file"
                multiple
                onChange={(e) => handleFileSelection(e, field.onChange)}
                className="hidden"
                accept={accept}
              />
              <AttachFileIcon className="text-primary-500" fontSize="small" />
              <span className="text-gray-400 font-inter">
                Attach Files ({selectedFiles.length}/{maxFiles})
              </span>
            </label>
          )}

          {selectedFiles.length > 0 && (
            <Box className="flex flex-col gap-2">
              <Typography variant="body2" className="text-[#374151] font-medium">
                Selected Files:
              </Typography>
              <Box className="flex flex-wrap gap-2">
                {selectedFiles.map((file, index) => (
                  <Chip
                    key={`${file.name}-${index}`}
                    label={file.name}
                    onDelete={() => removeFile(index, field.onChange)}
                    deleteIcon={<DeleteIcon />}
                    variant="outlined"
                    size="small"
                    className="max-w-xs"
                  />
                ))}
              </Box>
            </Box>
          )}

          {fieldState.error ? (
            <p className="text-xs text-red-500 font-medium">
              {fieldState.error.message}
            </p>
          ) : (
            <p className="text-xs text-gray-400 font-inter">
              *JPG, JPEG format only (Max {maxFiles} files, 5MB each)
            </p>
          )}
        </div>
      )}
    />
  );
};

export default HFMultipleDocumentUpload;
