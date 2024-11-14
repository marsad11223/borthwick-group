import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function OurProcess() {
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
              flexDirection: "column",
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
                  Our Process
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: color.darkGreen,
                  fontSize: font.headingTertiary,
                  fontWeight: "700",
                  textAlign: "right",
                  maxWidth: "550px",
                }}
              >
                What They Say About Our Service
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
            >
              <OurProcessCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

// OurProcessCard component that receives props from the OurProcess function
export function OurProcessCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: color.lightGreen,
          borderRadius: "30px",
          padding: "22px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {/* stars  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.WhiteStar}
            alt="white star"
          />
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.WhiteStar}
            alt="white star"
          />
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.WhiteStar}
            alt="white star"
          />
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.WhiteStar}
            alt="white star"
          />
          <Image
            style={{ width: "22px", objectFit: "contain" }}
            src={svgs.WhiteStar}
            alt="white star"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            // gap: "6px",
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
              color: color.grey,
              fontSize: font.captionTypography,
            }}
          >
            Super professional service. Everything was on-time and totaly fixed
            the problem. Realible and affdorable service with friendly support
            team.
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
        <Typography
          sx={{
            textAlign: "center",
            color: color.darkGreen,
            fontSize: font.captionTypography,
          }}
        >
          James Ellie
        </Typography>
      </Box>
    </Box>
  );
}
