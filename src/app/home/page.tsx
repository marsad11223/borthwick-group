import { Box } from "@mui/material";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import OurServices from "./_components/OurServices";
import OurProcess from "./_components/OurProcess";
import ContactUs from "./_components/ContactUs";
import Testimonial from "./_components/Testimonial";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurProcess />
      <ContactUs />
      <Testimonial />
    </Box>
  );
}
