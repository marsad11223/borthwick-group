"use client";
import React from "react";
import Slider from "react-slick";
import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OurProcessCard } from "../_components/OurProcessCard";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { processCardsData } from "@/app/utils/constants";

export default function OurProcess() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* Heading & Text */}
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
                testimonial
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

          {/* Slider Section */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ maxWidth: "1200px", width: "100%", marginTop: "40px" }}>
              <Slider {...settings}>
                {processCardsData.map((card, index) => (
                  <OurProcessCard
                    key={index}
                    stars={card.stars}
                    message={card.message}
                    author={card.author}
                  />
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLeftArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "-10px", md: "-36px", xl: "-60px" },
          transform: "translateY(-50%)  rotate(180deg)",
          width: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          height: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          borderRadius: "50%",
          transition: "all .4s ease-in-out",
          zIndex: "1",
          "&:hover": {
            backgroundColor: color.lightGreen,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: "50%",
            width: "100%",
          }}
        >
          <Image
            style={{
              height: "auto",
              width: "7px",
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
              position: "absolute",
            }}
            src={svgs.Arrow}
            alt="arrow left"
          />
        </Box>
      </Box>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomRightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          right: { xs: "-10px", md: "-36px", xl: "-60px" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          height: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          borderRadius: "50%",
          transition: "all .4s ease-in-out",
          zIndex: "1",
          "&:hover": {
            backgroundColor: color.lightGreen,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: "50%",
            width: "100%",
          }}
        >
          <Image
            style={{
              height: "auto",
              width: "7px",
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
              position: "absolute",
            }}
            src={svgs.Arrow}
            alt="arrow left"
          />
        </Box>
      </Box>
    </>
  );
};
