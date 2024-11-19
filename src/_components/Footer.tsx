import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Link, Typography } from "@mui/material";
import Image from "next/image";
export default function Footer() {
  const textStyles = {
    fontSize: font.captionTypography,
    color: color.grey,
    textWrap: "no-wrap",
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
              justifyContent: { xs: "space-between", lg: "space-between" },
              alignItem: "flex-start",
              width: "100%",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
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
                gap: { xs: "8px", md: "15px", lg: "20px" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                sx={{
                  fontSize: font.primaryTypography,
                  color: color.darkGreen,
                  fontWeight: "600",
                }}
              >
                Social Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "8px", lg: "15px" },
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "8px", lg: "15px" },
                  }}
                >
                  <Image
                    style={{ width: "20px", objectFit: "contain" }}
                    src={svgs.Instagram}
                    alt="instagram"
                  />
                  <Typography sx={{ ...textStyles }}>Instagram </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "8px", lg: "15px" },
                  }}
                >
                  <Image
                    style={{ width: "20px", objectFit: "contain" }}
                    src={svgs.Facebook}
                    alt="instagram"
                  />
                  <Typography sx={{ ...textStyles }}>Facebook </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: { sx: "8px", md: "15px", lg: "20px" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                sx={{
                  fontSize: font.primaryTypography,
                  color: color.darkGreen,
                  fontWeight: "600",
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
                  fontWeight: "600",
                }}
              >
                Scheme
              </Typography>
              <Typography
                sx={{
                  ...textStyles,
                  maxWidth: "300px",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Want to learn more about the scheme? Click the link below:
              </Typography>
              <Typography
                sx={{
                  ...textStyles,
                  width: "80%",
                  textAlign: { xs: "center", sm: "left" },
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Link
                  sx={{ color: color.grey, textDecoration: "none" }}
                  href="https://www.gov.uk/energy-company-obligation"
                  target="_blank"
                >
                  https://
                  <Link sx={{ color: color.darkGreen, textDecoration: "none" }}>
                    www.gov.uk/energy-company-obligation
                  </Link>
                </Link>
              </Typography>
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
