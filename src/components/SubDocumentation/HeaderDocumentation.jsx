import React from "react";
import Logo from "../../img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styled from "@emotion/styled";

//#region
const HeadDocument = styled.div`
  padding-block: 16px;
  display: flex;
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
`;
//#endregion

function HeaderDocumentation() {
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
        <div className="back-to-intelligent">
          <a href="" className="intelligent-link">
            Back to Intelligent
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </HeadDocument>
  );
}

export default HeaderDocumentation;
