import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChatIcon from "@mui/icons-material/Chat";
import Introduction from "../../img/document/Introduction.svg";
import OverviewIcon from "../../img/document/OverviewIcon";
import GettingStartedIcon from "../../img/document/GettingStartedIcon";
import ProtocolExplainer from "../../img/document/ProtocolExplainer.svg";
import Swap from "../../img/document/Swap.svg";
import Developer from "../../img/document/Developer.svg";
import SchoolIcon from "@mui/icons-material/School";
import CircleIcon from "@mui/icons-material/Circle";
import Scrollspy from "react-scrollspy";
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from "@mui/icons-material/Search";
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
      z-index:11;
      margin-right: 15px;
      background-color: #182d42;
      padding: 10px;
      border-radius: 7px;
    }
    
  }
  div.Mui-expanded {
    margin-top: 0 !important;
  }
  div.Mui-expanded .icon {
    svg{
      background-color: #052441;
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
    padding-left: 13px;

    .accordion-details-link {
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
            background-color: var(--light-blue);
            width: 2px;
            height: 18px;
            bottom: 120%;
            left: 7px;
            z-index: 10;
         
        }
        i{
          border: 2px solid var(--light-blue);
          border-radius: 50%;
          width: 15px;
          height: 15px;
          display: inline-block;
        }
       
      }
      &:first-of-type span:after{
          height: 40px;
        }
    }
    .is-current{
      span i{
        background-color: var(--light-blue);
      }
    }
    .is-current ~ * {
      span i{
        border-color: #ddd;
      }
      span::after{
        background-color: var(--gray-900);
      }
    }
  }
`;
const Sidebar = styled.aside`
  -webkit-flex-basis: 20%;
  -ms-flex-preferred-size: 20%;
  flex-basis: 20%;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  position: sticky;
  top: 0;
  z-index: 12;
  transition: 0.3s;
  .d-vl-none{
    display: none;
  }
  .search-document {
    
    display: flex;
    /* margin-left: 50px; */
   
      align-items: center;
      border: 1px solid var(--gray-200);
      margin-right: auto;
      width: 100%;
      padding: 9px;
      border-radius: 12px;


      .btn-search-document {
        background: transparent;
        color: var(--white);
        border: none;
      }
      .input-document {
        background: transparent;
        border: none;
        color: var(--white);
        margin-left: 15px;
        width: 100%;
        outline: none;;
      }
    }
  @media (max-width: 1050px)   {
    .d-vl-none{
      display: block;
    }
    width:100%;
    position: fixed;
    left: -100%;
    backdrop-filter: blur(8px);
    .content{
      width: 20%;
      min-width: 360px;
    }
    &.expanded {
      left: 0;
    }
  }
`;
const RadioButtonUncheckedIcon = styled.i``

const pages = [
  {
    title: 'Overview',
    key: 'overview', // Pass this name as expandend
    image: (color) => <OverviewIcon color={color} />,
    items: [
      "Set up Wallet",
      "Trading on Drift",
      "Glossary"
    ]
  },
  {
    title: 'Getting Started',
    key: 'getting_started', // Pass this name as expandend
    image: (color) => <GettingStartedIcon color={color} />,
    items: [
      "Set up Wallet",
      "Trading on Drift",
      "Glossary"
    ]
  },
  {
    title: 'Getting Started',
    key: 'test', // Pass this name as expandend
    image: (color) => <GettingStartedIcon color={color} />,
    items: [
      "Set up Wallet",
      "Trading on Drift",
      "Glossary"
    ]
  }
]
function SidebarDoc({ active, expanded, toggleMenu }) {
  return (
    <Sidebar className={expanded ? 'expanded' : ''}>
      <div className="content h-100">

        <AccordionDocument>
          <div className="d-vl-none p-3 pb-0 text-white" >
            <div className="d-flex align-items-center justify-content-between">
              <img src={Logo} alt="logo" height={32} />
              <CloseIcon onClick={toggleMenu} role="button"/>
            </div>
            <br />
            <div className="search-document">
          <button className="btn-search-document">
            {" "}
            <SearchIcon />
          </button>
          <input
            className="input-document"
            type="text"
            placeholder="Search in documentation..."
          />
        </div>
            <hr />
          </div>
          {
            pages.map((page, idx) => {
              const _expanded = active === page.key
              return <Accordion expanded={_expanded} key={idx}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={_expanded ? 'expanded' : ''}
                >
                  <Typography component="div" className="w-100 d-flex align-items-center icon">
                    {" "}
                    {_expanded ? page.image('var(--light-blue)') : page.image('#ddd')}
                    <Link to={`/doc/${page.key}`} className="text-white fs-6 flex-grow-1">{page.title}</Link>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Scrollspy offset={12} className="accordion-details   list-unstyled text-white" items={page.items.map((i, x) => page.key + '_' + (x + 1))} currentClassName="is-current">

                    {
                      page.items.map((item, idx2) => {
                        return <li className="accordion-details-link" key={idx2}>
                          <a href={`#${page.key}_${idx2 + 1} `}>
                            <span>
                              <RadioButtonUncheckedIcon fontSize="small" />
                            </span>
                            {item}
                          </a>
                        </li>
                      })
                    }

                  </Scrollspy>
                </AccordionDetails>
              </Accordion>
            })
          }


        </AccordionDocument>
      </div>
    </Sidebar>
  );
}

export default SidebarDoc;
