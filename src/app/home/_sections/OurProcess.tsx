"use client";
import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Button from "@/_components/Button";

export default function OurProcess() {
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processData = [
    {
      image: svgs.Notepad,
      title: "01",
      text: "Check Your Eligibility",
    },
    {
      image: svgs.Book,
      title: "02",
      text: "Book Your FREE Survey",
    },
    {
      image: svgs.Tick,
      title: "03",
      text: "We Complete Your Work",
    },
  ];

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
                  Our Process
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
                How Our Process Works
              </Typography>
              <Typography
                sx={{
                  color: color.grey,
                  fontSize: font.captionTypography,
                  textAlign: "center",
                }}
              >
                {`When it comes to your needs, you need a team you can trust. We're committed to providing our clients with the highest quality Eco 4 solutions and exceptional customer service.`}
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
              {processData.map((cardData, index) => (
                <OurProcessCard
                  key={index}
                  image={cardData.image}
                  title={cardData.title}
                  text={cardData.text}
                />
              ))}
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
              }}
            >
              <Box onClick={scrollToContactUs}>
                <Button>Check Eligibility</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export function OurProcessCard({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        width: "auto",
        height: "154px",
        padding: "20px",
        whiteSpace: "nowrap",
        border: "1px solid #47BE2780",
        borderRadius: "12px",
      }}
    >
      {/* number */}
      <Typography
        sx={{
          fontSize: font.headingQuaternary,
          color: color.lightGreen,
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      {/* positioned image */}
      <Box
        sx={{
          height: "70px",
          width: "70px",
          position: "absolute",
          top: "14%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={image}
          alt="book"
        />
      </Box>
      {/* textual content */}
      <Typography
        sx={{
          color: color.darkGreen,
          fontSize: font.tertiaryTypography,
          fontWeight: "700",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
