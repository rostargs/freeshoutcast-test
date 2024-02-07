// MUI
import { Accordion, AccordionDetails, AccordionSummary, Typography, styled } from "@mui/material";
// MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExplanationAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" && theme.palette.border.light,
  boxShadow: theme.shadows[4],
}));

const Explanation = ({ title, content, isExpanded, onToggleExplanation, id }) => {
  return (
    <ExplanationAccordion
      variant="outlined"
      onChange={onToggleExplanation(`panel-${id}`)}
      expanded={isExpanded === `panel-${id}`}
      id={`panel-${id}`}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1" component="h6">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>/* CONTENT */</Typography>
      </AccordionDetails>
    </ExplanationAccordion>
  );
};

export default Explanation;
