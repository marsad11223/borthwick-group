import { color, font } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Form from "@/_components/Form";
import Navbar from "@/_components/Navbar";

export default function From() {
  return (
    <>
      <Navbar />
      <Box
        className="section-padding"
        sx={{
          backgroundImage: "url(bgHero.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // height: "100% !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: { xs: "flex-start", lg: "center" },
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "40px", lg: "60px" },
            maxWidth: "1600px",
            // height: "100%",
            width: "100%",
          }}
        >
          {/* typography  */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "70px",
              maxWidth: "1600px",
            }}
          >
            <Box sx={{ maxWidth: "527px" }}>
              <Typography
                sx={{
                  fontSize: font.headingPrimary,
                  color: color.white,
                }}
              >
                Unlock <span style={{ color: color.orange }}>Free Home</span>{" "}
                Energy Upgrades with the ECO 4 Grant
              </Typography>
              <Typography
                sx={{
                  fontSize: font.tertiaryTypography,
                  color: color.white,
                  paddingTop: { xs: "6px", md: "12px", lg: "30px" },
                }}
              >
                Qualify for government grants to improve energy efficiency at no
                cost. We help you get started!
              </Typography>
            </Box>
          </Box>
          <Form />
        </Box>
      </Box>
    </>
  );
}
