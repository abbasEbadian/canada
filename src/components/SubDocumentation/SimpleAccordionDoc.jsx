import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatIcon from "@mui/icons-material/Chat";
import Introduction from "../../img/document/Introduction.svg";
import Overview from "../../img/document/Overview.svg";
import GettingStarted from "../../img/document/GettingStarted.svg";
import ProtocolExplainer from "../../img/document/ProtocolExplainer.svg";
import Swap from "../../img/document/Swap.svg";
import Developer from "../../img/document/Developer.svg";
import SchoolIcon from "@mui/icons-material/School";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styled from "@emotion/styled";

const AccordionDocument = styled.div`
  background-color: var(--bs-blue-900);
  height: 100%;
  .MuiPaper-elevation {
    background-color: var(--bs-blue-900);
  }
  .MuiTypography-root {
    color: var(--white);
    font-size: 14px;
    img,
    svg {
      margin-right: 15px;
      background-color: var(--gray-900);
      padding: 10px;
      border-radius: 7px;
    }
  }
  .MuiAccordionSummary-expandIconWrapper {
    svg {
      color: var(--white);
    }
  }
  .accordion-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 12px;

    a.accordion-details-link {
      text-decoration: none;
      color: var(--white);
      margin-block: 8px;

      span {
        svg {
          position: relative;
          z-index: 50;
        }
        margin-right: 15px;
        position: relative;

        &::after {
          content: " ";
          position: absolute;
          background-color: var(--gray-900);
          width: 2px;
          height: 22px;
          bottom: 100%;
          left: 9px;
          z-index: 10;

        }
       
      }
      &:first-of-type span:after{
          height: 40px;
        }
    }
  }
`;

export default function SimpleAccordionDoc() {
  const CaptionName = {
    typography1: "Introduction",
    typography2: "Getting Started",
    typography3: "Overview",
    typography4: "Protocol Explainer",
    typography5: "Perpetual Swap Trading",
    typography6: "Developer Resources",
    typography7: "Educational Resources",
  };
  return (
    <AccordionDocument>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="div">
            <ChatIcon fontSize="large" /> {CaptionName.typography1}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography component="div">
            {" "}
            <img src={GettingStarted} width={40} /> {CaptionName.typography2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Set up Wallet, Deposits and W...
            </a>

            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Trading on Drift
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Glossary
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div">
            <img src={Overview} alt="OverviewIcon" width={40} />{" "}
            {CaptionName.typography3}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Methods
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Features
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Layout
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Z-index scales
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div">
            {" "}
            <img
              src={ProtocolExplainer}
              alt="ProtocolExplainer"
              width={40}
            />{" "}
            {CaptionName.typography4}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Set up Wallet, Deposits and W...
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Trading on Drift
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div">
            <img src={Swap} alt="SwapIcone" width={40} />{" "}
            {CaptionName.typography5}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Set up Wallet, Deposits and W...
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Trading on Drift
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div">
            <img src={Developer} alt="DeveloperIcon" width={40} />{" "}
            {CaptionName.typography6}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Set up Wallet, Deposits and W...
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
              Trading on Drift
            </a>
            <a href="" className="accordion-details-link">
              <span>
                <RadioButtonUncheckedIcon fontSize="small" />
              </span>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div">
            <SchoolIcon fontSize="large" /> {CaptionName.typography7}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <a href="" className="accordion-details-link">
             <span> <RadioButtonUncheckedIcon fontSize="small" /></span>
              Set up Wallet, Deposits and W...
            </a>
            <a href="" className="accordion-details-link">
             <span> <RadioButtonUncheckedIcon fontSize="small" /></span>
            </a>
            <a href="" className="accordion-details-link">
             <span> <RadioButtonUncheckedIcon fontSize="small" /></span>
              Trading on Drift
            </a>
            <a href="" className="accordion-details-link">
             <span> <RadioButtonUncheckedIcon fontSize="small" /></span>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </AccordionDocument>
  );
}
