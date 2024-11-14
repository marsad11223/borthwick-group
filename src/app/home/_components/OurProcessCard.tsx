import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { color, font } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";

export function OurProcessCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: color.lightGreen,
          borderRadius: "30px",
          padding: "22px",
          width: { xs: "250px", md: "300px" },
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              style={{ width: "22px", objectFit: "contain" }}
              src={svgs.WhiteStar}
              alt="white star"
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.Comma}
            alt="Comma"
          />
          <Typography
            sx={{
              textAlign: "center",
              color: color.grey,
              fontSize: font.captionTypography,
            }}
          >
            Super professional service. Everything was on-time and totally fixed
            the problem. Reliable and affordable service with a friendly support
            team.
          </Typography>
          <Image
            style={{
              width: "22px",
              objectFit: "contain",
              position: "absolute",
              bottom: "0px",
              right: "0px",
              transform: "rotate(180deg)",
            }}
            src={svgs.Comma}
            alt="Comma"
          />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: color.darkGreen,
            fontSize: font.captionTypography,
          }}
        >
          James Ellie
        </Typography>
      </Box>
    </Box>
  );
}
