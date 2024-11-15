import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { color, font } from "@/app/utils/themes";

const Button: React.FC<{
  children: React.ReactNode;
  styles?: ButtonProps["sx"];
  type?: ButtonProps["type"];
  disabled?: boolean;
}> = ({ children, styles = {}, type, disabled = false }) => {
  return (
    <MuiButton
      type={type}
      variant="contained"
      disabled={disabled}
      sx={{
        height: { xs: "45px", md: "60px" },
        fontSize: font.tertiaryTypography,
        width: "100%",
        color: "#ffffff",
        backgroundColor: "#47BE27",
        borderRadius: "4px",
        textTransform: "capitalize",
        padding: {
          xs: "8px 15px",
          sm: "12px 24px",
          lg: "16px 36px",
        },
        boxShadow: "none",
        transition:
          "background-color 0.6s ease-in-out, color 0.3s ease-in, box-shadow .6s ease-out",
        textWrap: "nowrap",
        "&:hover": {
          backgroundColor: "#40a624",
          boxShadow: `0px 3px 8px ${color.darkGreen}`,
        },
        ...styles,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
