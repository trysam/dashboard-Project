import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme()
  const Colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title="FAQ" subTitle="Frequently Ask Questions Page"/>
        <Box>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    An Important Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    Other Important Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    Some other Important Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    My Favourite Questions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    A Silly Question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    One more question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={Colors.greenAccent[500]} variant="h5" > 
                    Another More question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography > 
                  I hope you're having a great day. I wanted to bring to your 
                  attention a data integrity concern regarding the 5G DL speed 
                  in the Facebook Insight. The data trend shows values prior to the 
                  commissioning of our first 5G site, and the pattern has remained 
                  \relatively stable even after deploying a few hundred sites. 
                  Could you please check and validate the integrity of this data?
                </Typography>           
              </AccordionDetails>
            </Accordion>
        </Box>
    </Box>
  )
}

export default Faq