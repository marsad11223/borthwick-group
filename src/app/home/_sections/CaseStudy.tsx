"use client";
import { color } from "@/app/utils/themes";
import { Box } from "@mui/material";
import Slider from "react-slick";
import CaseStudySliderSection from "../_components/CaseStudySliderSection";
import svgs from "@/_assets/svgs";
import Image from "next/image";

export default function CaseStudy() {
  const sliderSettings = {
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box
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
          <Slider {...sliderSettings}>
            <CaseStudySliderSection />
            <CaseStudySliderSection />
            <CaseStudySliderSection />
          </Slider>
        </Box>
      </Box>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const CustomLeftArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "-20px", sm: "-36px", xl: "-60px" },
          transform: "translateY(-50%)  rotate(180deg)",
          width: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          height: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          borderRadius: "50%",
          transition: "all .4s ease-in-out",
          zIndex: "1",
          "&:hover": {
            backgroundColor: color.white,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const CustomRightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          right: { xs: "-20px", sm: "-36px", xl: "-60px" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          height: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          borderRadius: "50%",
          transition: "all .4s ease-in-out",
          zIndex: "1",
          "&:hover": {
            backgroundColor: color.white,
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
