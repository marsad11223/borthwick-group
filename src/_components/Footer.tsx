import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
export default function Footer() {
  const textStyles = {
    fontSize: font.captionTypography,
    color: color.grey,
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "30px 20px",
          sm: "40px 50px",
          md: "50px 80px",
          lg: "50px 100px",
          xl: "50px 150px",
        },
        backgroundColor: color.lightGreen,
      }}
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", md: "40px", lg: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "flex-start",
              maxWidth: { lg: "1000px", xl: "1000px" },
              width: "100%",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "17px",
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100px", height: "auto" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={svgs.Logo}
                  alt="logo"
                />
              </Box>
              <Typography
                sx={{ fontSize: font.quaternaryTypography, color: color.grey }}
              >
                Powering Homes with a Greener Future
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { sx: "8px", md: "15px", lg: "20px" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                sx={{
                  fontSize: font.primaryTypography,
                  color: color.darkGreen,
                }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { sx: "4px", md: "8px", lg: "15px" },
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    ...textStyles,
                    maxWidth: "300px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Our Support and Sales team is available 24 /7 to answer your
                  queries
                </Typography>
                <Typography sx={{ ...textStyles }}>
                  123 Anywhere Street, NY
                </Typography>
                <Typography sx={{ ...textStyles }}>
                  +1 (333) 000-0000
                </Typography>
                <Typography sx={{ ...textStyles }}>
                  brightecofuture@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Typography
          sx={{
            fontSize: font.quaternaryTypography,
            color: color.darkGreen,
            textAlign: "center",
          }}
        >
          Copyright © 2024 Bright Eco Future
        </Typography>
      </Box>
    </Box>
  );
}
