import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { color, font } from "@/app/utils/themes";

interface CustomAccordionProps {
  title: string;
  content: string;
  listItems?: string[];
}

function CustomAccordion({ title, content, listItems }: CustomAccordionProps) {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        width: "100%",
      }}
    >
      <AccordionSummary
        sx={{ padding: "0px" }}
        expandIcon={<ArrowDownwardIcon sx={{ color: color.darkGreen }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          sx={{
            color: color.darkGreen,
            fontWeight: "600",
            fontSize: font.primaryTypography,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: "0px" }}>
        <Typography
          sx={{
            color: color.grey,
            fontSize: font.quaternaryTypography,
          }}
        >
          {content}
        </Typography>

        {listItems && (
          <List
            sx={{
              listStyleType: "disc",
              pl: 1,
              color: color.grey,
              fontSize: font.captionTypography,
            }}
          >
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                sx={{ display: "list-item", paddingLeft: "0" }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
