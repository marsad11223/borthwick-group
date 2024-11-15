import React from "react";
import TextField from "@mui/material/TextField";
import { color } from "@/app/utils/themes";

interface StandardInputProps {
  type?: string;
  label?: string;
  multiline?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string; // Additional prop for error message
}

export default function StandardInput({
  type = "text",
  label = "Outlined",
  multiline = false,
  value,
  defaultValue,
  onChange,
  error = false, // Default to no error
  helperText = "", // Default to no helper text
  ...props
}: StandardInputProps) {
  return (
    <TextField
      type={type === "message" ? "text" : type}
      label={label}
      variant="outlined"
      multiline={multiline || type === "message"}
      rows={type === "message" || multiline ? 4 : 1}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error} // Pass error state to TextField
      helperText={helperText} // Pass helper text for error or instructions
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          backgroundColor: color.lightgrey,
          borderRadius: "4px",
          fontSize: "18px",
          color: color.grey,
          "& fieldset": {
            borderColor: error ? color.red : "transparent", // Highlight border on error
          },
          "&:hover fieldset": {
            borderColor: error ? color.red : color.grey, // Hover effect for error
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? color.red : color.grey, // Focus effect for error
          },
        },
        "& .MuiInputBase-input": {
          color: color.grey,
        },
        "& .MuiInputLabel-root": {
          color: error ? color.red : color.grey, // Change label color on error
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: error ? color.red : color.grey, // Change focused label color on error
        },
      }}
      {...props}
    />
  );
}
