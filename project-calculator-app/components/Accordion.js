import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getData } from "./LocalStorage";

const EquationListAccordion = async () => {
  const storedData = await getData();
  console.log("Retrieved data:", storedData);
  return (
    <>
      <Typography color="white">Current Calculation: </Typography>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography backgroundColor="#BA9D9F">Past Calculations: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {storedData.map((equation) => (
            <Typography key={equation}>{equation}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default EquationListAccordion;
