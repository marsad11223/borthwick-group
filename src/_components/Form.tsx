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
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import StandardInput from "./StandardInput";
import Button from "./Button";
import axios from "axios";
import { showError, showSuccess } from "@/app/utils/toast";
import { Controller, useForm } from "react-hook-form";

// Define an interface for the form data
interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  postCode: string;
  category: string;
  homeType: string;
}

export default function Form() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      postCode: "",
      category: "Chairs",
      homeType: "homeOwner",
    },
  });

  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/contactus", data);

      if (response.status === 200) {
        showSuccess("Email sent successfully!");
      } else {
        showSuccess("Email sent successfully!");
      }
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      showError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
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
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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

      {/* Name Field */}
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <StandardInput
            {...field}
            type="text"
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        }}
        render={({ field }) => (
          <StandardInput
            {...field}
            type="email"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      {/* Address Field */}
      <Controller
        name="address"
        control={control}
        rules={{ required: "Address is required" }}
        render={({ field }) => (
          <StandardInput
            {...field}
            type="text"
            label="Address"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        )}
      />

      {/* Phone Field */}
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{8,13}$/, // Matches numbers between 8 and 13 digits
            message: "Phone number must be between 8 and 13 digits",
          },
        }}
        render={({ field }) => (
          <StandardInput
            {...field}
            type="number"
            label="Phone number"
            error={!!errors.phone} // Highlight input if there's an error
            helperText={errors.phone?.message} // Display error message
          />
        )}
      />

      {/* Post Code Field */}
      <Controller
        name="postCode"
        control={control}
        rules={{ required: "Post Code is required" }}
        render={({ field }) => (
          <StandardInput
            {...field}
            type="text"
            label="Post Code"
            error={!!errors.postCode}
            helperText={errors.postCode?.message}
          />
        )}
      />

      {/* Category Field */}
      <Controller
        name="category"
        control={control}
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "#EDEDED",
              borderRadius: "4px",
            }}
          >
            <Select
              {...field}
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
              }}
              defaultValue={"Income based Jobseekers allowance (JSA)"}
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
              <MenuItem value={"Income based Jobseekers allowance (JSA)"}>Income based Jobseekers allowance (JSA)</MenuItem>
              <MenuItem value={"Income related Employment & Support Allowance"}>Income related Employment & Support Allowance</MenuItem>
              <MenuItem value={"(ESA) Income Support (IS)"}>(ESA) Income Support (IS)</MenuItem>
              <MenuItem value={"Pension Credit Guarantee Credit"}>Pension Credit Guarantee Credit</MenuItem>
              <MenuItem value={"Working Tax Credit (WTC)"}>Working Tax Credit (WTC)</MenuItem>
              <MenuItem value={"Child Tax Credits (CTC)"}>Child Tax Credits (CTC)</MenuItem>
              <MenuItem value={"Universal Credit (UC)"}>Universal Credit (UC)</MenuItem>
              <MenuItem value={"Housing Benefit (new eligible benefit under ECO4)"}>Housing Benefit (new eligible benefit under ECO4)</MenuItem>
              <MenuItem value={"Pension Credit Savings Credit (new eligible benefit under ECO4)"}>Pension Credit Savings Credit (new eligible benefit under ECO4)</MenuItem>
              <MenuItem value={"Child Benefit*"}>Child Benefit*</MenuItem>
            </Select>
            {errors.category && (
              <FormHelperText error>{errors.category.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      {/* Home Type Field */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {["home Owner", "tenant", "other"].map((type) => (
          <Controller
            key={type}
            name="homeType"
            control={control}
            render={({ field }) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio
                  {...field}
                  value={type}
                  checked={field.value === type}
                  sx={{
                    color: color.darkGreen,
                    "&.Mui-checked": {
                      color: color.darkGreen,
                    },
                  }}
                />
                <Typography
                  sx={{ fontSize: font.captionTypography, color: color.grey }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Typography>
              </Box>
            )}
          />
        ))}
      </Box>

      <Button type="submit" disabled={loading}>
        {loading ? (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: "-12px",
              marginTop: "-12px",
            }}
          />
        ) : (
          "Submit"
        )}
      </Button>
    </Box>
  );
}
