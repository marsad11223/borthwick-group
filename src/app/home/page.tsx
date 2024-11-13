import { Box } from "@mui/material";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import OurServices from "./_components/OurServices";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <OurServices />
    </Box>
  );
}
