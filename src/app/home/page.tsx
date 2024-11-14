import { Box } from "@mui/material";
import Hero from "./_sections/Hero";
import AboutUs from "./_sections/AboutUs";
import OurServices from "./_sections/OurServices";
import OurProcess from "./_sections/OurProcess";
import ContactUs from "./_sections/ContactUs";
import Testimonial from "./_sections/Testimonial";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurProcess />
      <ContactUs />
      <Testimonial />
      <Footer />
    </Box>
  );
}
