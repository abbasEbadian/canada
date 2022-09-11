// import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

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
    padding : 180px 0; 
    margin: 50px 0;
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
  a {
    color : #fff;
    border : 1px solid #eee;
    border-radius : 7px;
    padding: 5px 25px
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
//   useEffect(() => {
//     const body = document.querySelector('#root');

//     body.scrollIntoView({
//         behavior: 'smooth'
//     }, 500)

// }, []);
  return (
    
    <DocLayout active={'pools'}>
      <ContentBody >
        {/* table */}
        {/* <TableContent /> */}
        <div className="caption-content-box"  >
          <span className="caption-content fs-5">In the intelligent platform, there are pools for each sector. In the centralized section of Intelligent, users in each section deposit their credit and assets in these pools. Pools like:</span>
        </div>
        <div className="step-content-body" id="pools_1">
          <div className="caption-step-content">
            <p>
              At the beginning of users entering the platform, each user must deposit some assets to trade on the platform, and all these credits are deposited into a pool called Collateral, this pool and its activity are under the supervision of the admin and smart contracts in the <span className="fw-bold">clearing house</span>
              department.
              Therefore, account settlements and payments are done as soon as possible, and users no longer have to worry about the security of transactions and settlement of accounts and fraud.
              <br />
              Collateral pool in the DEX section, it is completely decentralized and runs on the Solana platform, and users can deposit native assets and stablecoins that are supported in the Solana network in this pool.
              <br />
              From this pool, users' assets are transferred to other pools.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="pools_2">
          <div>
            <p>
              Liquidity pool is one of the most attractive parts of intelligent. In this pool, users change their assets from collateral to liquidity. We will tell when there is a demand for the liquidity pool in the  <span className="fw-bold">pricing </span>
              section, but one of the most important characteristics of a decentralized platform is the presence of sufficient liquidity in it (many DeFi platforms are facing liquidity problems). Intelligent has tried to secure its liquidity as much as possible. Liquidity
              <span className="fw-bold">
                {" suppliers "}
              </span>
              have attractive advantages that we will recount in the suppliers section. In addition to security, the liquidity pool creates balance in both centralized and decentralized platforms.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="pools_3">
          <div className="caption-step-content">
            <p>
              Another intelligent attraction is the token bundle section, which we explain in the complete bundle price. But in short, users can tokenize their account to share their risk and sell it while they have their own account! But for this, the trader's account assets are deposited into the account pool, which is also under the supervision of the clearing house.

            </p>
          </div>
        </div>

        <div className="step-content-body" id="pools_4">
          <div className="caption-step-content">
            <p>
            As in the previous section, the user sold his account in the form of tokens, in this section, he can reduce his open trade to tokens instead of the full account. to sell Finally, its property is deposited from the collateral section to the position pool.
Note: the trading account of its position is not sold, but according to the analysis of the user's assets, the token is presented and the token is sold. After the transaction or account is closed, the token is burned.

            </p>
          </div>
        </div>
        <div className="step-content-body" id="pools_5">
          <div className="caption-step-content">
            <p className="fw-bold">
              All the information of transactions, deals, payments and deposits and withdrawals are stored in this pool. Therefore, this pool is one of the main parts of the platform.
              <br />
              Tokenized account pool : When you tokenize your account, the complete account information is stored in this pool.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="pools_6">
          <div className="caption-step-content">
            <p className="fw-bold">
            When you tokenize your account, the complete account information is stored in this pool.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/doc/technical-review" variant="outlined">prev</Link>
          <Link to="/doc/accounts" variant="outlined">next</Link>
        </div>
      </ContentBody >
    </DocLayout >
  );
}

export default DocPools;
