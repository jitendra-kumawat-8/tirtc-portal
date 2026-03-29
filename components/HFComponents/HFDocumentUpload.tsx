import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import classNames from "classnames";
import { fileToBase64 } from "./fileToBase64";

interface HFDocumentUploadProps {
  name: string;
  label: string;
  labelVariant?: "small" | "medium";
  rules?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HFDocumentUpload: React.FC<HFDocumentUploadProps> = ({
  name,
  label,
  labelVariant = "small",
  rules = {},
  onChange,
}) => {
  const { control } = useFormContext();

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          {/* Label */}
          <FormLabel
            className={classNames(
              "font-inter text-[#374151]",
              { "text-sm font-medium": labelVariant === "small" },
              { "text-base font-semibold": labelVariant === "medium" }
            )}
          >
            {label}
          </FormLabel>

          {/* Upload Area */}
          <label
            className={classNames(
              "flex items-center gap-2 p-3 border rounded-md border-gray-300 cursor-pointer hover:border-primary-500",
              { "border-red-500": fieldState.error }
            )}
          >
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  fileToBase64(file).then((base64) => {
                    field.onChange(base64);
                    setSelectedFile(file.name);
                  });
                }
                onChange?.(e);
              }}
              className="hidden"
            />
            <AttachFileIcon className="text-primary-500" fontSize="small" />
            <span className="text-gray-400 font-inter">Attach</span>
          </label>

          {/* Show selected file name and remove button */}
          {selectedFile && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-[#374151] font-inter">
                File selected {selectedFile}
              </span>
              <button
                type="button"
                className="text-xs text-red-500 underline cursor-pointer"
                onClick={() => {
                  field.onChange(null);
                  setSelectedFile(null);
                }}
              >
                Remove
              </button>
            </div>
          )}

          {/* Helper/Error Text */}
          {fieldState.error ? (
            <p className="text-xs text-red-500 font-medium">
              {fieldState.error.message}
            </p>
          ) : (
            <p className="text-xs text-gray-400 font-inter">
              *DOC, DOCX, PDF (5MB)
            </p>
          )}
        </div>
      )}
    />
  );
};

export default HFDocumentUpload;
