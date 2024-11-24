import { color, font } from "@/app/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import CustomAccordion from "@/_components/CustomAccordion";

const accordionData = [
  {
    title: "What is ECO4 funding?",
    content:
      "The Energy Company Obligation (ECO) is a government energy efficiency scheme in Great Britain to help reduce carbon emissions and tackle fuel poverty. The scheme began in April 2013 with most of our customers qualifying under the Home Cost Reduction Obligation (HHCRO) Under HHCRO, obligated suppliers must provide measures which improve the ability of households to heat their homes. This includes actions that result in heating savings such as the replacement or repair of a boiler, cavity wall insulation and loft insulation.",
  },
  {
    title: "How do I apply?",
    content:
      "You can apply for ECO 4 Funding by applying right here on our website. Our team will then contact you to take you through the process and advise which measures you qualify for. Apply Now.",
  },
  {
    title: "How do I qualify for ECO 4 funding?",
    content:
      "In order to qualify for ECO4 Funding, you must match certain criteria. For homeowners and tenants you or someone in your household must be in receipt of one of the following government credits/benefits.",
    listItems: [
      "Universal Credit",
      "Tax Credits",
      "Pension Credits",
      "ESA",
      "Income Support",
      "JSA (Jobseeker's Allowance)",
      "Housing Benefit",
    ],
  },
  {
    title: "Do I have to pay for installation?",
    content: "No, all aspects of the scheme are 100% free!",
  },
  {
    title: "What we offer?",
    content:
      "Most people know the scheme as a free boiler replacement scheme however under ECO 4 the following energy-saving measures are available.",
    listItems: [
      "A Rated Gas Boiler Replacement",
      "Air Source Heat Pumps",
      "First Time Central Heating",
      "Solar PV",
      "Electric Storage Heaters",
      "External Wall Insulation",
      "Internal Wall Insulation",
      "Room in Roof Insulation",
      "Loft Insulation",
      "Under Floor Insulation",
    ],
  },
  {
    title: "Where does the funding come from?",
    content:
      "Funding for your Home Energy Improvements is paid for by the Leading Energy Companies such as British Gas, SSE, Scottish Power, N-Power and so on. They have a quota to fill for improving the energy performance of UK Homes and can face large fines if they miss their targets. The aim is to reduce how much fuel UK households use on average. To improve this they aim to make generating heat cheaper (with new boilers), and maintaining heat easier (with insulation). The money for these improvements comes from the profits of companies everyone is contributing to monthly, in our energy bills. It doesn't come from the Government the same way that things like Universal Credit does.",
  },
  {
    title: "Where do you provide services?",
    content: "We provide work in England, Scotland and Wales",
  },
];

export default function FAQ() {
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
                  FAQ
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
                Frequently Asked Question
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: {
                  xs: "40px",
                  sm: "40px",
                  md: "60px",
                  lg: "80px",
                  xl: "100px",
                },
                width: "100%",
              }}
            >
              {accordionData.map((item, index) => (
                <CustomAccordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  listItems={item.listItems ? item.listItems : []} // Ensure listItems is always an array
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
