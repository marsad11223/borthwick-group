import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { color, font } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";

interface OurProcessCardProps {
  stars: number; // Number of stars to display
  message: string; // Review text
  author: string; // Name of the person giving the review
  styles?: {
    cardBackground?: string; // Optional custom background color
    textColor?: string; // Optional text color for the message
    authorColor?: string; // Optional text color for the author
  };
}

export function OurProcessCard({
  stars,
  message,
  author,
  styles = {},
}: OurProcessCardProps) {
  const {
    cardBackground = color.lightGreen,
    textColor = color.grey,
    authorColor = color.darkGreen,
  } = styles;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: { xs: "223px", md: "200px", lg: "241px" },
      }}
    >
      <Box
        className="project"
        sx={{
          backgroundColor: cardBackground,
          borderRadius: "30px",
          padding: "22px",
          width: { xs: "250px", md: "300px" },
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
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
                src={i < stars ? svgs.OrangeStar : svgs.WhiteStar}
                alt={i < stars ? "orange star" : "white star"}
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
                color: textColor,
                fontSize: font.captionTypography,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 5,
              }}
            >
              {message}
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
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            color: authorColor,
            fontSize: font.captionTypography,
          }}
        >
          {author}
        </Typography>
      </Box>
    </Box>
  );
}
