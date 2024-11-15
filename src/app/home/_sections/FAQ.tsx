import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
// import Image, { StaticImageData } from "next/image";

export default function FAQ() {
  return (
    <>
      <Box
        className="section-padding"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.white,
          flexDirection: "column",
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* heading & text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                maxWidth: { xs: "400px", md: "500px", lg: "600px" },
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
                  FAQ
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  textAlign: "center",
                  maxWidth: "400px",
                }}
              >
                Frequently Asked Question
              </Typography>
            </Box>
            {/* card box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "30px", md: "50px", lg: "80px" },
                paddingTop: {
                  xs: "40px",
                  sm: "40px",
                  md: "60px",
                  lg: "80px",
                  xl: "100px",
                },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
