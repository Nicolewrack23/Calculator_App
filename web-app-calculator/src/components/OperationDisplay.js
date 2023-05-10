import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* OperationDisplay should have its own css styling instead of being mixed 
with the main code*/

/* I would recommend renaming the function OperationDisplay to calculatorDisplay 
or similar to make it more clear what this function is doing. Also recommend defining 
the props of what h and d stand for more clarity on what data these are likely to hold */

export default function OperationDisplay({ h, d }) {
  return (
    <>
      <Typography color="white">Current Calculation: </Typography>
      <Typography color="white">{d}</Typography>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Past Calculations: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* remove the ? and clearly define the h */}
          {h?.map((operation, index) => (
            <Typography key={index}>{operation}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
