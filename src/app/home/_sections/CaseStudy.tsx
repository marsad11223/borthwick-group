import svgs from "@/_assets/svgs";
import { color, font } from "@/app/utils/themes";
import {
  Box,
  Divider,
  List,
  ListItem,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function CaseStudy() {
  const whiteText = {
    backgroundColor: color.darkGreen,
    fontSize: font.quaternaryTypography,
    color: color.white,
    border: `1px solid ${color.white}`,
    textAlign: "left",
  };
  const darkText = {
    color: color.grey,
    font: font.captionTypography,
    backgroundColor: color.White,
    border: `1px solid ${color.darkGreen}`,
    textAlign: "center",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: "50px",
              overflowX: "auto",
            }}
          >
            {/* heading & text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                maxWidth: { xs: "400px", md: "500px", lg: "560px" },
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
                }}
              >
                ECO 4: Transforming Homes, Saving £2535 Annually
              </Typography>
              <Typography
                sx={{
                  color: color.grey,
                  fontSize: font.captionTypography,
                  textAlign: "left",
                }}
              >
                {`Under the UK’s ECO 4 scheme, we help eligible homeowners access
                free grants for energy upgrades. In a recent Barnsley project,
                energy improvements cut heating costs from £1812 to £693, hot
                water costs from £1512 to £106, and emissions from 7.1 to 1.8
                tonnes, raising the energy rating from G to B and saving £2535
                annually.`}
              </Typography>
            </Box>
            {/* tabel box */}
            <Box
              sx={{
                backgroundColor: color.white,
                padding: { xs: "20px", lg: "50px" },
                overflowX: "auto",
              }}
            >
              <Table sx={{ textWrap: "nowrap", overflowX: "auto" }}>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none" }}></TableCell>
                  <TableCell sx={{ borderBottom: "none" }}></TableCell>
                  <TableCell
                    sx={{
                      ...whiteText,
                      borderTopLeftRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    Before
                  </TableCell>
                  <TableCell
                    sx={{
                      ...whiteText,
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "0px",
                      textAlign: "center",
                    }}
                  >
                    After
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                    <Image src={svgs.Lighting} alt="Lighting" />
                  </TableCell>
                  <TableCell
                    sx={{
                      ...whiteText,
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    Lighting
                  </TableCell>
                  <TableCell sx={{ ...darkText }}>£84</TableCell>
                  <TableCell sx={{ ...darkText }}>£84</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                    <Image src={svgs.Heating} alt="Heating" />
                  </TableCell>
                  <TableCell sx={{ ...whiteText }}>Heating</TableCell>
                  <TableCell sx={{ ...darkText }}>£1812</TableCell>
                  <TableCell sx={{ ...darkText }}>£693</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                    {" "}
                    <Image src={svgs.HotWater} alt="HotWater" />
                  </TableCell>
                  <TableCell sx={{ ...whiteText }}>Hot Water</TableCell>
                  <TableCell sx={{ ...darkText }}>£1512</TableCell>
                  <TableCell sx={{ ...darkText }}>£106</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                    <Image src={svgs.Emission} alt="Emission" />
                  </TableCell>
                  <TableCell sx={{ ...whiteText }}>Emission</TableCell>
                  <TableCell sx={{ ...darkText }}>7.1 Tonnes</TableCell>
                  <TableCell sx={{ ...darkText }}>1.8 Tonnes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                    <Image src={svgs.Rating} alt="Rating" />
                  </TableCell>
                  <TableCell
                    sx={{
                      ...whiteText,
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    Rating
                  </TableCell>
                  <TableCell sx={{ ...darkText, color: color.red }}>
                    G
                  </TableCell>
                  <TableCell
                    sx={{
                      ...darkText,
                      color: color.mediumGreen,
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    B
                  </TableCell>
                </TableRow>
              </Table>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 1,
                  color: color.grey,
                  fontSize: font.captionTypography,
                }}
              >
                <ListItem sx={{ display: "list-item", paddingLeft: "0" }}>
                  This is a real case study of a semi-detached home, with 76m
                  square area, in Barnsley.
                </ListItem>
                <ListItem sx={{ display: "list-item", paddingLeft: "0" }}>
                  Now saving £2535 annually
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
