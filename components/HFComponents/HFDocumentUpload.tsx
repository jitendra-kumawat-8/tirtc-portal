import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import classNames from "classnames";

interface HFDocumentUploadProps {
  name: string;
  label: string;
  labelVariant?: "small" | "medium";
  rules?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  existingDocument?: string;
}

const HFDocumentUpload: React.FC<HFDocumentUploadProps> = ({
  name,
  label,
  labelVariant = "small",
  rules = {},
  onChange,
  accept,
  existingDocument,
}) => {
  const { control } = useFormContext();

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [hasExistingDocument, setHasExistingDocument] = useState(
    !!existingDocument
  );

  const existingDocumentLabel = existingDocument
    ? existingDocument.split("/").pop() || "Uploaded file"
    : "";

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
                  field.onChange(file);
                  setSelectedFile(file.name);
                }
                onChange?.(e);
              }}
              className="hidden"
              accept={accept}
            />
            <AttachFileIcon className="text-primary-500" fontSize="small" />
            <span className="text-gray-400 font-inter">Attach</span>
          </label>

          {/* Show selected file name and remove button */}
          {(hasExistingDocument || selectedFile) && (
            <div className="mt-2 flex flex-col items-start gap-1 min-w-0">
              <span className="text-xs text-[#374151] font-inter break-all">
                {selectedFile
                  ? `File selected: ${selectedFile}`
                  : `Existing document: ${existingDocumentLabel}`}
              </span>
              <button
                type="button"
                className="text-xs text-red-500 underline cursor-pointer"
                onClick={() => {
                  field.onChange(null);
                  setSelectedFile(null);
                  setHasExistingDocument(false);
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
