import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import Image from "next/image";
import { color, font } from "@/app/utils/themes";

interface CaseStudyRow {
  icon: string;
  label: string;
  before: string;
  after: string;
}

interface CaseStudyData {
  title: string;
  description: string;
  stats: CaseStudyRow[];
  notes: string[];
}

interface CaseStudySliderSectionProps {
  caseStudy: CaseStudyData;
}

export default function CaseStudySliderSection({
  caseStudy,
}: CaseStudySliderSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

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
        alignItems: { xs: "flex-start", sm: "center" },
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        gap: "50px",
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
          {caseStudy.title}
        </Typography>
        <Typography
          onClick={handleToggle}
          sx={{
            color: color.grey,
            fontSize: font.captionTypography,
            textAlign: "left",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "visible" : "hidden",
            WebkitLineClamp: isExpanded ? "unset" : 5,
            cursor: "pointer", // Add a pointer cursor to indicate it's clickable
          }}
        >
          {caseStudy.description}
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
          {caseStudy.stats.map((row, index) => (
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
      </Box>
    </Box>
  );
}
