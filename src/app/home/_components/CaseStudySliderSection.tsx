import React from "react";
import {
  Box,
  Divider,
  Typography,
  Table,
  TableRow,
  TableCell,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import { color, font } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";

export default function CaseStudySliderSection() {
  const whiteText = {
    backgroundColor: color.darkGreen,
    fontSize: font.quaternaryTypography,
    color: color.white,
    border: `1px solid ${color.white}`,
    textAlign: "left",
    padding: { xs: "3px", sm: "6px", lg: "16px" },
  };
  const darkText = {
    color: color.grey,
    font: font.captionTypography,
    backgroundColor: color.White,
    border: `1px solid ${color.darkGreen}`,
    textAlign: "center",
    padding: { xs: "3px", sm: "6px", lg: "16px" },
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        gap: "50px",
        // overflowX: "auto",
        paddingBottom: { xs: "40px", md: "60px", lg: "80px", xl: "100px" },
        paddingX: { xs: "10px", sm: "20px" },
      }}
    >
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
            our case study
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
      <Box
        sx={{
          backgroundColor: color.white,
          padding: { xs: "10px", md: "30px", xl: "50px" },
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            overflowX: "auto",
          }}
        >
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
          {[
            {
              icon: svgs.Lighting,
              label: "Lighting",
              before: "£84",
              after: "£84",
            },
            {
              icon: svgs.Heating,
              label: "Heating",
              before: "£1812",
              after: "£693",
            },
            {
              icon: svgs.HotWater,
              label: "Hot Water",
              before: "£1512",
              after: "£106",
            },
            {
              icon: svgs.Emission,
              label: "Emission",
              before: "7.1 Tonnes",
              after: "1.8 Tonnes",
            },
            { icon: svgs.Rating, label: "Rating", before: "G", after: "B" },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
                <Image src={row.icon} alt={row.label} />
              </TableCell>
              <TableCell sx={{ ...whiteText }}>{row.label}</TableCell>
              <TableCell sx={{ ...darkText }}>{row.before}</TableCell>
              <TableCell sx={{ ...darkText }}>{row.after}</TableCell>
            </TableRow>
          ))}
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
            This is a real case study of a semi-detached home, with 76m square
            area, in Barnsley.
          </ListItem>
          <ListItem sx={{ display: "list-item", paddingLeft: "0" }}>
            Now saving £2535 annually
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

// export function CaseStudySliderSection() {
//   const whiteText = {
//     backgroundColor: color.darkGreen,
//     fontSize: font.quaternaryTypography,
//     color: color.white,
//     border: `1px solid ${color.white}`,
//     textAlign: "left",
//   };
//   const darkText = {
//     color: color.grey,
//     font: font.captionTypography,
//     backgroundColor: color.White,
//     border: `1px solid ${color.darkGreen}`,
//     textAlign: "center",
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "flex-start",
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: "space-between",
//         gap: "50px",
//         overflowX: "auto",
//         paddingBottom: { xs: "40px", md: "60px", lg: "80px", xl: "100px" },
//       }}
//     >
//       {/* Heading & Text Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           justifyContent: "center",
//           gap: "20px",
//           width: "100%",
//           maxWidth: { xs: "400px", md: "500px", lg: "560px" },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <Divider
//             sx={{
//               borderBottom: "1px solid #FF7800",
//               width: "60px",
//               margin: "auto",
//             }}
//           />
//           <Typography
//             sx={{
//               color: color.orange,
//               fontSize: font.quaternaryTypography,
//               lineHeight: font.quaternaryTypography,
//               textTransform: "uppercase",
//             }}
//           >
//             Our Process
//           </Typography>
//         </Box>
//         <Typography
//           sx={{
//             color: color.darkGreen,
//             fontSize: font.headingTertiary,
//             fontWeight: "700",
//           }}
//         >
//           ECO 4: Transforming Homes, Saving £2535 Annually
//         </Typography>
//         <Typography
//           sx={{
//             color: color.grey,
//             fontSize: font.captionTypography,
//             textAlign: "left",
//           }}
//         >
//           {`Under the UK’s ECO 4 scheme, we help eligible homeowners access
//             free grants for energy upgrades. In a recent Barnsley project,
//             energy improvements cut heating costs from £1812 to £693, hot
//             water costs from £1512 to £106, and emissions from 7.1 to 1.8
//             tonnes, raising the energy rating from G to B and saving £2535
//             annually.`}
//         </Typography>
//       </Box>

//       {/* Table Section */}
//       <Box
//         sx={{
//           backgroundColor: color.white,
//           padding: { xs: "20px", lg: "50px" },
//           overflowX: "auto",
//         }}
//       >
//         <Table sx={{ textWrap: "nowrap", overflowX: "auto" }}>
//           <TableRow>
//             <TableCell sx={{ borderBottom: "none" }}></TableCell>
//             <TableCell sx={{ borderBottom: "none" }}></TableCell>
//             <TableCell
//               sx={{
//                 ...whiteText,
//                 borderTopLeftRadius: "10px",
//                 textAlign: "center",
//               }}
//             >
//               Before
//             </TableCell>
//             <TableCell
//               sx={{
//                 ...whiteText,
//                 borderTopRightRadius: "10px",
//                 borderTopLeftRadius: "0px",
//                 textAlign: "center",
//               }}
//             >
//               After
//             </TableCell>
//           </TableRow>
//           {[
//             {
//               icon: svgs.Lighting,
//               label: "Lighting",
//               before: "£84",
//               after: "£84",
//             },
//             {
//               icon: svgs.Heating,
//               label: "Heating",
//               before: "£1812",
//               after: "£693",
//             },
//             {
//               icon: svgs.HotWater,
//               label: "Hot Water",
//               before: "£1512",
//               after: "£106",
//             },
//             {
//               icon: svgs.Emission,
//               label: "Emission",
//               before: "7.1 Tonnes",
//               after: "1.8 Tonnes",
//             },
//             { icon: svgs.Rating, label: "Rating", before: "G", after: "B" },
//           ].map((row, index) => (
//             <TableRow key={index}>
//               <TableCell sx={{ borderBottom: "none", paddingLeft: "0" }}>
//                 <Image src={row.icon} alt={row.label} />
//               </TableCell>
//               <TableCell sx={{ ...whiteText }}>{row.label}</TableCell>
//               <TableCell sx={{ ...darkText }}>{row.before}</TableCell>
//               <TableCell sx={{ ...darkText }}>{row.after}</TableCell>
//             </TableRow>
//           ))}
//         </Table>
//         <List
//           sx={{
//             listStyleType: "disc",
//             pl: 1,
//             color: color.grey,
//             fontSize: font.captionTypography,
//           }}
//         >
//           <ListItem sx={{ display: "list-item", paddingLeft: "0" }}>
//             This is a real case study of a semi-detached home, with 76m square
//             area, in Barnsley.
//           </ListItem>
//           <ListItem sx={{ display: "list-item", paddingLeft: "0" }}>
//             Now saving £2535 annually
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );
// }
