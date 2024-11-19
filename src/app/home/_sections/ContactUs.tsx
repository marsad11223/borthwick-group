import Form from "@/_components/Form";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";

export default function ContactUs() {
  return (
    <>
      <Box
        id="contact-us"
        className="section-padding"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.lightGreen,
          flexDirection: "column",
        }}
      >
        <Box sx={{ maxWidth: "1600px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              gap: "30px",
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
                contact us
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  lineHeight: font.headingTertiary,
                }}
              >
                Fill Out The Form &
              </Typography>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                }}
              >
                Become Eligible
              </Typography>
            </Box>
          </Box>
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
            <Form />
          </Box>
        </Box>
      </Box>
    </>
  );
}
