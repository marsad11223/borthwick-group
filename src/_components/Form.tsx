"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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

// Define an interface for the form data
interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  postCode: string;
  category: number;
  homeType: string;
}

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      postCode: "",
      category: 2,
      homeType: "homeOwner",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/contactus", data);

      if (response.status === 200) {
        console.log("Email sent successfully:", response.data.message);
      } else {
        console.error("Error sending email:", response.data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

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
            >
              <MenuItem value={1}>Sofas</MenuItem>
              <MenuItem value={2}>Chairs</MenuItem>
              <MenuItem value={3}>Tables</MenuItem>
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
        {["homeOwner", "tenant", "other"].map((type) => (
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
                  sx={{ fontSize: font.microTypography, color: color.grey }}
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
