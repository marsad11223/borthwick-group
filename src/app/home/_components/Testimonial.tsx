// import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
// import Image, { StaticImageData } from "next/image";

export default function Testimonial() {
  return (
    <>
      <Box
        className="section-padding"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.white,
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* heading & text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: "20px",
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
                  Our Process
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                What They Say About Our Service
              </Typography>
            </Box>
          </Box>
          {/* slider  card  */}
          <Box
            sx={{
              paddingTop: {
                xs: "40px",
                sm: "40px",
                md: "60px",
                lg: "80px",
                xl: "100px",
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: color.lightGreen,
                borderRadius: "30px",
                padding: "22px",
                width: "356px",
              }}
            >
              <Typography>some text</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
