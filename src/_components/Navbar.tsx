"use client";
import svgs from "@/_assets/svgs";
import { font, color } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const fontStyle = {
    fontSize: font.quaternaryTypography,
    color: color.offWhite,
    textWrap: "nowrap",
  };

  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: {
            xs: "0px 20px",
            sm: "8px 50px",
            md: "8px 80px",
            lg: "8px 100px",
            xl: "8px 150px",
            backgroundColor: color.darkGreen,
          },
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              overflowX: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "26px",
                alignItems: "center",
                maxWidth: "1600px",
                width: "100%",
              }}
            >
              <Typography sx={{ ...fontStyle }}>
                123 Anywhere Street, NY
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: "32px",
                  width: "1px",
                  backgroundColor: color.white,
                  border: "1px dashed #ffffff",
                }}
              />
              <Typography sx={{ ...fontStyle }}>
                brightecofuture@gmail.com
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  height: "32px",
                  width: "1px",
                  backgroundColor: color.white,
                  border: "1px dashed #ffffff",
                }}
              />
              <Typography sx={{ ...fontStyle }}>+1 (333) 000-0000</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: {
            xs: "20px 20px",
            sm: "20px 50px",
            md: "20px 80px",
            lg: "20px 100px",
            xl: "20px 150px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              backgroundColor: color.white,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: { xs: "50px", sm: "60px", md: "70px", lg: "85px" },
                height: "auto",
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={svgs.Logo}
                alt="logo"
              />
            </Box>
            <Box onClick={scrollToContactUs}>
              <Button>Check Eligibility</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
