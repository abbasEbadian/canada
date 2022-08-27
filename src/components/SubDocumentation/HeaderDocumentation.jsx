import React from "react";
import Logo from "../../img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from '@mui/icons-material/Menu'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//#region
const HeadDocument = styled.div`
  padding-block: 16px;
  display: flex;
  align-items: center;
  background-color: var(--bs-blue-900);
  padding-inline: 16px;
  .img-logo-doc {
    flex-basis: 20%;
  }
  .search-intelligent-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-basis: auto;
    flex-grow: 1;

    .search-document {
      display: flex;
      margin-left: 50px;
      align-items: center;
      border-bottom: 1px solid var(--gray-200);
      margin-right: auto;
      width: 30%;

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
      }
    }
  }
  .back-to-intelligent{
    a{
        background-color: var(--bs-blue-700);
        text-decoration: none;
        color: var(--white);
        padding-block: 10px;
        border-radius: 15px;
        padding-inline: 16px;
    }
  }
  .toggler{
    color: white;
    fill: white;
  }
  a.intelligent-link {
    padding-inline: 8px;
    border-radius: 8px;
    margin-left: 16px;
    display: flex;
    .text{
      display: none;
    }
  }
  @media (max-width: 1050px) {
    div.search-intelligent-box {
      justify-content: flex-end;
     
      div.search-document{
        display: none;
      }
    }
    .img-logo-doc img{
      height: 36px;
    }
    
  }
  @media (min-width: 1050px) {
    .toggler{display: none;}
    a.intelligent-link {
      
      .text{
        display: block;
      }
    }
  }
`;
//#endregion

function HeaderDocumentation({ toggleMenu, menuOpen }) {
  return (
    <HeadDocument>
      <div className="img-logo-doc">
        <img src={Logo} alt="logo" />
      </div>
      <div className="search-intelligent-box">
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
          <MenuIcon className="toggler" onClick={toggleMenu} color="#fff" role='button' />
        <div className="back-to-intelligent">
          <Link to="/" className="intelligent-link">
            <span className="text ">Back to Intelligent</span>
            <ChevronRightIcon />
          </Link>
        </div>
      </div>

    </HeadDocument>
  );
}

export default HeaderDocumentation;
