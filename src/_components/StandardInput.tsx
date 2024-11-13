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
}

export default function StandardInput({
  type = "text",
  label = "Outlined",
  multiline = false,
  value,
  defaultValue,
  onChange,
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
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          backgroundColor: color.lightgrey,
          borderRadius: "4px",
          fontSize: "18px",
          color: color.grey,
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: color.grey,
          },
          "&.Mui-focused fieldset": {
            borderColor: color.grey,
          },
        },
        "& .MuiInputBase-input": {
          color: color.grey,
        },
        "& .MuiInputLabel-root": {
          color: color.grey,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: color.grey,
        },
      }}
      {...props}
    />
  );
}
