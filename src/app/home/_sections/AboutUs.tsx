"use client";
import pngs from "@/_assets/pngs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

import Button from "@/_components/Button";

const scrollToContactUs = () => {
  const contactUsSection = document.getElementById("contact-us");
  if (contactUsSection) {
    contactUsSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function AboutUs() {
  return (
    <>
      <Box
        className="section-padding"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: { sm: "100vh", xl: "auto" },
          backgroundColor: color.White,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: { xs: "flex-start", lg: "center" },
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "50px", lg: "60px", xl: "80px" },
            maxWidth: "1600px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: { xs: "10px", md: "30px", xl: "35px" },
              maxWidth: { lg: "600px", xl: "700px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Divider
                sx={{
                  borderBottom: "1px solid #FF7800",
                  width: "60px",
                  margin: "auto",
                }}
              />
              <Typography
                sx={{
                  color: color.orange,
                  fontSize: font.quaternaryTypography,
                  lineHeight: font.quaternaryTypography,
                  textTransform: "uppercase",
                }}
              >
                about us
              </Typography>
            </Box>
            <Typography
              sx={{
                color: color.darkGreen,
                fontSize: font.headingTertiary,
                fontWeight: "700",
              }}
            >
              Making Homes Warmer, Greener, and More Efficient
            </Typography>
            <Typography
              sx={{
                color: color.grey,
                fontSize: font.tertiaryTypography,
              }}
            >
              We, as a certified energy company, aim to provide you with heating
              grant by first checking your eligibility, and then moving towards
              providing you with your new free heating system. With air source
              heat pumps, Condensing boiler, radiators, and insulators all
              covered under the scheme, all that remains is that you make good
              use of it.
            </Typography>
            <Box onClick={scrollToContactUs}>
              <Button>Check Eligibility</Button>
            </Box>
          </Box>
          <Box>
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={pngs.SolarPlate}
              alt="solar plate"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
