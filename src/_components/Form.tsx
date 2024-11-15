"use client";
import React, { useState, useEffect } from "react";
import { color, font } from "@/app/utils/themes";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Radio,
} from "@mui/material";
import StandardInput from "./StandardInput";
import Button from "./Button";

export default function Form() {
  const [radioValue, setRadioValue] = useState<string>("homeOwner");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { xs: "20px", md: "50px" },
        gap: "20px",
        backgroundColor: color.white,
        width: { xs: "100%", md: "600px", lg: "600px" },
      }}
    >
      <Typography
        sx={{
          color: color.darkGreen,
          fontSize: font.secondaryTypography,
          fontWeight: "700",
        }}
      >
        Fill The Form
      </Typography>
      <StandardInput type="text" label="Name" />
      <StandardInput type="email" label="Email" />
      <StandardInput type="text" label="Address" />
      <StandardInput type="number" label="Phone number" />
      <StandardInput type="text" label="Post Code" />
      <FormControl
        fullWidth
        sx={{ backgroundColor: "#EDEDED", borderRadius: "4px" }}
      >
        <Select
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#EDEDED",
              borderRadius: "4px",
              fontSize: "18px",
              color: "#757575",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "#757575",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#757575",
              },
            },
            "& .MuiInputBase-input": {
              color: "#757575",
            },
          }}
          defaultValue={2}
          open={dropdownOpen}
          onOpen={() => setDropdownOpen(true)}
          onClose={() => setDropdownOpen(false)}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 200, // Optional: Limit height of dropdown
              },
            },
            disableScrollLock: true,
          }}
        >
          <MenuItem value={1}>Sofas</MenuItem>
          <MenuItem value={2}>Chairs</MenuItem>
          <MenuItem value={3}>Tables</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Radio
            value="homeOwner"
            checked={radioValue === "homeOwner"}
            onChange={handleRadioChange}
            name="homeType"
            sx={{
              color: color.darkGreen,
              "&.Mui-checked": {
                color: color.darkGreen,
              },
              padding: "0",
              marginRight: "9px",
            }}
          />
          <Typography
            sx={{ fontSize: font.microTypography, color: color.grey }}
          >
            Home Owner
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Radio
            value="tenant"
            checked={radioValue === "tenant"}
            onChange={handleRadioChange}
            name="homeType"
            sx={{
              color: color.darkGreen,
              "&.Mui-checked": {
                color: color.darkGreen,
              },
            }}
          />
          <Typography
            sx={{ fontSize: font.microTypography, color: color.grey }}
          >
            Tenant
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Radio
            value="other"
            checked={radioValue === "other"}
            onChange={handleRadioChange}
            name="homeType"
            sx={{
              color: color.darkGreen,
              "&.Mui-checked": {
                color: color.darkGreen,
              },
            }}
          />
          <Typography
            sx={{ fontSize: font.microTypography, color: color.grey }}
          >
            Other
          </Typography>
        </Box>
      </Box>

      <Button>Submit</Button>
    </Box>
  );
}
