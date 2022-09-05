import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
const ContentBody = styled.div`
  color : #fff;
  line-height: 2.4;
  padding: 15px 25px;
  text-align: justify;
  flex-basis: auto;
  flex-grow: 1;
  margin-inline: 16px;
  margin-top: 32px;
  position: relative;
  .caption-content-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .caption-content {
      color: var(--white);
      font-size: 48px;
    }
    .time-content-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--light-blue);
    }

  }
  .step-content-body {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-top: 16px;
    .caption-step-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .step-number {
        color: var(--white);
        margin-right: 10px;
      }
      .step-link {
        color: var(--light-blue);
        font-size: 18px;
        margin-right: 10px;
      }
      .text-step{
        color: var(--white);
        font-size: 18px;
      }
    }
    .img-step-box{
      margin-inline: auto;
      margin-block: 32px;
    }
    p{
      color: var(--white);
      font-size: 16px;

    }
  }
`;
function DocPools() {
  const CaptionName = {
    time: "19:59",
    date: "2022, June 21",
    captionContent: "Set up Wallet, Deposits and Withdrawals",
    stepNumber1: "1.",
    steplink: "Install Intelligent wallet",
    textstep: "on your preferred browser (Chrome, Brave, Firefox, Edge).",
    decStep: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
  };
  return (
    <DocLayout active={'accounts'}>
      <ContentBody >
        {/* table */}
        {/* <TableContent /> */}

        <div className="step-content-body" id="accounts_1">
          <div className="caption-step-content">
            <p className="text-white">
              At the beginning of entering the platform, the user can make his own deposit.  <span className="fw-bold"> User account  </span> is changed to  <span className="fw-bold"> collateral account</span>.
              After the steps, the user can start trading on the platform.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="accounts_2">
          <div>
            <p>
              The liquidity pool is formed by its contributors. Liquidity providers have attractive advantages for this work, as a result of these advantages, they think about long-term maintenance of their liquidity, not short-term!    <br />

              By connecting the order book transaction to the liquidity pool, traders have to pay more fees and commissions for trading with liquidity suppliers, which suppliers receive a large part of the commissions.
              <br />
              Suppliers can receive an amount from their assets as collateral and invest in relevant market sectors.
              <br />

              Note: The liquidity pool allows you to withdraw money from the pool when the liquidity has reached the desired level, of course, there is no better place for the suppliers of this pool, although they also have risks.
              <br />
              Suppliers also receive their own token, which we will discuss in the LP section.


            </p>
          </div>
        </div>
        <div className="step-content-body" id="accounts_3">
          <div className="caption-step-content">
   <p>
   The account that deposits money is collateral and the account that is traded is changed from short-term to long-term account position. It is in this section that you can use the portfolio section by purchasing more than 2 assets.
          </p>
          </div>
        </div>
        <div className="step-content-body" id="accounts_4">
          <p className="fw-bold">
            The user who tokenized his transaction in the first part in order to reduce his risk will be an asset in the position pool and the account type of the user will be position NFT account.
          </p>
        </div>
        <div className="step-content-body" id="accounts_5">

          <p className="fw-bold">
            The user who tokenized his transaction in the first part in order to reduce his risk becomes an asset in the position pool and the account type of the user is NFT account.
          </p>
        </div>
        <div className="step-content-body" id="accounts_6">
          <div className="caption-step-content">
            <p className="fw-bold">
              All the information of transactions, deals, payments and deposits and withdrawals are stored in this pool. Therefore, this pool is one of the main parts of the platform.
              <br />
              Tokenized account pool : When you tokenize your account, the complete account information is stored in this pool.
            </p>
          </div>
        </div>
      </ContentBody>
    </DocLayout>
  );
}

export default DocPools;
