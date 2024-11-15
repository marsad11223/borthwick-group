export const scrollToContactUs = () => {
  const contactUsSection = document.getElementById("contact-us");
  if (contactUsSection) {
    contactUsSection.scrollIntoView({ behavior: "smooth" });
  }
};
