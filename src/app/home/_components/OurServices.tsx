// import pngs from "@/_assets/pngs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
// import Image from "next/image";

export default function OurServices() {
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
          backgroundColor: color.lightGreen,
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
              justifyContent: "end",
              alignItems: "end",
              gap: "20px",
              width: "100%",
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
          </Box>
        </Box>
      </Box>
    </>
  );
}
